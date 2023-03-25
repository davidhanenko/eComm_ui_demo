import OrderItem from './order-item/OrderItem';
import { OrderStyles } from './OrderStyles';

export default function Order({ order }) {
  const orderItems =
    typeof order?.attributes?.items_details === 'object'
      ? order?.attributes?.items_details
      : JSON.parse(order?.attributes?.items_details);

  // order details (get from db JSON || object)
  const orderDetails =
    typeof order?.attributes?.order_details === 'object'
      ? order?.attributes?.order_details
      : JSON.parse(order?.attributes?.order_details);

  const date = order?.attributes?.createdAt;
  const total = orderDetails?.total;
  const tax = orderDetails?.tax;
  const totalCharge = orderDetails?.charge;

  const localDate = new Date(date).toLocaleDateString(
    'en-US'
  );
  const localTime = new Date(date).toLocaleTimeString(
    'en-US'
  );

  return (
    <OrderStyles>
      <header>
        <div className='order-title'>
          <div>
            <h2>Order ID - {order?.id}</h2>

            <span>Created - </span>
            <span>{localDate}</span>
            <span>at</span>
            <span>{localTime}</span>
          </div>
          <p>
            Order status -{' '}
            <span
              className={`${order?.attributes?.status} order-status`}
            >
              {order?.attributes?.status}
            </span>
          </p>
        </div>

        <hr />

        <div className='header-wrapper'>
          <section className='top-left'>
            <p>
              Total items in order -{' '}
              {orderDetails?.totalItems}
            </p>
            <p>Subtotal - ${total}</p>
            <p>Tax - ${tax}</p>
            <p>Total charge - ${totalCharge}</p>
            <p>Shipping - </p>
          </section>
          <section className='top-right'>
            <h4>Contacts related to current order</h4>
            <p>{orderDetails?.name}</p>
            <p>{orderDetails?.company}</p>
            <p>{orderDetails?.email}</p>
            <p>{orderDetails?.phone}</p>
          </section>
        </div>
      </header>

      <section className='order-items'>
        <h3>Items included in order</h3>
        <hr />

        {Object.values(orderItems).map((item, i) => (
          <OrderItem
            item={item}
            index={i + 1}
            key={`${item.id}-${i}`}
          />
        ))}
      </section>

      <footer></footer>
    </OrderStyles>
  );
}
