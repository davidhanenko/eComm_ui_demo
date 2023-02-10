import gql from 'graphql-tag';
import {
  addApolloState,
  initializeApollo,
} from '../../lib/apollo';
import Order from '../../components/orders_admin/single-order/Order';

export const ORDER_QUERY = gql`
  query ORDER_QUERY($id: ID!) {
    order(id: $id) {
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

export default function OrderPage(props) {
  const order = props?.order?.data;

  return <Order order={order} />;
}

export const getServerSideProps = async ctx => {
  const client = initializeApollo({
    headers: ctx?.req?.headers,
  });

  let layout = 'main';

  try {
    id = await ctx?.query?.id;

    const {
      data: { order },
    } = await client.query({
      query: ORDER_QUERY,
      variables: {
        id: ctx?.query?.id,
      },
    });

    return {
      props: {
        order: order || null,
        layout,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
};
