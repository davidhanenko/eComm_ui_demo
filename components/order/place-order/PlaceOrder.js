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

        <p>
          The charge may include additional cost of items
          which price not available at the moment of order.
          We will notify you about total cost after
          reviewing your order
        </p>
        {/* 
        <button onClick={handleOrder} disabled={loading}>
          confirm order
        </button> */}
      </section>
    </PlaceOrderStyles>
  );
}
