import {
  OrdersStyles,
  OrdersItemStyles,
} from './OrdersStyles';
import Link from 'next/link';

export default function Orders({ orders }) {
  return (
    <OrdersStyles>
      {orders &&
        orders?.map(order => (
          <OrdersItem key={order?.id} order={order} />
        ))}
    </OrdersStyles>
  );
}

function OrdersItem({ order }) {
  const date = order?.attributes?.createdAt;

  const orderDetails = JSON.parse(
    order?.attributes?.orderDetails
  );

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
      <OrdersItemStyles>
        <p>ID - {order?.id}</p>

        <p>
          {localDate} &nbsp; {localTime}
        </p>
        <div>
          <p>Total charge - ${orderDetails?.charge}</p>
          <p>Items - {orderDetails?.totalItems}</p>
        </div>

        <div>
          <p>{orderDetails?.name}</p>
          <p>{orderDetails?.company}</p>
        </div>
        <div>
          <p>{orderDetails?.phone}</p>
          <p>{orderDetails?.email}</p>
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
