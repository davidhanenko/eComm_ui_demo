import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import {
  CartItemStyles,
  QtyControlStyles,
} from './CartItemStyles';
import { useCart } from '../../../context/cartState';
import capitalizeStr from '../../../helpers/capitalizeStr';

import ThreeDots from 'react-loader-spinner';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

const CART_ITEM_QUERY = gql`
  query CART_ITEM_QUERY($id: ID!) {
    singleItems(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          itemTitle
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

export default function CartItem({
  cartId,
  quantity,
  sizeProp,
  priceProp,
  typeProp,
  link,
}) {
  const { cart, setCart } = useCart();
  const [qty, setQty] = useState(quantity);

  const { data, error, loading } = useQuery(
    CART_ITEM_QUERY,
    {
      variables: {
        id: cartId?.split('-')[0],
      },
    }
  );

  const cartItem = data?.singleItems?.data[0];

  const handleQuantity = e => {
    const result = e.target.value.replace(/\D/g, '');

    setQty(result <= 0 ? '' : result);
  };

  const incQuantity = e => {
    setQty(prev => ++prev);
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
            cartItem?.attributes?.itemTitle || 'item image'
          }
          width={45}
          height={45}
          objectFit='scale-down'
        />
      </div>
      <div className='item-details'>
        <div className='title-size-container'>
          <Link href={`/${link}`}>
            <h4 className='item-title'>
              {cartItem?.attributes?.itemTitle &&
                capitalizeStr(
                  cartItem?.attributes?.itemTitle
                )}
            </h4>
          </Link>

          {typeProp && (
            <p className='item-type'>{typeProp}</p>
          )}
          {sizeProp && (
            <p className='item-size'>{sizeProp}</p>
          )}
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

          {priceProp && qty > 0 && (
            <p className='item-qty-price'>
              {qty} &times; ${priceProp.toFixed(2)}
            </p>
          )}
          {priceProp ? (
            <p className='item-cost'>
              ${(qty * priceProp).toFixed(2)}
            </p>
          ) : (
            <p className='no-item-price'>
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
