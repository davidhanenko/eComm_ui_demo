import Image from 'next/image';
import Link from 'next/link';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import {
  OrderStyles,
  OrderItemStyles,
} from './OrderStyles';

const ORDER_ITEMS_QUERY = gql`
  query ORDER_ITEMS_QUERY($id: ID!) {
    singleItem(id: $id) {
      data {
        id
        attributes {
          itemTitle
          price
          size
          quantity
          sizePrice {
            ... on ComponentItemDetailsItemDetails {
              id
              size
              price
              type
              typeValue: type_value
              quantity
            }
          }
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default function Order({ order }) {
  // items included in current order (get from db JSON)
  const orderItems = JSON.parse(
    order?.attributes?.itemDetails
  );

  console.log(order);

  return (
    <OrderStyles>
      <header>
        <h2>Order ID - {order.id}</h2>
        <div className='header-wrapper'>
          <section className='top-left'>
            <p>
              Total items in order -{' '}
              {order?.attributes?.totalItems}
            </p>
            <p>
              Total cost - $
              {order?.attributes?.charge.toFixed(2)}
            </p>
            <p>Tax - </p>
            <p>Shipping - </p>
          </section>
          <section className='top-right'>
            <p>David Hanenko</p>
            <p>Company</p>
            <p>email@gmail.com</p>
            <p>929-222-1144</p>
          </section>
        </div>
      </header>

      {Object.values(orderItems).map((item, i) => (
        <OrderItem item={item} key={item.id + i} />
      ))}

      <footer>
        <Link href={'/orders'}>
          <button>Back to orders</button>
        </Link>
      </footer>
    </OrderStyles>
  );
}

function OrderItem({ item }) {
  const { data, error, loading } = useQuery(
    ORDER_ITEMS_QUERY,
    {
      variables: {
        id: item.id,
      },
    }
  );

  const itemData = data?.singleItem?.data?.attributes;

  const itemDetails = itemData?.sizePrice.filter(
    el => el.id === item.detailsId
  )[0];

  return (
    <OrderItemStyles>
      <Image
        src={itemData?.image?.data[0]?.attributes?.url}
        alt={itemData?.itemTitle || ''}
        height={45}
        width={45}
        objectFit='scale-down'
      />
      <h4>{itemData?.itemTitle}</h4>
      <p>{itemDetails?.size || itemData?.size}</p>
      <p>{`$${
        itemDetails?.price?.toFixed(2) ||
        itemData?.price?.toFixed(2)
      }`}</p>
      <p>{itemDetails?.type}</p>
      <p>{itemDetails?.typeValue}</p>
    </OrderItemStyles>
  );
}
