import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SigninStyles,
  GoogleBtnStyles,
  FormStyles,
  FooterStyles,
} from './SigninStyles';
import Oval from 'react-loader-spinner';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

export default function Signin({ providers }) {
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
      password: '',
    },
  });

  const router = useRouter();
  const urlToRedirect = router?.query?.callbackUrl;
  const onSubmitForm = async values => {
    try {
      const res = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (res.error) {
        if (res.status === 401) {
          toast.error(
            'Wrong email or password, please check credentials and try again',
            {
              position: 'top-right',
              autoClose: 8000,
            }
          );
        }
      }
      if (res.ok) {
        reset();
        urlToRedirect
          ? router.push(urlToRedirect)
          : router.push('/');
      }
    } catch (err) {
      toast.error(
        'An unexpected error happens, please try again',
        {
          position: 'top-right',
          autoClose: 5000,
        }
      );
    }
  };

  return (
    <SigninStyles>
      <GoogleBtnStyles
        className='google-btn'
        onClick={() =>
          signIn(providers.google.id, {
            callbackUrl: urlToRedirect,
          })
        }
      >
        <div>
          Sign in with google
          <FcGoogle className='icon-google' />
        </div>
      </GoogleBtnStyles>

      <div className='divider'>or</div>

      <h3>Sign in with email</h3>

      <FormStyles
        isDirty={isDirty}
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <fieldset>
          <label
            className={
              dirtyFields.name ? 'label-dirty' : ''
            }
            htmlFor='name'
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
              disabled: isSubmitting,
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
            htmlFor='name'
          >
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            className={
              dirtyFields.password ? 'input-dirty' : ''
            }
            {...register('password', {
              disabled: isSubmitting,
              required: 'Password is required',
            })}
          />
          {
            <div className='input-error'>
              {errors?.password?.message}
            </div>
          }
        </fieldset>
        <button>
          {isSubmitting ? (
            <div>
              <Oval
                type='Oval'
                color='#b5dff0'
                height={20}
                width={20}
              />
            </div>
          ) : (
            <div>Sign in</div>
          )}
        </button>
      </FormStyles>
      <FooterStyles>
        <p className='is-account'>
          Don't have an account yet -{' '}
          <Link href='/auth/signup'> Sign up</Link>{' '}
        </p>
        <Link href='/auth/password/request-password-reset'>
          Forgot password?
        </Link>
        <p className='terms'>Terms of use</p>
      </FooterStyles>
    </SigninStyles>
  );
}
