import {
  OrdersStyles,
  OrdersItemStyles,
} from './OrdersStyles';
import Link from 'next/link';

export default function Orders({ orders }) {
  return (
    <OrdersStyles>
      {orders?.map(order => (
        <OrdersItem key={order?.id} order={order} />
      ))}
    </OrdersStyles>
  );
}

function OrdersItem({ order }) {
  const date = order?.attributes?.createdAt;
  const localDate = new Date(date).toLocaleDateString(
    'en-US'
  );

  const localTime = new Date(date).toLocaleTimeString(
    'en-US'
  );

  return (
    <Link
      href={{
        pathname: `/orders/[id]`,
        query: {
          id: order.id,
        },
      }}
    >
      <OrdersItemStyles order={order}>
        <p>ID - {order?.id}</p>

        <p>
          {localDate} &nbsp; {localTime}
        </p>
        <div>
          <p>Total charge - ${order?.attributes?.charge}</p>
          <p>Items - {order?.attributes?.totalItems}</p>
        </div>

        <div>
          <p>David Hanenko</p>
          <p>Company</p>
        </div>
        <div>
          <p>9293313730</p>
          <p>email.gmail.com</p>
        </div>

        <div
          className={`${order?.attributes?.status} order-status`}
        >
          {order?.attributes?.status}
        </div>
      </OrdersItemStyles>
    </Link>
  );
}
