import Image from 'next/image';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import capitalizeStr from '../../../../helpers/capitalizeStr';
import { OrderItemStyles } from './OrderItemStyles';

export const ORDER_ITEM_QUERY = gql`
  query ORDER_ITEM_QUERY($id: ID!) {
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

export default function OrderItem({ item, index }) {
  const { data, error, loading } = useQuery(
    ORDER_ITEM_QUERY,
    {
      variables: {
        id: item?.cartId.split('-')[0],
      },
    }
  );

  const itemData = data?.singleItem?.data?.attributes;

  const itemDetails = itemData?.sizePrice.filter(
    el => el.id === item.detailsId
  )[0];

  return (
    <OrderItemStyles>
      <p className='item-number'>{index}.</p>
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
            {item?.title && capitalizeStr(item?.title)}
          </h4>
          <div>
            {item?.type && (
              <span className='item-type'>
                {item?.type} -{' '}
              </span>
            )}
            <span>{item?.typeValue}</span>
          </div>
          <p>
            {item?.size
              ? `Size - ${item?.size}`
              : item?.size}
          </p>
        </div>
        <div className='lower-line'>
          <p>Qty - {item?.quantity}</p>

          {item?.price ? (
            <p>Price - ${item?.price?.toFixed(2)}</p>
          ) : (
            <p className='price-not-available'>
              Price not available
            </p>
          )}
          {item?.price ? (
            <p>Total - ${(item?.price * item?.quantity).toFixed(2)}</p>
          ) : (
            <p className='price-not-available'>
              Price not available
            </p>
          )}
        </div>
      </div>
    </OrderItemStyles>
  );
}
