import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { ORDER_ITEM_QUERY } from '../../../orders_admin/single-order/order-item/OrderItem';
import LoaderContainer from '../../../shared/loaders/loader-container/LoaderContainer';
import { OrderItemStyles } from './OrderItemStyles';
import capitalizeStr from '../../../../helpers/capitalizeStr';
import { useEffect } from 'react';
import { useCart } from '../../../../context/cartState';

export default function OrderItem({
  orderItem,
  orderItemDetails,
  setOrderItemDetails,
}) {
  const { count } = useCart();

  const { data, error, loading } = useQuery(
    ORDER_ITEM_QUERY,
    {
      variables: {
        id: orderItem?.cartId.split('-')[0],
      },
      fetchPolicy: 'no-cache',
      ssr: false,
    }
  );

  const item = data?.singleItem?.data?.attributes;

  const itemDetails = item?.sizePrice?.filter(
    el => el?.id === orderItem?.itemDetailsId
  )[0];

  const orderItemObj = {
    cartId: orderItem?.cartId,
    price: itemDetails?.price || item?.price,
    size: itemDetails?.size || item?.size,
    type: itemDetails?.type || null,
    typeValue: itemDetails?.typeValue || null,
    qty: orderItem?.quantity,
    itemDetailsId: orderItem?.itemDetailsId,
  };
  const isInOrder = orderItemDetails.some(
    el => el?.cartId === orderItem?.cartId
  );

  useEffect(() => {
    // add order item details from db to common array

    !isInOrder
      ? data &&
        setOrderItemDetails([
          ...orderItemDetails,
          {
            cartId: orderItem?.cartId,
            price: itemDetails?.price || item?.price,
            size: itemDetails?.size || item?.size,
            type: itemDetails?.type || null,
            typeValue: itemDetails?.typeValue || null,
            qty: orderItem?.quantity,
            itemDetailsId: orderItem?.itemDetailsId,
          },
        ])
      : setOrderItemDetails(
          orderItemDetails.map(el =>
            el?.cartId === orderItem?.cartId
              ? {
                  ...el,
                  orderItemObj,
                }
              : el
          )
        );
  }, [orderItem, ]);

  const imgUrl = item?.image?.data[0]?.attributes?.url;

  if (loading) return <LoaderContainer height={'10rem'} />;
  return (
    <OrderItemStyles>
      <div className='item-img'>
        {imgUrl && (
          <Image
            src={imgUrl}
            alt={item?.title}
            width={45}
            height={45}
            objectFit='scale-down'
          />
        )}
      </div>

      <div className='item-details'>
        <h4 className='item-title'>
          {item?.itemTitle &&
            capitalizeStr(item?.itemTitle)}
        </h4>

        <div className='item-type'>
          {orderItemObj?.type && (
            <p>{orderItemObj?.type}:</p>
          )}
          <p>{orderItemObj?.typeValue}</p>
        </div>

        <div className='item-size'>
          {orderItemObj?.size && <p>Size:</p>}
          <p>{orderItemObj?.size}</p>
        </div>
        <div className='item-qty'>
          <p>Qty:</p>
          <p>{orderItemObj?.qty}</p>
        </div>
        <div className='item-price'>
          <p>Price:</p>

          {orderItemObj?.price ? (
            <p>${orderItemObj?.price?.toFixed(2)}</p>
          ) : (
            <p className='item-price-not-available'>
              We will contact you about this item price
            </p>
          )}
        </div>
      </div>
    </OrderItemStyles>
  );
}
