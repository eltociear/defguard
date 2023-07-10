import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { SubmitHandler, useController, useForm } from 'react-hook-form';
import { BehaviorSubject, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from 'rxjs/operators';
import * as yup from 'yup';

import { useI18nContext } from '../../../../../i18n/i18n-react';
import { FormInput } from '../../../../../shared/components/Form/FormInput/FormInput';
import { Button } from '../../../../../shared/components/layout/Button/Button';
import {
  ButtonSize,
  ButtonStyleVariant,
} from '../../../../../shared/components/layout/Button/types';
import { useModalStore } from '../../../../../shared/hooks/store/useModalStore';
import useApi from '../../../../../shared/hooks/useApi';
import { useToaster } from '../../../../../shared/hooks/useToaster';
import {
  patternAtLeastOneDigit,
  patternAtLeastOneLowerCaseChar,
  patternAtLeastOneSpecialChar,
  patternAtLeastOneUpperCaseChar,
  patternDigitOrLowercase,
  patternNoSpecialChars,
  patternStartsWithDigit,
  patternValidEmail,
  patternValidPhoneNumber,
} from '../../../../../shared/patterns';
import { QueryKeys } from '../../../../../shared/queries';

interface Inputs {
  username: string;
  password: string;
  email: string;
  last_name: string;
  first_name: string;
  phone?: string;
}

export const AddUserForm = () => {
  const { LL } = useI18nContext();
  const {
    user: { addUser, usernameAvailable },
  } = useApi();
  const [usernameSubject] = useState<Subject<string>>(new Subject());
  const [usernamesTaken] = useState<BehaviorSubject<string[]>>(
    new BehaviorSubject<string[]>([])
  );
  const formSchema = useMemo(
    () =>
      yup
        .object({
          username: yup
            .string()
            .required(LL.form.error.required())
            .matches(patternNoSpecialChars, LL.form.error.noSpecialChars())
            .matches(patternDigitOrLowercase, LL.form.error.invalid())
            .min(4, LL.form.error.minimumLength())
            .max(64, LL.form.error.maximumLength())
            .test('starts-with-number', LL.form.error.startFromNumber(), (value) => {
              if (value && value.length) {
                return !patternStartsWithDigit.test(value);
              }
              return false;
            })
            .test('username-available', LL.form.error.usernameTaken(), (value?: string) =>
              value ? !usernamesTaken.getValue().includes(value) : false
            ),
          password: yup
            .string()
            .min(8, LL.form.error.minimumLength())
            .max(32, LL.form.error.maximumLength())
            .matches(patternAtLeastOneDigit, LL.form.error.oneDigit())
            .matches(patternAtLeastOneSpecialChar, LL.form.error.oneSpecial())
            .matches(patternAtLeastOneUpperCaseChar, LL.form.error.oneUppercase())
            .matches(patternAtLeastOneLowerCaseChar, LL.form.error.oneLowercase())
            .required(LL.form.error.required()),
          email: yup
            .string()
            .required(LL.form.error.required())
            .matches(patternValidEmail, LL.form.error.invalid()),
          last_name: yup
            .string()
            .required(LL.form.error.required())
            .min(4, LL.form.error.minimumLength()),
          first_name: yup
            .string()
            .required(LL.form.error.required())
            .min(4, LL.form.error.minimumLength()),
          phone: yup
            .string()
            .optional()
            .test('is-valid', LL.form.error.invalid(), (value) => {
              if (value && value.length) {
                return patternValidPhoneNumber.test(value);
              }
              return true;
            }),
        })
        .required(),
    [LL.form.error, usernamesTaken]
  );

  const {
    handleSubmit,
    control,
    setError,
    formState: { isValid },
  } = useForm<Inputs>({
    resolver: yupResolver(formSchema),
    mode: 'all',
    criteriaMode: 'all',
    defaultValues: {
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      phone: '',
      username: '',
    },
  });
  const {
    field: { value: usernameValue },
  } = useController({ control, name: 'username' });
  const queryClient = useQueryClient();
  const setModalState = useModalStore((state) => state.setAddUserModal);
  const toaster = useToaster();
  const addUserMutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKeys.FETCH_USERS_LIST]);
      toaster.success('User added.');
      setModalState({ visible: false });
    },
    onError: (err) => {
      console.error(err);
      setModalState({ visible: false });
      toaster.error('Error occurred.');
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => addUserMutation.mutate(data);

  useEffect(() => {
    if (usernameSubject) {
      usernameSubject.next(usernameValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usernameSubject, usernameValue]);

  useEffect(() => {
    const subscription = usernameSubject
      .pipe(
        map((s) => s.trim()),
        debounceTime(500),
        distinctUntilChanged(),
        filter((s) => s.length >= 4),
        filter((s) => !usernamesTaken.getValue().includes(s)),
        switchMap((username) =>
          usernameAvailable(username)
            .then((res: AxiosResponse) => {
              if (res.status === 400) {
                usernamesTaken.next([...usernamesTaken.getValue(), username]);
                return false;
              }
              return true;
            })
            .catch(() => {
              usernamesTaken.next([...usernamesTaken.getValue(), username]);
              return false;
            })
        )
      )
      .subscribe((available: boolean) => {
        if (!available) {
          setError(
            'username',
            { message: LL.form.error.usernameTaken() },
            { shouldFocus: true }
          );
        }
      });
    return () => {
      subscription.unsubscribe();
    };
  }, [LL.form.error, setError, usernameAvailable, usernameSubject, usernamesTaken]);

  return (
    <form data-testid="add-user-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="item">
          <FormInput
            placeholder={LL.modals.addUser.form.fields.username.placeholder()}
            controller={{ control, name: 'username' }}
            outerLabel={LL.modals.addUser.form.fields.username.label()}
            autoComplete="username"
            required
          />
          <FormInput
            outerLabel={LL.modals.addUser.form.fields.password.label()}
            placeholder={LL.modals.addUser.form.fields.password.placeholder()}
            controller={{ control, name: 'password' }}
            floatingErrors={{
              title: LL.form.floatingErrors.title(),
            }}
            type="password"
            autoComplete="password"
            required
          />
          <FormInput
            outerLabel={LL.modals.addUser.form.fields.email.label()}
            placeholder={LL.modals.addUser.form.fields.email.placeholder()}
            controller={{ control, name: 'email' }}
            autoComplete="email"
            required
          />
        </div>
        <div className="item">
          <FormInput
            outerLabel={LL.modals.addUser.form.fields.firstName.label()}
            controller={{ control, name: 'first_name' }}
            placeholder={LL.modals.addUser.form.fields.firstName.placeholder()}
            autoComplete="given-name"
            required
          />
          <FormInput
            outerLabel={LL.modals.addUser.form.fields.lastName.label()}
            controller={{ control, name: 'last_name' }}
            placeholder={LL.modals.addUser.form.fields.lastName.placeholder()}
            autoComplete="family-name"
            required
          />
          <FormInput
            controller={{ control, name: 'phone' }}
            outerLabel={LL.modals.addUser.form.fields.phone.label()}
            placeholder={LL.modals.addUser.form.fields.phone.placeholder()}
            autoComplete="tel"
          />
        </div>
      </div>
      <div className="controls">
        <Button
          size={ButtonSize.LARGE}
          text={LL.form.cancel()}
          className="cancel"
          onClick={() => setModalState({ visible: false })}
          tabIndex={4}
          type="button"
        />
        <Button
          className="big primary"
          type="submit"
          size={ButtonSize.LARGE}
          styleVariant={ButtonStyleVariant.PRIMARY}
          text={LL.modals.addUser.form.submit()}
          disabled={!isValid}
          loading={addUserMutation.isLoading}
        />
      </div>
    </form>
  );
};
