import { useMemo, useState } from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import DateAndTime from '../../shared/DateAndTime';
import LoaderContainer from '../../shared/loaders/loader-container/LoaderContainer';

import {
  OrdersStyles,
  OrdersItemStyles,
} from './OrdersStyles';
import { usePagination } from '../../../context/paginationState';
import { ORDER_STATUS_OPTIONS } from '../../../config';
import DropdownSelect from '../../shared/pagination/dropdown/DropdownSelect';

export const ALL_ORDERS_QUERY = gql`
  query ALL_ORDERS_QUERY(
    $limit: Int
    $start: Int = 0
    $sort: [String]
    $status: String!
  ) {
    orders(
      filters: { status: { containsi: $status } }
      pagination: { start: $start, limit: $limit }
      sort: $sort
    ) {
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

export default function Orders({ page, itemsCount }) {
  const [filterBy, setFilterBy] = useState('');
  const { itemsPerPage, sortItemsBy } = usePagination();

  const orderStatusArr = useMemo(() => {
    return [
      {
        title: 'ALL',
        option: '',
      },
      ...ORDER_STATUS_OPTIONS,
    ];
  }, []);

  const { data, loading } = useQuery(
    ALL_ORDERS_QUERY,
    {
      variables: {
        limit: itemsPerPage,
        start: page * itemsPerPage - itemsPerPage,
        sort: sortItemsBy,
        status: filterBy,
      },
    }
  );

  const orders = data?.orders?.data;

  return (
    <OrdersStyles>
      <header>
        <h1>Orders</h1>
        <div className='filter-orders'>
          <span>Status</span>
          <DropdownSelect
            options={orderStatusArr}
            select={filterBy}
            handleSelect={e => setFilterBy(e.target.value)}
          />
        </div>

        <hr />
      </header>

      {!loading ? (
        orders?.map(order => (
          <OrdersItem key={order?.id} order={order} />
        ))
      ) : (
        <LoaderContainer height={'40vh'} />
      )}
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
          <DateAndTime date={date} />
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
      )}
    </Link>
  );
}
