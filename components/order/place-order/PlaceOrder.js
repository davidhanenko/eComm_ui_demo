import { useCart } from '../../../context/cartState';
import { PlaceOrderStyles } from './PlaceOrderStyles';
import OrderItem from './order-item/OrderItem';
import OrderForm from './order-form/OrderForm';
import { useState } from 'react';

export default function PlaceOrder() {
  const [orderItemDetails, setOrderItemDetails] = useState(
    []
  );
  const {
    cart,
    count,
    totalCost: costFromCart,
  } = useCart();

  const ids = cart.map(
    el => (el = el.cartId.split('-')[0])
  );

  // cost at the moment of order creation
  let orderCost = orderItemDetails?.reduce(
    (acc, el) => (acc += el[1].price * el[1].qty),
    0
  );
  const tax = orderCost * 0.08875;
  const charge = (orderCost + tax).toFixed(2);

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
          {cart.map(orderItem => (
            <OrderItem
              orderItem={orderItem}
              key={orderItem?.cartId}
              orderItemDetails={orderItemDetails}
              setOrderItemDetails={setOrderItemDetails}
            />
          ))}
        </section>

        <section className='charge-section'>
          <p>Total cost - ${orderCost?.toFixed(2)}</p>
          <p>Tax - ${tax?.toFixed(2)}</p>
          <p>Total charge - ${charge}</p>

          <OrderForm
            costFromCart={costFromCart}
            totalCost={orderCost}
            count={count}
            items_details={JSON.stringify(orderItemDetails)}
            single_items={[...ids]}
          />
        </section>
      </main>
    </PlaceOrderStyles>
  );
}
