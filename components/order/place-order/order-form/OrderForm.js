import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useCart } from '../../../../context/cartState';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';

import Oval from 'react-loader-spinner';
import { OrderFormStyles } from './OrderFormStyles';

const PHONE_REGEX = new RegExp(
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gim
);

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($data: OrderInput!) {
    createOrder(data: $data) {
      data {
        id
      }
    }
  }
`;

export default function OrderForm({
  totalCost,
  tax,
  totalCharge,
  count,
  items_details,
  single_items,
  me,
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
      isValid,
    },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: me?.username ?? '',
      company: '',
      email: me?.email ?? '',
      phone: '',
      orderNotes: '',
    },
  });

  const { data: session } = useSession();

  const router = useRouter();

  const [createOrder, { loading, error }] = useMutation(
    CREATE_ORDER_MUTATION,
    {}
  );

  const onSubmitForm = async values => {
    const orderDetails = {
      total: totalCost,
      tax: tax,
      charge: totalCharge,
      totalItems: count,
      name: values.name,
      company: values.company,
      email: values.email,
      phone: values.phone,
      orderNotes: values.orderNotes,
    };

    try {
      const orderDetailsJson = JSON.stringify(orderDetails);
      const itemsDetailsJson =
        JSON.stringify(items_details);

      await createOrder({
        variables: {
          data: {
            order_details: orderDetailsJson,
            items_details: itemsDetailsJson,
            single_items: single_items,
            user: me?.id || session?.id,
          },
        },
      });

      setTimeout(() => {
        reset();
        setCart([]);
        router.push('/order-placed');
      }, 0);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <OrderFormStyles
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
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Seems to short',
            },
            maxLength: {
              value: 35,
              message: 'Name is too long',
            },
          })}
        />
        {
          <div className='input-error'>
            {errors.name && errors.name.message}
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
          {...register('company')}
        />
        {
          <div className='input-error'>
            {errors.company && errors.company.message}
          </div>
        }
      </fieldset>

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
            {errors.email && errors.email.message}
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
            required: 'Phone number is required',
            pattern: {
              value: PHONE_REGEX,
              message:
                'Please enter a valid phone number, ex. 1112223333 or 111-222-3333',
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
            {errors?.phone && errors.phone.message}
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
            {errors?.orderNotes &&
              errors.orderNotes.message}
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
          single_items.length <= 0 ||
          isSubmitting ||
          loading
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
          <div>confirm order</div>
        )}
      </button>
    </OrderFormStyles>
  );
}
