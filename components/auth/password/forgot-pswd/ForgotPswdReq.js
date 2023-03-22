import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Oval from 'react-loader-spinner';

import { ForgotPswdReqStyles } from './ForgotPswdReqStyles';
import { FormStyles } from '../../signup/SignupStyles';
import Link from 'next/link';

const REQUEST_PSWD_RESET_MUTATION = gql`
  mutation REQUEST_PSWD_RESET_MUTATION($email: String!) {
    forgotPassword(email: $email) {
      ok
    }
  }
`;

export function ForgotPswdReq() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
      isDirty,
      dirtyFields,
    },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
    },
  });

  const [forgotPassword, { loading, error }] = useMutation(
    REQUEST_PSWD_RESET_MUTATION
  );

  const onSubmitForm = async values => {
    try {
      const { data, error } = await forgotPassword({
        variables: {
          email: values.email,
        },
      });


      if (data?.forgotPassword?.ok) {
        toast.success(
          `Email with the link to reset your password was sent to ${values?.email}. If you are registered user use it to reset your password `,
          {
            position: 'top-right',
            autoClose: 10000,
          }
        );

        reset();
      }
    } catch (err) {
      toast.error(
        'An unexpected error happen, please try again ',
        {
          position: 'top-right',
          autoClose: 4000,
        }
      );
    }
  };

  return (
    <ForgotPswdReqStyles>
      <h1>Request password reset link</h1>

      <FormStyles
        isDirty={isDirty}
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <fieldset>
          <label
            className={
              dirtyFields.name ? 'label-dirty' : ''
            }
            htmlFor='email'
          >
            Email
          </label>
          <input
            type='text'
            name='email'
            id='email'
            autoComplete='email'
            placeholder='Email'
            className={
              dirtyFields.email ? 'input-dirty' : ''
            }
            {...register('email', {
              disabled: isSubmitting || loading,
              required: 'Email is required',
              pattern: {
                value:
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email',
              },
            })}
          />
          {
            <div className='input-error'>
              {errors?.email?.message}
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
            <div>Send link</div>
          )}
        </button>
        <div className='cancel-reset'>
          <Link href='/auth/signin'>Cancel</Link>
        </div>
      </FormStyles>
    </ForgotPswdReqStyles>
  );
}
