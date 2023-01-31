import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Oval from 'react-loader-spinner';
import { OrderFormStyles } from './OrderFormStyles';

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($data: OrderInput!) {
    createOrder(data: $data) {
      data {
        id
        attributes {
          charge
          totalItems
          item_details
          single_items {
            data {
              id
              attributes {
                itemTitle
              }
            }
          }
        }
      }
    }
  }
`;

export default function OrderForm({
  totalCost,
  count,
  item_details,
  single_items,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
      dirtyFields,
      isDirty,
    },
  } = useForm({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      // notesMessage: '',
    },
  });

  const [createOrder, { loading, error, data }] =
    useMutation(CREATE_ORDER_MUTATION);

  const onSubmitForm = async values => {
    try {
      await createOrder({
        variables: {
          data: {
            charge: totalCost,
            totalItems: count,
            item_details: item_details,
            single_items: single_items,
            name: values.name,
            company: values.email,
            email: values.email,
            phone: values.phone,
          },
        },
      });

      reset();
    } catch (err) {
      toast.error(
        'An unexpected error occurred, please try again'
      );
    }
  };

  return (
    <OrderFormStyles
      isDirty={isDirty}
      onSubmit={handleSubmit(onSubmitForm)}
    >
      {/* name */}
      <fieldset>
        <label
          className={dirtyFields.name ? 'label-dirty' : ''}
          htmlFor='name'
        >
          Full name
        </label>
        <input
          type='text'
          placeholder='Full name'
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 5,
              message: 'Seems to short',
            },
          })}
        />
        {
          <div className='input-error'>
            {errors?.name?.message}
          </div>
        }

        {/* company */}
        <input
          type='text'
          placeholder='Company name'
          {...register('company')}
        />
        {
          <div className='input-error'>
            {errors?.company?.message}
          </div>
        }

        {/* email */}
        <input
          id='email'
          placeholder='Email'
          className={dirtyFields.email ? 'input-dirty' : ''}
          type='email'
          {...register('email', {
            required: 'Email is required',
          })}
        />
        {
          <span className='input-error'>
            {errors?.email?.message}
          </span>
        }

        {/* phone */}
        <input
          type='text'
          placeholder='Phone #'
          {...register('phone', {
            required: 'Phone number is required',
            minLength: {
              value: 10,
              message: 'Seems to short',
            },
            maxLength: {
              value: 12,
              message: 'Not a phone number',
            },
          })}
        />
        {
          <div className='input-error'>
            {errors?.phone?.message}
          </div>
        }
      </fieldset>

      <button type='submit' disabled={isSubmitting}>
        {isSubmitting ? (
          <Oval
            type='Oval'
            color='#b5dff0'
            height={25}
            width={25}
          />
        ) : (
          <span>send</span>
        )}
      </button>
    </OrderFormStyles>
  );
}
