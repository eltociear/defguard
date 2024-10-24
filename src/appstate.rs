use std::sync::{Arc, Mutex};

use axum::extract::FromRef;
use axum_extra::extract::cookie::Key;
use reqwest::Client;
use secrecy::ExposeSecret;
use serde_json::json;
use sqlx::PgPool;
use tokio::{
    sync::{
        broadcast::Sender,
        mpsc::{UnboundedReceiver, UnboundedSender},
    },
    task::spawn,
};
use uaparser::UserAgentParser;
use webauthn_rs::prelude::*;

use crate::{
    auth::failed_login::FailedLoginMap,
    db::models::{
        webhook::{AppEvent, WebHook},
        wireguard::ChangeEvent,
    },
    mail::Mail,
    server_config,
};

#[derive(Clone)]
pub(crate) struct AppState {
    pub pool: PgPool,
    tx: UnboundedSender<AppEvent>,
    events_tx: Sender<ChangeEvent>,
    pub mail_tx: UnboundedSender<Mail>,
    pub webauthn: Arc<Webauthn>,
    pub user_agent_parser: Arc<UserAgentParser>,
    pub failed_logins: Arc<Mutex<FailedLoginMap>>,
    // A key for secret cookies.
    key: Key,
}

impl AppState {
    pub(crate) fn trigger_action(&self, event: AppEvent) {
        let event_name = event.name().to_owned();
        match self.tx.send(event) {
            Ok(()) => info!("Sent trigger {event_name}"),
            Err(err) => error!("Error sending trigger {event_name}: {err}"),
        }
    }

    /// Handle webhook events. This is ran on a separate asynchronous task.
    async fn handle_triggers(pool: PgPool, mut rx: UnboundedReceiver<AppEvent>) {
        let reqwest_client = Client::builder().user_agent("reqwest").build().unwrap();
        while let Some(msg) = rx.recv().await {
            debug!("Webhook triggered. Retrieving webhooks.");
            if let Ok(webhooks) = WebHook::all_enabled(&pool, &msg).await {
                info!("Found webhooks: {webhooks:#?}");
                let payload = match msg {
                    AppEvent::UserCreated(ref user) => json!(user),
                    AppEvent::UserModified(ref user) => json!(user),
                    AppEvent::UserDeleted(ref username) => json!({ "username": username }),
                    AppEvent::HWKeyProvision(ref data) => json!(data),
                };
                for webhook in webhooks {
                    match reqwest_client
                        .post(&webhook.url)
                        .bearer_auth(&webhook.token)
                        .header("x-defguard-event", msg.name())
                        .json(&payload)
                        .send()
                        .await
                    {
                        Ok(res) => {
                            info!("Trigger sent to {}, status {}", webhook.url, res.status());
                        }
                        Err(err) => {
                            error!("Error sending trigger to {}: {err}", webhook.url);
                        }
                    }
                }
            }
        }
    }

    /// Sends given `ChangeEvent` to be handled by gateway (over gRPC).
    pub(crate) fn send_change_event(&self, event: ChangeEvent) {
        if let Err(err) = self.events_tx.send(event) {
            error!("Error sending change event {err}");
        }
    }

    /// Sends multiple events to be handled by gateway (over gRPC).
    pub(crate) fn send_multiple_change_events(&self, events: Vec<ChangeEvent>) {
        debug!("Sending {} change events", events.len());
        for event in events {
            self.send_change_event(event);
        }
    }

    /// Create application state
    pub fn new(
        pool: PgPool,
        tx: UnboundedSender<AppEvent>,
        rx: UnboundedReceiver<AppEvent>,
        events_tx: Sender<ChangeEvent>,
        mail_tx: UnboundedSender<Mail>,
        user_agent_parser: Arc<UserAgentParser>,
        failed_logins: Arc<Mutex<FailedLoginMap>>,
    ) -> Self {
        spawn(Self::handle_triggers(pool.clone(), rx));

        let config = server_config();
        let webauthn_builder = WebauthnBuilder::new(
            config
                .webauthn_rp_id
                .as_ref()
                .expect("Webauth RP ID configuration is required"),
            &config.url,
        )
        .expect("Invalid WebAuthn configuration");
        let webauthn = Arc::new(
            webauthn_builder
                .build()
                .expect("Invalid WebAuthn configuration"),
        );

        let key = Key::from(config.secret_key.expose_secret().as_bytes());

        Self {
            pool,
            tx,
            events_tx,
            mail_tx,
            webauthn,
            user_agent_parser,
            failed_logins,
            key,
        }
    }
}

impl FromRef<AppState> for Key {
    fn from_ref(state: &AppState) -> Self {
        state.key.clone()
    }
}
