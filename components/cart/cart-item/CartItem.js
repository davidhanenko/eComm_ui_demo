import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useQuery } from '@apollo/client';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  CartItemStyles,
  QtyControlStyles,
} from './CartItemStyles';
import { useCart } from '../../../context/cartState';
import capitalizeStr from '../../../helpers/capitalizeStr';
import { ORDER_ITEM_QUERY } from '../../orders_admin/single-order/order-item/OrderItem';

import ThreeDots from 'react-loader-spinner';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

export default function CartItem({
  cartId,
  itemDetailsId,
  quantity,
  link,
}) {
  const { cart, setCart, cartReload } = useCart();
  const [qty, setQty] = useState(quantity);
  const router = useRouter();

  const { data, loading } = useQuery(ORDER_ITEM_QUERY, {
    variables: {
      id: cartId?.split('-')[0],
    },
    fetchPolicy: 'no-cache',
    ssr: false,
  });

  const cartItem = data?.singleItem?.data;

  const itemDetails = itemDetailsId
    ? cartItem?.attributes?.sizePrice?.find(
        el => el.id === itemDetailsId
      )
    : null;

  const title = cartItem?.attributes?.itemTitle;
  const price = itemDetailsId
    ? itemDetails?.price
    : cartItem?.attributes?.price;
  const size = itemDetailsId
    ? itemDetails?.size
    : cartItem?.attributes?.size;
  const type = itemDetails?.type;
  const typeValue = itemDetails?.typeValue;

  useEffect(() => {
    setCart(
      cart.map(el =>
        el.cartId === cartId
          ? {
              ...el,
              title: title,
              price: price,
              size: size,
              type: type,
              typeValue: typeValue,
            }
          : el
      )
    );
  }, [cartReload, data]);

  const handleQuantity = e => {
    const result = e.target.value.replace(/\D/g, '');
    if (result <= 99) {
      setQty(result <= 0 ? '' : result);
    } else {
      toast.error('25 items maximum allowed', {
        autoClose: 3000,
      });
    }
  };

  const incQuantity = e => {
    if (qty === 99) {
      toast.error('99 items maximum allowed', {
        autoClose: 3000,
      });
    }
    setQty(prev => (prev <= 98 ? ++prev : prev));
  };

  const decQuantity = e => {
    setQty(prev => (prev < 2 ? 1 : --prev));
  };

  useEffect(() => {
    setCart(
      cart.map(el =>
        el.cartId === cartId
          ? { ...el, quantity: +qty }
          : el
      )
    );
  }, [qty]);

  const handleDelete = () => {
    setCart(cart?.filter(el => el?.cartId !== cartId));
  };

  // const handleContactsRedirect = () => {

  // }

  if (loading)
    return <ThreeDots type='ThreeDots' color='#B85C38' />;

  return (
    <CartItemStyles>
      <div className='item-img'>
        <Image
          src={
            cartItem?.attributes?.image?.data[0]?.attributes
              ?.url
          }
          alt={
            cartItem?.attributes?.itemTitle ||
            'cart item image'
          }
          width={45}
          height={45}
          objectFit='scale-down'
        />
      </div>
      <div className='item-details'>
        <div className='title-size-container'>
          <a href={`${link}`}>
            <h4 className='item-title'>
              {title && capitalizeStr(title)}
            </h4>
          </a>

          {typeValue && (
            <p className='item-type'>{typeValue}</p>
          )}
          {size && <p className='item-size'>{size}</p>}
        </div>

        <div className='price-amount-container'>
          <QtyControlStyles>
            <button
              onClick={decQuantity}
              disabled={qty <= 1}
            >
              <FaMinus />
            </button>
            <input
              name='items-quantity'
              type='number'
              min='1'
              max='25'
              step='1'
              value={qty}
              onChange={handleQuantity}
            />
            <button onClick={incQuantity}>
              <FaPlus />
            </button>
          </QtyControlStyles>

          {price && qty > 0 && (
            <p className='item-qty-price'>
              {qty} &times; ${price?.toFixed(2)}
            </p>
          )}
          {price ? (
            <p className='item-cost'>
              ${(qty * price).toFixed(2)}
            </p>
          ) : (
            <p className='no-item-price'>
              <a href={'/contacts'}>contact us</a>&nbsp;
              contact us about this item
            </p>
          )}
        </div>
      </div>
      <div className='item-remove'>
        <MdOutlineDeleteOutline onClick={handleDelete} />
      </div>
    </CartItemStyles>
  );
}
