import Link from 'next/link';
import { useForm } from 'react-hook-form';
import {
  SignupStyles,
  FormStyles,
  FooterStyles,
} from './SigninStyles';
import Oval from 'react-loader-spinner';

export default function Signin() {
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
      email: '',
      password: '',
    },
  });

  const onSubmitForm = async values => {
    console.log('submit: ', values.email, values.password);
  };

  return (
    <SignupStyles>
      <h1>Sign in</h1>

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
          Already have an account -{' '}
          <Link href='/user/signup'> Sign up</Link>{' '}
        </p>
        <p className='terms'>Terms of use</p>
      </FooterStyles>
    </SignupStyles>
  );
}
