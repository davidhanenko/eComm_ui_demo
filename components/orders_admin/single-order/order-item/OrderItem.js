import Image from 'next/image';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';


import capitalizeStr from '../../../../helpers/capitalizeStr';
import { OrderItemStyles } from './OrderItemStyles';

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

export default function OrderItem({ item }) {
  const { data, error, loading } = useQuery(
    ORDER_ITEMS_QUERY,
    {
      variables: {
        id: item?.id,
      },
    }
  );

  const itemData = data?.singleItem?.data?.attributes;

  const itemDetails = itemData?.sizePrice.filter(
    el => el.id === item.detailsId
  )[0];

  return (
    <OrderItemStyles>
      <div className='item-img'>
        {itemData?.image?.data[0]?.attributes?.url && (
          <Image
            src={itemData?.image?.data[0]?.attributes?.url}
            alt={itemData?.itemTitle || ''}
            height={45}
            width={45}
            objectFit='scale-down'
          />
        )}
      </div>
      <div className='item-wrapper'>
        <div className='top-line'>
          <h4>
            {itemData?.itemTitle &&
              capitalizeStr(itemData?.itemTitle)}
          </h4>
          <p>
            {itemDetails?.type} - {itemDetails?.typeValue}
          </p>
          <p>
            Size - {itemDetails?.size || itemData?.size}
          </p>
        </div>
        <div className='lower-line'>
          <p>Qty - {item?.qty}</p>
          <p>
            Price -{' '}
            {`$${
              itemDetails?.price?.toFixed(2) ||
              itemData?.price?.toFixed(2)
            }`}
          </p>
        </div>
      </div>
    </OrderItemStyles>
  );
}
