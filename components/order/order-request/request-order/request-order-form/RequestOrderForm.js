import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useCart } from '../../../../../context/cartState';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Oval from 'react-loader-spinner';
import { RequestOrderFormStyles } from './RequestOrderFormStyles';

const CREATE_ORDER_REQUEST_MUTATION = gql`
  mutation CREATE_ORDER_REQUEST_MUTATION(
    $data: OrderRequestInput!
  ) {
    createOrderRequest(data: $data) {
      data {
        id
      }
    }
  }
`;

export default function RequestOrderForm({
  totalCost,
  tax,
  count,
  items_details,
  single_items,
}) {
  const { setCart, cartReload, setCartReload } = useCart();

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
      dirtyFields,
      isDirty,
      isValid,
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

  const router = useRouter();

  const [createOrderRequest, { loading, error }] =
    useMutation(CREATE_ORDER_REQUEST_MUTATION, {});

  const onSubmitForm = async values => {
    const orderDetails = {
      total: totalCost,
      tax: tax,
      totalItems: count,
      name: values.name,
      company: values.company,
      email: values.email,
      phone: values.phone,
      orderNotes: values.orderNotes,
    };

    try {
      const orderDetailsJson = JSON.stringify(orderDetails);

      await createOrderRequest({
        variables: {
          data: {
            order_details: orderDetailsJson,
            items_details: items_details,
            single_items: single_items,
          },
        },
      });

      setTimeout(() => {
        reset();
        setCart([]);
        router.push('/');
      }, 0);
    } catch (err) {
      toast.error(
        'An unexpected error occurred, please refresh the page and try again'
      );

    }
  };

  return (
    <RequestOrderFormStyles
      isDirty={isDirty}
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <fieldset>
        <input
          type='text'
          name='name'
          placeholder='Full name'
          className={dirtyFields.name ? 'input-dirty' : ''}
          {...register('name', {
            disabled: isSubmitting || loading,
            required: 'Name is required',
            minLength: {
              value: 3,
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

      <fieldset>
        <input
          type='text'
          name='company'
          placeholder='Company name'
          className={
            dirtyFields.company ? 'input-dirty' : ''
          }
          {...register('company', {
            disabled: isSubmitting || loading,
          })}
        />
        {
          <div className='input-error'>
            {errors?.company?.message}
          </div>
        }
      </fieldset>

      <fieldset>
        <input
          type='email'
          placeholder='Email'
          className={dirtyFields.email ? 'input-dirty' : ''}
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
          <span className='input-error'>
            {errors?.email?.message}
          </span>
        }
      </fieldset>

      <fieldset>
        <input
          type='text'
          name='phone'
          placeholder='Phone #'
          className={dirtyFields.phone ? 'input-dirty' : ''}
          {...register('phone', {
            disabled: isSubmitting || loading,
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
          name='message'
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

      <button
        type='submit'
        disabled={
          !isDirty || !isValid || isSubmitting || loading
        }
      >
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
          <div>request order</div>
        )}
      </button>
    </RequestOrderFormStyles>
  );
}
