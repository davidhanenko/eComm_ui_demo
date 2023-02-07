import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  SignupStyles,
  FormStyles,
  FooterStyles,
} from './SignupStyles';
import Oval from 'react-loader-spinner';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $username: String!
    $password: String!
  ) {
    register(
      input: {
        username: $username
        email: $email
        password: $password
      }
    ) {
      jwt
      user {
        id
        email
        username
      }
    }
  }
`;

export default function Signup() {
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
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  const [registerUser, { loading, error }] =
    useMutation(SIGNUP_MUTATION);

  // router
  const router = useRouter();

  const onSubmitForm = async values => {
    try {
      const { data } = await registerUser({
        variables: {
          username: values.username,
          email: values.email,
          password: values.password,
        },
      });

      if (data?.register?.user) {
        toast.success(
          `You are signed up with ${data?.register?.user?.email}`,
          {
            position: 'top-right',
            autoClose: 5000,
          }
        );

        reset();
        router.push('/user/signin');
      }
    } catch (err) {
      toast.error(`${err?.message}`, {
        position: 'top-right',
        autoClose: 4000,
      });
    }
  };

  return (
    <SignupStyles>
      <h1>Sign up</h1>

      <FormStyles
        isDirty={isDirty}
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <fieldset>
          <label
            className={
              dirtyFields.username ? 'label-dirty' : ''
            }
            htmlFor='username'
          >
            Name
          </label>
          <input
            type='text'
            name='username'
            id='nausernamee'
            autoComplete='username'
            placeholder='Full name'
            className={
              dirtyFields.username ? 'input-dirty' : ''
            }
            {...register('username', {
              required: 'Name is required',
              minLength: {
                value: 5,
                message:
                  'Please make name at least 5 characters long',
              },
            })}
          />
          {
            <div className='input-error'>
              {errors?.username?.message}
            </div>
          }
        </fieldset>
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
              required: 'You must specify a password',
              minLength: {
                value: 8,
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
            <div>Sign up</div>
          )}
        </button>
      </FormStyles>
      <FooterStyles>
        <p className='is-account'>
          Already have an account -{' '}
          <Link href='/user/signin'> Sign in</Link>{' '}
        </p>
        <p className='terms'>Terms of use</p>
      </FooterStyles>
    </SignupStyles>
  );
}
