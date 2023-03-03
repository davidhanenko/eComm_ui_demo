import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

import {
  AccountStyles,
  OrderItemStyles,
} from './AccountStyles';

const USER_QUERY = gql`
  query USER_QUERY($id: ID!) {
    usersPermissionsUser(id: $id) {
      data {
        id
        attributes {
          username
          email
          phone
          company
          deliveryAddress: delivery_address
          orders(sort: ["createdAt:desc"]) {
            data {
              id
              attributes {
                order_details
                items_details
                status
                createdAt
              }
            }
          }
        }
      }
    }
  }
`;

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY($id: ID!) {
    orders(
      filters: {
        users_permissions_user: { id: { eqi: $id } }
      }
    ) {
      data {
        id
        attributes {
          order_details
          items_details
          status
          createdAt
          users_permissions_user {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

export default function Account({ id }) {
  const { data, loading, error } = useQuery(USER_QUERY, {
    variables: {
      id,
    },
  });

  const { data: session } = useSession();

  const user = data?.usersPermissionsUser?.data;
  const orders = user?.attributes?.orders?.data;

  return (
    <AccountStyles>
      <header>
        <h2>Welcome to your account</h2>
        <p>
          Review your orders status, add or update your
          information
        </p>
      </header>
      <div className='account-container'>
        {parseInt(user?.id) === session?.id && (
          <>
            <section className='user'>
              <h3>{user?.attributes?.username}</h3>
              <hr />
              <p>{user?.attributes?.email}</p>
              <p>{user?.attributes?.phone}</p>
              <p>{user?.attributes?.company}</p>
              <p>{user?.attributes?.deliveryAddress}</p>

              <hr />

              <div className='edit-container'>
                <Link href={`${session?.id}/edit`}>
                  Update Account
                </Link>
                <span className='divider'>|</span>
                {!session?.user?.email && (
                  <Link href='/auth/password/change-password'>
                    Change password
                  </Link>
                )}
              </div>
            </section>
            <section className='orders'>
              <h4>Orders</h4>
              {orders &&
                orders?.map(order => (
                  <OrderItem
                    key={order?.id}
                    order={order}
                  />
                ))}
            </section>
          </>
        )}
      </div>
    </AccountStyles>
  );
}

function OrderItem({ order }) {
  let orderDetails = order?.attributes?.order_details;
  let itemsDetails = order?.attributes?.items_details;

  orderDetails =
    typeof orderDetails !== 'object'
      ? JSON.parse(orderDetails)
      : orderDetails;

  const total = orderDetails?.total;
  const tax = orderDetails?.tax;
  const charge = orderDetails?.charge;
  const date = order?.attributes?.createdAt;
  const totalItems = orderDetails?.totalItems;

  const localDate = new Date(date).toLocaleDateString(
    'en-US'
  );
  const localTime = new Date(date).toLocaleTimeString(
    'en-US'
  );

  return (
    <OrderItemStyles>
      <section className='left-side'>
        <p>Order id - {order.id}</p>
        <p>Order status - {order?.attributes?.status}</p>
        <span>Created - </span>
        <span>{localDate}</span>
        <span>at</span>
        <span>{localTime}</span>
      </section>
      <section className='right-side'>
        <p>Items in order - {totalItems}</p>
        <p>Total: ${total}</p>
        <p>Tax: ${tax}</p>
        <p>Total charge: ${charge}</p>
      </section>
    </OrderItemStyles>
  );
}
