import Head from 'next/head';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Orders from '../../components/orders_admin/orders/Orders';

import {
  addApolloState,
  initializeApollo,
} from '../../lib/apollo';
import { PaginationStateProvider } from '../../context/paginationState';
import Pagination from '../../components/shared/pagination/Pagination';
import {
  SORTING_OPTIONS_ORDERS,
  SORT_ORDERS_BY_DEFAULT,
} from '../../config';

export const ALL_ORDERS_PAGINATION_QUERY = gql`
  query ALL_ORDERS_PAGINATION_QUERY {
    orders {
      meta {
        pagination {
          total
        }
      }
    }
  }
`;

// styles fot the pagination component on orders page
const PaginationStyles = styled.div`
  margin-top: calc(
    var(--navHeight) + var(--searchHeight)
  );
`;

export default function OrdersPage(props) {
  // const { me } = useUser();

  // console.log(me);

  // if (
  //   me?.role?.name !== process.env.NEXT_PUBLIC_ADMIN_TEST
  // ) {
  //   return <h1>test</h1>;
  // }

  // current page
  const page = parseInt(props?.page);
  // quantity of orders
  const ordersCount =
    props?.orders?.meta?.pagination?.total;

  // url for pagination component
  const currentUrl = '/orders';

  // console.log(itemsPerPage);
  return (
    <>
      <Head>
        <title>Orders</title>
      </Head>
      <PaginationStateProvider>
        <PaginationStyles>
          <Pagination
            page={page || 1}
            currentUrl={currentUrl}
            itemsCount={ordersCount}
            options={SORTING_OPTIONS_ORDERS}
            optionsDefault={SORT_ORDERS_BY_DEFAULT}
          />
        </PaginationStyles>
        <Orders page={page} itemsCount={ordersCount} />
      </PaginationStateProvider>
    </>
  );
}

export const getServerSideProps = async ctx => {
  const client = initializeApollo({
    headers: ctx?.req?.headers,
  });

  let layout = 'main';

  const session = await getServerSession(
    ctx.req,
    ctx.res,
    authOptions
  );

  try {
    if (!session) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
    const page = ctx?.query?.page;

    const {
      data: { orders },
    } = await client.query({
      query: ALL_ORDERS_PAGINATION_QUERY,
    });

    return addApolloState(client, {
      props: {
        orders: orders || null,
        page: page || null,
        layout,
      },
    });
  } catch {
    return {
      props: {},
    };
  }
};
