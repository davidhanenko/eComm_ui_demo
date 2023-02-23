import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Oval from 'react-loader-spinner';

import { useMessage } from '../../../../context/messageState';
import { ChangePswdStyles } from './ChangePasswordStyles';
import { FormStyles } from '../../signup/SignupStyles';

const PASSWORD_CHANGE_MUTATION = gql`
  mutation PASSWORD_CHANGE_MUTATION(
    $currentPassword: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    changePassword(
      currentPassword: $currentPassword
      password: $password
      passwordConfirmation: $passwordConfirmation
    ) {
      user {
        id
      }
    }
  }
`;

export function ChangePassword() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: {
      errors,
      isSubmitting,
      isDirty,
      dirtyFields,
    },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      password: '',
      newPassword: '',
      newPasswordRepeat: '',
    },
  });

  const router = useRouter();
  const { setMessage } = useMessage();
  const { data: session } = useSession();

  const [changePassword, { loading, error }] = useMutation(
    PASSWORD_CHANGE_MUTATION
  );

  const onSubmitForm = async values => {
    try {
      const { data } = await changePassword({
        variables: {
          currentPassword: values.password,
          password: values.newPassword,
          passwordConfirmation: values.newPasswordRepeat,
        },
      });

      setMessage(
        `Your password has been successfully changed`
      );

      reset();
      router.push(`/auth/account/${session?.id}`);
    } catch (err) {
      console.log(err);
      toast.error(
        'An unexpected error happen, please check your credentials and try again',
        {
          position: 'top-right',
          autoClose: 5000,
        }
      );
    }
  };

  return (
    <ChangePswdStyles>
      <h1>Change password</h1>

      <FormStyles
        isDirty={isDirty}
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <fieldset>
          <label
            className={
              dirtyFields.name ? 'label-dirty' : ''
            }
            htmlFor='password'
          >
            Current password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Current password'
            className={
              dirtyFields.password ? 'input-dirty' : ''
            }
            {...register('password', {
              disabled: isSubmitting || loading,
              required:
                'You must specify your current password',
            })}
          />
          {
            <div className='input-error'>
              {errors?.password?.message}
            </div>
          }
        </fieldset>

        <fieldset>
          <label
            className={
              dirtyFields.name ? 'label-dirty' : ''
            }
            htmlFor='newPassword'
          >
            New password
          </label>
          <input
            type='password'
            name='newPassword'
            id='newPassword'
            placeholder='At least 8 characters'
            className={
              dirtyFields.password ? 'input-dirty' : ''
            }
            {...register('newPassword', {
              disabled: isSubmitting || loading,
              required: 'You must specify a password',
              minLength: {
                value: 5,
                message:
                  'Password must have at least 8 characters',
              },
            })}
          />
          {
            <div className='input-error'>
              {errors?.newPassword?.message}
            </div>
          }
        </fieldset>

        <fieldset>
          <label
            className={
              dirtyFields.name ? 'label-dirty' : ''
            }
            htmlFor='newPasswordRepeat'
          >
            Re-enter new password
          </label>
          <input
            name='newPasswordRepeat'
            type='password'
            id='newPasswordRepeat'
            placeholder='Re-enter a password'
            className={
              dirtyFields.newPasswordRepeat
                ? 'input-dirty'
                : ''
            }
            {...register('newPasswordRepeat', {
              disabled: isSubmitting || loading,
              required: 'Please re-enter your new password',
              validate: value => {
                const { newPassword } = getValues();
                if (value !== newPassword)
                  return 'The passwords do not match';
              },
            })}
          />
          {
            <div className='input-error'>
              {errors?.newPasswordRepeat?.message}
            </div>
          }
        </fieldset>
        <button disabled={isSubmitting || loading}>
          {isSubmitting || loading ? (
            <div>
              <Oval
                type='Oval'
                color='#b5dff0'
                height={20}
                width={20}
              />
            </div>
          ) : (
            <div>change password</div>
          )}
        </button>
      </FormStyles>
    </ChangePswdStyles>
  );
}
