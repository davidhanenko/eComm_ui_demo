import gql from 'graphql-tag';
import Orders from '../../components/orders_admin/orders/Orders';
import {
  addApolloState,
  initializeApollo,
} from '../../lib/apollo';

export const ALL_ORDERS_QUERY = gql`
  query ALL_ORDERS_QUERY {
    orders {
      data {
        id
        attributes {
          createdAt
          status
          orderDetails: order_details
          itemDetails: items_details
        }
      }
    }
  }
`;

export default function OrdersPage(props) {
  const orders = props?.orders?.data;

  return <Orders orders={orders} />;
}

export const getServerSideProps = async ctx => {
  const client = initializeApollo({
    headers: ctx?.req?.headers,
  });

  let layout = 'main';

  try {
    const {
      data: { orders },
    } = await client.query({
      query: ALL_ORDERS_QUERY,
    });

    return addApolloState(client, {
      props: {
        orders: orders || null,
        layout,
      },
    });
  } catch {
    return {
      props: {},
    };
  }
};
