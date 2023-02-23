import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Oval from 'react-loader-spinner';

import { useMessage } from '../../../../context/messageState';
import { ResetPswdStyles } from './ResetPasswordStyles';
import { FormStyles } from '../../signup/SignupStyles';

const PASSWORD_RESET_MUTATION = gql`
  mutation PASSWORD_RESET_MUTATION(
    $password: String!
    $passwordConfirmation: String!
    $code: String!
  ) {
    resetPassword(
      password: $password
      passwordConfirmation: $passwordConfirmation
      code: $code
    ) {
      user {
        id
      }
    }
  }
`;

export function ResetPassword() {
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
      repeatPassword: '',
    },
  });

  const router = useRouter();
  const { setMessage } = useMessage();

  const [resetPassword, { loading, error }] = useMutation(
    PASSWORD_RESET_MUTATION
  );

  const onSubmitForm = async values => {
    try {
      const { data } = await resetPassword({
        variables: {
          password: values.password,
          passwordConfirmation: values.repeatPassword,
          code: router.query.code,
        },
      });

      setMessage(
        `Your user's password has been reset. Signin please.`
      );

      reset();
      router.push('/auth/signin');
    } catch (err) {
      toast.error(
        'An unexpected error happen, please try again ',
        {
          position: 'top-right',
          autoClose: 5000,
        }
      );
    }
  };

  return (
    <ResetPswdStyles>
      <h1>Reset password</h1>

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
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='At least 8 characters'
            className={
              dirtyFields.password ? 'input-dirty' : ''
            }
            {...register('password', {
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
              {errors?.password?.message}
            </div>
          }
        </fieldset>
        <fieldset>
          <label
            className={
              dirtyFields.name ? 'label-dirty' : ''
            }
            htmlFor='passwordRepeat'
          >
            Re-enter a password
          </label>
          <input
            name='passwordRepeat'
            type='password'
            id='passwordRepeat'
            placeholder='Re-enter a password'
            className={
              dirtyFields.passwordRepeat
                ? 'input-dirty'
                : ''
            }
            {...register('repeatPassword', {
              disabled: isSubmitting || loading,
              required: 'Please re-enter your password',
              validate: value => {
                const { password } = getValues();
                if (value !== password)
                  return 'The passwords do not match';
              },
            })}
          />
          {
            <div className='input-error'>
              {errors?.repeatPassword?.message}
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
            <div>reset password</div>
          )}
        </button>
      </FormStyles>
    </ResetPswdStyles>
  );
}
