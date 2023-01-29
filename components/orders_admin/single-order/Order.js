import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/client';
import capitalizeStr from '../../../helpers/capitalizeStr';
import {
  OrderStyles,
  OrderItemStyles,
} from './OrderStyles';
import { ALL_ORDERS_QUERY } from '../../../pages/orders/index';

const ORDER_ITEMS_QUERY = gql`
  query ORDER_ITEMS_QUERY($id: ID!) {
    singleItem(id: $id) {
      data {
        id
        attributes {
          itemTitle
          price
          size
          quantity
          sizePrice {
            ... on ComponentItemDetailsItemDetails {
              id
              size
              price
              type
              typeValue: type_value
              quantity
            }
          }
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

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
    // refetchQueries: [{ query: ALL_ORDERS_QUERY }],
  });

  const handleSelect = e => {
    setStatus(e.target.value);
  };

  useEffect(async () => {
    await updateOrder();
  }, [status]);

  console.log(order);

  return (
    <OrderStyles>
      <header>
        <div className='order-title'>
          <h2>Order ID - {order?.id}</h2>

          <select
            disabled={updateLoading}
            aria-busy={updateLoading}
            id='status'
            onChange={handleSelect}
            value={order?.attributes?.status}
          >
            <option value='FULFILLED'>FULFILLED</option>
            <option value='PENDING'>PENDING</option>
            <option value='IN_PROGRESS'>IN PROGRESS</option>
            <option value='REJECTED'>REJECTED</option>
          </select>
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

function OrderItem({ item }) {
  const { data, error, loading } = useQuery(
    ORDER_ITEMS_QUERY,
    {
      variables: {
        id: item?.id,
      },
    }
  );

  const itemData = data?.singleItem?.data?.attributes;

  const itemDetails = itemData?.sizePrice.filter(
    el => el.id === item.detailsId
  )[0];

  return (
    <OrderItemStyles>
      <div className='item-img'>
        {itemData?.image?.data[0]?.attributes?.url && (
          <Image
            src={itemData?.image?.data[0]?.attributes?.url}
            alt={itemData?.itemTitle || ''}
            height={45}
            width={45}
            objectFit='scale-down'
          />
        )}
      </div>
      <div className='item-wrapper'>
        <div className='top-line'>
          <h4>
            {itemData?.itemTitle &&
              capitalizeStr(itemData?.itemTitle)}
          </h4>
          <p>
            {itemDetails?.type} - {itemDetails?.typeValue}
          </p>
          <p>
            Size - {itemDetails?.size || itemData?.size}
          </p>
        </div>
        <div className='lower-line'>
          <p>Qty - {item?.qty}</p>
          <p>
            Price -{' '}
            {`$${
              itemDetails?.price?.toFixed(2) ||
              itemData?.price?.toFixed(2)
            }`}
          </p>
        </div>
      </div>
    </OrderItemStyles>
  );
}
