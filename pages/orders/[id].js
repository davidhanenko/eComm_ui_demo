import gql from 'graphql-tag';
import { initializeApollo } from '../../lib/apollo';
import Order from '../../components/orders_admin/single-order/Order';
import { authOptions } from '../api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';

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
  const layout = 'main';

  try {
    const session = await getServerSession(
      ctx.req,
      ctx.res,
      authOptions
    );

    if (!session) {
      return {
        redirect: {
          destination: '/api/auth/signin',
          permanent: false,
        },
      };
    }

    const {
      data: { order },
    } = await client.query({
      query: ORDER_QUERY,
      variables: {
        id: ctx?.query?.id,
      },
    });

    if (!order?.data) {
      return {
        notFound: true,
      };
    }

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
