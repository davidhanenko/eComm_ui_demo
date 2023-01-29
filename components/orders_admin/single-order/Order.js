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
          charge
          totalItems
          createdAt
          itemDetails: item_details
        }
      }
    }
  }
`;

export default function Order({ order }) {
  const [status, setStatus] = useState(
    order?.attributes?.status
  );

  // items included in current order (get from db JSON)
  const orderItems = JSON.parse(
    order?.attributes?.itemDetails
  );

  const totalCharge = order?.attributes?.charge;
  const tax = totalCharge * 0.08875;
  const toPay = totalCharge + tax;

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

  const handleSelect = e => {
    setStatus(e.target.value);
  };

  useEffect(async () => {
    await updateOrder();
  }, [status]);

  return (
    <OrderStyles>
      <header>
        <div className='order-title'>
          <h2>Order ID - {order?.id}</h2>
          <div className='status-select'>
            <DropdownSelect
              options={ORDER_STATUS_OPTIONS}
              select={order?.attributes?.status}
              handleSelect={handleSelect}
            />
          </div>
        </div>
        <hr />

        <div className='header-wrapper'>
          <section className='top-left'>
            <p>
              Total items in order -{' '}
              {order?.attributes?.totalItems}
            </p>
            <p>
              Total cost - $
              {order?.attributes?.charge.toFixed(2)}
            </p>
            <p>Tax - ${tax.toFixed(2)}</p>
            <p>Total charge - ${toPay.toFixed(2)}</p>
            <p>Shipping - </p>
          </section>
          <section className='top-right'>
            <p>David Hanenko</p>
            <p>Company</p>
            <p>email@gmail.com</p>
            <p>929-222-1144</p>
          </section>
        </div>
      </header>
      <hr />

      {Object.values(orderItems).map((item, i) => (
        <OrderItem item={item} key={item.id + i} />
      ))}

      <hr />

      <footer>
        <Link href={'/orders'}>
          <button>&lt; Back to orders</button>
        </Link>
      </footer>
    </OrderStyles>
  );
}
