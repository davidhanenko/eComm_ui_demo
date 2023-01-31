import { useCart } from '../../../context/cartState';
import { PlaceOrderStyles } from './PlaceOrderStyles';
import OrderItem from './order-item/OrderItem';
import OrderForm from './order-form/OrderForm';

export default function PlaceOrder() {
  const { cart, count, totalCost } = useCart();

  const ids = cart.map(
    el => (el = el.cartId.split('-')[0])
  );

  const tax = totalCost * 0.08875;
  const charge = (totalCost + tax).toFixed(2);

  const itemDetails = {};

  cart.forEach((el, i) => {
    itemDetails[i] = {
      id: el.cartId.split('-')[0],
      detailsId: el.itemDetailsId,
      qty: el.quantity,
    };
  });

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
              key={orderItem.cartId}
            />
          ))}
        </section>

        <section className='charge-section'>
          <p>Total cost - ${totalCost.toFixed(2)}</p>
          <p>Tax - ${tax.toFixed(2)}</p>
          <p>Total to charge - ${charge}</p>

          <OrderForm
            totalCost={totalCost}
            count={count}
            items_details={JSON.stringify(itemDetails)}
            single_items={[...ids]}
          />
        </section>
      </main>
    </PlaceOrderStyles>
  );
}
