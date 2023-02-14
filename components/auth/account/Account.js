import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

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

  const { data: ordersData } = useQuery(USER_ORDERS_QUERY, {
    variables: {
      id,
    },
  });

  const user = data?.usersPermissionsUser?.data;
  const orders = ordersData?.orders?.data;

  return (
    <AccountStyles>
      <section className='user'>
        <h3>{user?.attributes?.username}</h3>
        <hr />
        <p>{user?.attributes?.email}</p>
        <p>{user?.attributes?.phone}</p>
      </section>
      <section className='orders'>
        <h4>Your orders</h4>
        {orders &&
          orders?.map(order => (
            <OrderItem key={order?.id} order={order} />
          ))}
      </section>
    </AccountStyles>
  );
}

function OrderItem({ order }) {
  let orderDetails = order?.attributes?.order_details;
  let itemsDetails = order?.attributes?.items_details;

  orderDetails = JSON.parse(orderDetails);

  const charge = orderDetails?.charge;
  const tax = orderDetails?.charge * 0.08875;
  const total = (charge + tax).toFixed(2);
  const date = new Date(order?.attributes?.createdAt);
  const time = date.getHours();
  console.log(time);

  return (
    <OrderItemStyles>
      <section className='top-line'>
        <p>{order.id}</p>
        <p>Charge: ${charge.toFixed(2)}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <p>Total: ${total}</p>
        {/* <p>{date}</p> */}
        <p>{order?.attributes?.status}</p>
      </section>
    </OrderItemStyles>
  );
}
