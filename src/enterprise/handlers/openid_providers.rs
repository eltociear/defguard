use axum::{
    extract::{Path, State},
    http::StatusCode,
    Json,
};
use serde_json::json;

use super::LicenseInfo;
use crate::{
    appstate::AppState,
    auth::{AdminRole, SessionInfo},
    enterprise::db::models::openid_provider::OpenIdProvider,
    error::WebError,
    handlers::ApiResponse,
};

#[derive(Debug, Deserialize, Serialize)]
pub struct AddProviderData {
    name: String,
    base_url: String,
    client_id: String,
    client_secret: String,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct DeleteProviderData {
    name: String,
}

impl AddProviderData {
    #[must_use]
    pub fn new(name: &str, base_url: &str, client_id: &str, client_secret: &str) -> Self {
        Self {
            name: name.to_string(),
            base_url: base_url.to_string(),
            client_id: client_id.to_string(),
            client_secret: client_secret.to_string(),
        }
    }
}

pub(crate) async fn add_openid_provider(
    _license: LicenseInfo,
    _admin: AdminRole,
    session: SessionInfo,
    State(appstate): State<AppState>,
    Json(provider_data): Json<AddProviderData>,
) -> Result<ApiResponse, WebError> {
    // Currently, we only support one OpenID provider at a time
    let new_provider = OpenIdProvider::new(
        provider_data.name,
        provider_data.base_url,
        provider_data.client_id,
        provider_data.client_secret,
    )
    .upsert(&appstate.pool)
    .await?;
    debug!(
        "User {} adding OpenID provider {}",
        session.user.username, new_provider.name
    );
    info!(
        "User {} added OpenID client {}",
        session.user.username, new_provider.name
    );

    Ok(ApiResponse::new(json!({}), StatusCode::CREATED))
}

pub(crate) async fn get_current_openid_provider(
    _license: LicenseInfo,
    _admin: AdminRole,
    State(appstate): State<AppState>,
) -> Result<ApiResponse, WebError> {
    match OpenIdProvider::get_current(&appstate.pool).await? {
        Some(provider) => Ok(ApiResponse::new(json!(provider), StatusCode::OK)),
        None => Ok(ApiResponse::new(json!({}), StatusCode::NOT_FOUND)),
    }
}

pub(crate) async fn delete_openid_provider(
    _license: LicenseInfo,
    _admin: AdminRole,
    session: SessionInfo,
    State(appstate): State<AppState>,
    Path(provider_data): Path<DeleteProviderData>,
) -> Result<ApiResponse, WebError> {
    debug!(
        "User {} deleting OpenID provider {}",
        session.user.username, provider_data.name
    );
    let provider = OpenIdProvider::find_by_name(&appstate.pool, &provider_data.name).await?;
    if let Some(provider) = provider {
        provider.delete(&appstate.pool).await?;
        info!(
            "User {} deleted OpenID provider {}",
            session.user.username, provider_data.name
        );
        Ok(ApiResponse::new(json!({}), StatusCode::OK))
    } else {
        warn!(
            "User {} failed to delete OpenID provider {}. Such provider does not exist.",
            session.user.username, provider_data.name
        );
        Ok(ApiResponse::new(json!({}), StatusCode::NOT_FOUND))
    }
}

// pub(crate) async fn modify_openid_provider(
//     _license: LicenseInfo,
//     _admin: AdminRole,
//     session: SessionInfo,
//     State(appstate): State<AppState>,
//     Json(provider_data): Json<AddProviderData>,
// ) -> Result<ApiResponse, WebError> {
//     debug!(
//         "User {} modifying OpenID provider {}",
//         session.user.username, provider_data.name
//     );
//     let provider = OpenIdProvider::find_by_name(&appstate.pool, &provider_data.name).await?;
//     if let Some(mut provider) = provider {
//         provider.base_url = provider_data.base_url;
//         provider.client_id = provider_data.client_id;
//         provider.client_secret = provider_data.client_secret;
//         provider.save(&appstate.pool).await?;
//         info!(
//             "User {} modified OpenID client {}",
//             session.user.username, provider.name
//         );
//         Ok(ApiResponse::new(json!({}), StatusCode::OK))
//     } else {
//         warn!(
//             "User {} failed to modify OpenID client {}. Such client does not exist.",
//             session.user.username, provider_data.name
//         );
//         Ok(ApiResponse::new(json!({}), StatusCode::NOT_FOUND))
//     }
// }

// pub(crate) async fn list_openid_providers(
//     _license: LicenseInfo,
//     _admin: AdminRole,
//     State(appstate): State<AppState>,
// ) -> Result<ApiResponse, WebError> {
//     let providers = OpenIdProvider::all(&appstate.pool).await?;
//     Ok(ApiResponse::new(json!(providers), StatusCode::OK))
// }
