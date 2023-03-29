import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { useSession } from 'next-auth/react';

import Order from './order/Order';
import DateAndTime from '../../shared/DateAndTime';
import {
  AccountStyles,
  SingleOrderStyles,
} from './AccountStyles';
import LoaderContainer from '../../shared/loaders/loader-container/LoaderContainer';

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

export default function Account({ id }) {
  const { data, loading, error } = useQuery(USER_QUERY, {
    variables: {
      id,
    },
  });

  const [currentOrder, setCurrentOrder] = useState(-1);

  const orderRef = useRef(null);

  const { data: session } = useSession();
  const router = useRouter();

  const user = data?.usersPermissionsUser?.data;
  const orders = user?.attributes?.orders?.data;

  if (user && parseInt(user?.id) !== session?.id) {
    router.push('/');
  }

  const handleOrderSelect = e => {
    setCurrentOrder(
      orders?.find(el => el.id === e.target.dataset.id)
    );
  };

  useEffect(() => {
    orderRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }, [currentOrder, orderRef]);

  if (loading) {
    return <LoaderContainer height={'80vh'} />;
  }

  return (
    <AccountStyles>
      <header>
        <h2>Welcome to your account</h2>
        <p>
          Review your orders status, add or update your
          information
        </p>
      </header>

      <hr />
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
              <div className='orders-container'>
                {orders &&
                  orders?.map(order => (
                    <SingleOrder
                      key={order?.id}
                      order={order}
                      handleOrderSelect={handleOrderSelect}
                    />
                  ))}
              </div>
            </section>
          </>
        )}
      </div>
      <div ref={orderRef}>
        {currentOrder !== -1 && (
          <Order order={currentOrder} />
        )}
      </div>
    </AccountStyles>
  );
}

function SingleOrder({ order, handleOrderSelect }) {
  let orderDetails = order?.attributes?.order_details;
  let itemsDetails = order?.attributes?.items_details;

  orderDetails =
    typeof orderDetails !== 'object'
      ? JSON.parse(orderDetails)
      : orderDetails;

  const total = orderDetails?.total;
  const tax = orderDetails?.tax;
  const charge = orderDetails?.charge;
  const totalItems = orderDetails?.totalItems;

  return (
    <SingleOrderStyles>
      <div
        onClick={handleOrderSelect}
        className='order-overlay'
        data-id={order.id}
      ></div>
      <section className='left-side'>
        <p className='order-id'>Order ID - {order.id}</p>
        <p>Order status - {order?.attributes?.status}</p>
        <DateAndTime date={order?.attributes?.createdAt} />
      </section>
      <section className='right-side'>
        <p>Items in order - {totalItems}</p>
        <p>Total: ${total}</p>
        <p>Tax: ${tax}</p>
        <p>Total charge: ${charge}</p>
      </section>
    </SingleOrderStyles>
  );
}
