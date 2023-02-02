import Link from 'next/link';
import { useEffect, useState } from 'react';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

import { ALL_ORDERS_QUERY } from '../../../pages/orders/index';
import DropdownSelect from '../../shared/pagination/dropdown/DropdownSelect';
import { ORDER_STATUS_OPTIONS } from '../../../config';
import OrderItem from './order-item/OrderItem';
import { OrderStyles } from './OrderStyles';

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
    order?.attributes?.status
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

  const charge = orderDetails?.charge;
  const tax = charge * 0.08875;
  const totalCharge = charge + tax;

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
          <h2>Order ID - {order?.id}</h2>
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
            <p>Total cost - ${charge.toFixed(2)}</p>
            <p>Tax - ${tax.toFixed(2)}</p>
            <p>Total charge - ${totalCharge.toFixed(2)}</p>
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
        <OrderItem item={item} key={item.id + i} />
      ))}

      <hr />
      <div className='order-notes'>
        <sub>
          Notes related to current order leaved by customer
        </sub>
        <p>{orderDetails?.orderNotes}</p>
      </div>

      <footer>
        <Link href={'/orders'}>
          <button>&lt; Back to orders</button>
        </Link>
      </footer>
    </OrderStyles>
  );
}
