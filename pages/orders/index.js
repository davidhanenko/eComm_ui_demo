import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Orders from '../../components/orders_admin/orders/Orders';

import LoaderContainer from '../../components/shared/loaders/loader-container/LoaderContainer';

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

export default function OrdersPage() {
  const { data, error, loading } = useQuery(
    ALL_ORDERS_QUERY
  );

  if (loading) return <LoaderContainer height={'70vh'} />;

  const orders = data?.orders?.data;

  return <Orders orders={orders} />;
}

export async function getServerSideProps(props) {
  let layout = 'main';

  return {
    props: {
      layout,
    },
  };
}
