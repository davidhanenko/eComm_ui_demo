import { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { useCart } from '../../../context/cartState';
import { PlaceOrderStyles } from './PlaceOrderStyles';
import OrderItem from './order-item/OrderItem';
import OrderForm from './order-form/OrderForm';
import { TAX_VALUE } from '../../../config';
import useUser from '../../auth/User';
import RequestOrderComponent from '../order-request/request-component/RequestOrderComponent';
import EmptyCart from '../../shared/EmptyCart';

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY($id: ID!) {
    usersPermissionsUser(id: $id) {
      data {
        id
        attributes {
          username
          email
          phone
          company
        }
      }
    }
  }
`;

export default function PlaceOrder() {
  const [user, setUser] = useState();
  const {
    cart,
    count,
    totalCost: costFromCart,
  } = useCart();
  const me = useUser();



  const { data } = useQuery(CURRENT_USER_QUERY, {
    variables: {
      id: me?.id,
    },
  });

  useEffect(() => {
    setUser(data?.usersPermissionsUser?.data?.attributes);
  }, [me, user]);

  const ids = cart.map(
    el => (el = el.cartId.split('-')[0])
  );

  const tax = costFromCart * TAX_VALUE;
  const totalCharge = (costFromCart + tax).toFixed(2);

  return (
    <PlaceOrderStyles>
      <header>
        <h1>Process your order</h1>
        <p>
          Please carefully review the items included in the
          current order and terms & conditions related to
          order process procedure
        </p>
        <p>
          Go back to the cart whenever you need to adjust
          your order
        </p>
      </header>
      <main>
        <section className='items-section'>
          {count === 0 ? (
            <EmptyCart />
          ) : (
            cart.map(orderItem => (
              <OrderItem
                orderItem={orderItem}
                key={orderItem?.cartId}
              />
            ))
          )}
        </section>

        <section className='charge-section'>
          <p>Subtotal - ${costFromCart?.toFixed(2)}</p>
          <p>Tax - ${tax?.toFixed(2)}</p>
          <p>Total - ${totalCharge}</p>
          <p>Total items in order - {count}</p>

          {me ? (
            <OrderForm
              totalCost={costFromCart.toFixed(2)}
              tax={tax.toFixed(2)}
              totalCharge={totalCharge}
              count={count}
              items_details={cart}
              single_items={[...ids]}
              me={me}
              user={user}
            />
          ) : (
            <RequestOrderComponent />
          )}
        </section>
      </main>
    </PlaceOrderStyles>
  );
}
