import { useCart } from '../../../../context/cartState';
import OrderItem from '../../place-order/order-item/OrderItem';
import { TAX_VALUE } from '../../../../config';
import { RequestOrderStyles } from './RequestOrderStyles';
import RequestOrderForm from './request-order-form/RequestOrderForm';

export default function RequestOrder() {
  const {
    cart,
    count,
    totalCost: costFromCart,
  } = useCart();

  const ids = cart.map(
    el => (el = el.cartId.split('-')[0])
  );

  const tax = costFromCart * TAX_VALUE;
  const TotalCharge = (costFromCart + tax).toFixed(2);

  return (
    <RequestOrderStyles>
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
            />
          ))}
        </section>

        <section className='charge-section'>
          <p>Total cost - ${costFromCart?.toFixed(2)}</p>
          <p>Tax - ${tax?.toFixed(2)}</p>
          <p>Total charge - ${TotalCharge}</p>

          <RequestOrderForm
            totalCost={costFromCart}
            count={count}
            items_details={JSON.stringify(cart)}
            single_items={[...ids]}
            tax={tax}
          />
        </section>
      </main>
    </RequestOrderStyles>
  );
}
