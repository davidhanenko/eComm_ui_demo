import { OrderItemStyles } from './OrderItemStyles';

export default function OrderItem({ item, index }) {

  return (
    <OrderItemStyles>
      <p className='item-number'>{index}.&nbsp;</p>
     
      <div className='item-wrapper'>
        <div className='top-line'>
          <h4>{item?.title && item?.title}</h4>
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
            <p>Price - ${item?.price}</p>
          ) : (
            <p className='price-not-available'>
              Price not available
            </p>
          )}
          {item?.price ? (
            <p>
              Total - $
              {(item?.price * item?.quantity).toFixed(2)}
            </p>
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
