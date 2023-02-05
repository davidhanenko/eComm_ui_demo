import { useForm } from 'react-hook-form';
import { SignupStyles, FormStyles } from './SignupStyles';

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
          <input
            type='text'
            name='name'
            autoComplete='name'
            placeholder='Name'
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
          <input
            type='text'
            name='email'
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
          <input
            type='password'
            name='password'
            placeholder='Password'
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
          <input
            name='passwordRepeat'
            type='password'
            placeholder='Repeat password'
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
              {errors?.password?.message}
            </div>
          }
        </fieldset>
        <button>Sign up</button>
      </FormStyles>
    </SignupStyles>
  );
}
