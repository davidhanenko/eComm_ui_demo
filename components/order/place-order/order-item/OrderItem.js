import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { ORDER_ITEM_QUERY } from '../../../orders_admin/single-order/order-item/OrderItem';
import LoaderContainer from '../../../shared/loaders/loader-container/LoaderContainer';
import { OrderItemStyles } from './OrderItemStyles';
import capitalizeStr from '../../../../helpers/capitalizeStr';

export default function OrderItem({ orderItem }) {
  const { data, error, loading } = useQuery(
    ORDER_ITEM_QUERY,
    {
      variables: {
        id: orderItem?.cartId.split('-')[0],
      },
    }
  );

  const item = data?.singleItem?.data?.attributes;

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
          {capitalizeStr(item?.itemTitle)}
        </h4>

        <div className='item-type'>
          {orderItem?.type && <p>{orderItem?.type}:</p>}
          <p>{orderItem?.typeValue}</p>
        </div>

        <div className='item-qty'>
          <p>Size:</p>
          <p>{orderItem?.size}</p>
        </div>
        <div className='item-qty'>
          <p>Qty:</p>
          <p>{orderItem?.quantity}</p>
        </div>
        <div className='item-qty'>
          <p>Price:</p>
          <p>{orderItem?.price}</p>
        </div>
      </div>
    </OrderItemStyles>
  );
}
