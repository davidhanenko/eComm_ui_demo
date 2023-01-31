import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useForm, Controller } from 'react-hook-form';
import { useCart } from '../../../../context/cartState';
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
          order_details
          items_details
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
  items_details,
  single_items,
}) {
  const { setCart } = useCart();

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
    mode: 'onBlur',
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      orderNotes: '',
    },
  });

  const [createOrder, { loading, error, data }] =
    useMutation(CREATE_ORDER_MUTATION);

  const onSubmitForm = async values => {
    const orderDetails = {
      charge: totalCost,
      totalItems: count,
      name: values.name,
      company: values.company,
      email: values.email,
      phone: values.phone,
    };

    try {
      await createOrder({
        variables: {
          data: {
            order_details: JSON.stringify(orderDetails),
            items_details: items_details,
            single_items: single_items,
          },
        },
      });

      reset();
      setCart([]);
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
        <input
          type='text'
          placeholder='Full name'
          className={dirtyFields.name ? 'input-dirty' : ''}
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
      </fieldset>

      {/* company */}
      <fieldset>
        <input
          type='text'
          placeholder='Company name'
          className={
            dirtyFields.company ? 'input-dirty' : ''
          }
          {...register('company')}
        />
        {
          <div className='input-error'>
            {errors?.company?.message}
          </div>
        }
      </fieldset>
      {/* email */}
      <fieldset>
        <input
          type='email'
          placeholder='Email'
          className={dirtyFields.email ? 'input-dirty' : ''}
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
          <span className='input-error'>
            {errors?.email?.message}
          </span>
        }
      </fieldset>

      {/* phone */}
      <fieldset>
        <input
          type='text'
          placeholder='Phone #'
          className={dirtyFields.phone ? 'input-dirty' : ''}
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value:
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gim,
              message: 'Please enter a valid phone number',
            },
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
      <fieldset className='input-field'>
        <textarea
          placeholder='Leave us some notes about your order'
          className={
            dirtyFields.orderNotes ? 'input-dirty' : ''
          }
          rows={3}
          {...register('orderNotes', {
            minLength: {
              value: 10,
              message: 'Tell us more please',
            },
          })}
        />
        {
          <span className='input-error'>
            {errors?.orderNotes?.message}
          </span>
        }
      </fieldset>

      <p className='price-not-available-note'>
        The charge may include additional cost of items
        which price not available at the moment of order. We
        will notify you about total cost after reviewing
        your order
      </p>

      <button type='submit' disabled={isSubmitting}>
        {isSubmitting ? (
          <Oval
            type='Oval'
            color='#b5dff0'
            height={25}
            width={25}
          />
        ) : (
          <span>confirm order</span>
        )}
      </button>
    </OrderFormStyles>
  );
}
