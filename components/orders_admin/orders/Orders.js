import Link from 'next/link';
import {
  OrdersStyles,
  OrdersItemStyles,
} from './OrdersStyles';

export default function Orders({ orders }) {
  return (
    <OrdersStyles>
      <h1>Orders</h1>

      {orders &&
        orders?.map(order => (
          <OrdersItem key={order?.id} order={order} />
        ))}
    </OrdersStyles>
  );
}

function OrdersItem({ order }) {
  // order details (get from db JSON || object)
  const orderDetails =
    order &&
    typeof order?.attributes?.orderDetails === 'object'
      ? order?.attributes?.orderDetails
      : JSON.parse(order?.attributes?.orderDetails);

  // created at / date
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
          id: order?.id,
        },
      }}
    >
      {orderDetails && (
        <OrdersItemStyles>
          <p>ID - {order?.id}</p>

          <p>
            {localDate} &nbsp; {localTime}
          </p>
          <div>
            <p>
              Total charge - $
              {orderDetails?.totalCharge.toFixed(2)}
            </p>
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
      )}
    </Link>
  );
}
