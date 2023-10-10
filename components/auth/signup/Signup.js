import Link from 'next/link';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import {
  signIn,
  signOut,
  useSession,
} from 'next-auth/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Oval from 'react-loader-spinner';
import { FcGoogle } from 'react-icons/fc';
import LoaderContainer from '../../shared/loaders/loader-container/LoaderContainer';

import {
  SignupStyles,
  FormStyles,
  FooterStyles,
  SignUpSessionStyles,
} from './SignupStyles';
import { GoogleBtnStyles } from '../signin/SigninStyles';

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

  const { data: session } = useSession();

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
            autoClose: 8000,
          }
        );

        reset();
      }
    } catch (err) {
      toast.error(`${err?.message}`, {
        position: 'top-right',
        autoClose: 5000,
      });
    }
  };

  if (loading) return <LoaderContainer height={'40vh'} />;

  return !session ? (
    <SignupStyles>
      <GoogleBtnStyles
        className='google-btn'
        onClick={() =>
          signIn('google', {
            redirect: false,
          })
        }
      >
        <div>
          Sign up with google
          <FcGoogle className='icon-google' />
        </div>
      </GoogleBtnStyles>

      <div className='divider'>or</div>

      <h3>Create an account</h3>

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
            id='username'
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
              dirtyFields.email ? 'label-dirty' : ''
            }
            htmlFor='email'
          >
            Email
          </label>
          <input
            type='email'
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
              dirtyFields.password ? 'label-dirty' : ''
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
              dirtyFields.passwordRepeat
                ? 'label-dirty'
                : ''
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
          <span onClick={() => signIn()}>Sign in</span>
        </p>
        <p className='terms'>Terms of use</p>
      </FooterStyles>
    </SignupStyles>
  ) : (
    <SignUpSessionStyles>
      <p>
        Successfully signed up with{' '}
        <span>{`${session?.user?.email}`}</span>
      </p>
      <hr />
      <Link href={`/auth/account/${session?.id}`}>
        Go to your Account
      </Link>{' '}
      <p> or use the navigation to continue</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </SignUpSessionStyles>
  );
}
