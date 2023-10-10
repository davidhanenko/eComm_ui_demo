import Link from 'next/link';
import { useEffect, useState } from 'react';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

import { FaChevronLeft } from 'react-icons/fa';

import { ALL_ORDERS_QUERY } from '../orders/Orders';
import DropdownSelect from '../../shared/pagination/dropdown/DropdownSelect';
import {
  ORDER_STATUS_OPTIONS,
  TAX_VALUE,
} from '../../../config';
import OrderItem from './order-item/OrderItem';
import { OrderStyles } from './OrderStyles';
import DateAndTime from '../../shared/DateAndTime';

const UPDATE_ORDER_STATUS = gql`
  mutation UPDATE_ORDER_STATUS(
    $data: OrderInput!
    $id: ID!
  ) {
    updateOrder(id: $id, data: $data) {
      data {
        id
        attributes {
          status
        }
      }
    }
  }
`;

export default function Order({ order }) {
  const [status, setStatus] = useState(
    order?.attributes?.status || null
  );

  // items included in current order (get from db - parse if JSON or use as object)
  const orderItems =
    typeof order?.attributes?.itemDetails === 'object'
      ? order?.attributes?.itemDetails
      : JSON.parse(order?.attributes?.itemDetails);

  // order details (get from db JSON || object)
  const orderDetails =
    typeof order?.attributes?.orderDetails === 'object'
      ? order?.attributes?.orderDetails
      : JSON.parse(order?.attributes?.orderDetails);

  const total = orderDetails?.total;
  const tax = orderDetails?.tax;
  const totalCharge = orderDetails?.charge;

  const [
    updateOrder,
    {
      data: updateData,
      loading: updateLoading,
      error: updateError,
    },
  ] = useMutation(UPDATE_ORDER_STATUS, {
    variables: {
      id: order.id,
      data: {
        status: status,
      },
    },
    refetchQueries: [{ query: ALL_ORDERS_QUERY }],
  });

  useEffect(() => {
    updateOrder();
  }, [status]);

  const handleSelect = e => {
    setStatus(e.target.value);
  };



  return (
    <OrderStyles>
      <header>
        <div className='order-title'>
          <div>
            <h2>Order ID - {order?.id}</h2>
            <DateAndTime
              date={order?.attributes.createdAt}
            />
          </div>
          <div className='status-select'>
            <span>Order status</span>
            <DropdownSelect
              options={ORDER_STATUS_OPTIONS}
              select={
                updateData?.updateOrder?.data?.attributes
                  ?.status || order?.attributes?.status
              }
              handleSelect={handleSelect}
            />
          </div>
        </div>
        <hr />

        <div className='header-wrapper'>
          <section className='top-left'>
            <p>
              Total items in order -{' '}
              {orderDetails?.totalItems}
            </p>
            <p>Subtotal - ${total}</p>
            <p>Tax - ${tax}</p>
            <p>Total charge - ${totalCharge}</p>
            <p>Shipping - </p>
          </section>
          <section className='top-right'>
            <p>{orderDetails?.name}</p>
            <p>{orderDetails?.company}</p>
            <p>{orderDetails?.email}</p>
            <p>{orderDetails?.phone}</p>
          </section>
        </div>
      </header>
      <hr />

      {Object.values(orderItems).map((item, i) => (
        <OrderItem
          item={item}
          index={i + 1}
          key={`${item.id}-${i}`}
        />
      ))}

      <hr />
      <div className='order-notes'>
        {orderDetails?.orderNotes && <sub>Notes:</sub>}
        <p>{orderDetails?.orderNotes}</p>
      </div>

      <footer>
        <Link href={'/orders'}>
          <button>
            <FaChevronLeft /> Back to orders
          </button>
        </Link>
      </footer>
    </OrderStyles>
  );
}
