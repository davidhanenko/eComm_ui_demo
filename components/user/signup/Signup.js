import { useForm } from 'react-hook-form';
import {
  SignupStyles,
  FormStyles,
  FooterStyles,
} from './SignupStyles';
import Oval from 'react-loader-spinner';
import Link from 'next/link';

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
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  const onSubmitForm = async values => {
    console.log(
      'submit: ',
      values.name,
      values.email,
      values.password
    );
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
              dirtyFields.name ? 'label-dirty' : ''
            }
            htmlFor='name'
          >
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            autoComplete='name'
            placeholder='Full name'
            className={
              dirtyFields.name ? 'input-dirty' : ''
            }
            {...register('name', {
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
              {errors?.name?.message}
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
            htmlFor='name'
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
