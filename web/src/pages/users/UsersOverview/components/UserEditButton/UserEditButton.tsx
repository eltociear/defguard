import { useNavigate } from 'react-router-dom';

import { useI18nContext } from '../../../../../i18n/i18n-react';
import { EditButton } from '../../../../../shared/defguard-ui/components/Layout/EditButton/EditButton';
import { EditButtonOption } from '../../../../../shared/defguard-ui/components/Layout/EditButton/EditButtonOption';
import { EditButtonOptionStyleVariant } from '../../../../../shared/defguard-ui/components/Layout/EditButton/types';
import { useAuthStore } from '../../../../../shared/hooks/store/useAuthStore';
import { useModalStore } from '../../../../../shared/hooks/store/useModalStore';
import { useUserProfileStore } from '../../../../../shared/hooks/store/useUserProfileStore';
import { User } from '../../../../../shared/types';
import { useAddUserModal } from '../../modals/AddUserModal/hooks/useAddUserModal';

type Props = {
  user: User;
};

export const UserEditButton = ({ user }: Props) => {
  const { LL } = useI18nContext();
  const navigate = useNavigate();
  const setProvisionKeyModal = useModalStore((state) => state.setProvisionKeyModal);
  const setDeleteUserModal = useModalStore((state) => state.setDeleteUserModal);
  const setChangePasswordModal = useModalStore((state) => state.setChangePasswordModal);
  const setUserProfile = useUserProfileStore((state) => state.setState);
  const setAddUserModal = useAddUserModal((state) => state.setState);
  const currentUser = useAuthStore((state) => state.user);
  return (
    <EditButton>
      {!user.is_active && (
        <EditButtonOption
          key="start-enrollment"
          text={LL.usersOverview.list.editButton.startEnrollment()}
          onClick={() =>
            setAddUserModal({
              visible: true,
              step: 1,
              user: user,
            })
          }
        />
      )}
      <EditButtonOption
        key="change-password"
        text={LL.usersOverview.list.editButton.changePassword()}
        onClick={() => setChangePasswordModal({ visible: true, user })}
      />
      <EditButtonOption
        key="edit-user"
        text={LL.usersOverview.list.editButton.edit()}
        onClick={() => {
          setUserProfile({ editMode: true });
          navigate(`/admin/users/${user.username}`, { replace: true });
        }}
      />
      <EditButtonOption
        key="provision-yubi-key"
        text={LL.usersOverview.list.editButton.provision()}
        onClick={() => setProvisionKeyModal({ visible: true, user })}
      />
      {user.username !== currentUser?.username && (
        <EditButtonOption
          key="delete-user"
          text={LL.usersOverview.list.editButton.delete()}
          onClick={() => setDeleteUserModal({ visible: true, user })}
          styleVariant={EditButtonOptionStyleVariant.WARNING}
        />
      )}
    </EditButton>
  );
};
