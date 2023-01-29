import { useCart } from '../../../../../context/cartState';
import { AddToCartStyles } from './AddToCartStyles';
import { toast } from 'react-toastify';

import { GiShoppingCart } from 'react-icons/gi';

export default function AddToCart({
  id,
  itemDetailsId,
  size,
  price,
  type,
  link,
}) {
  const { cart, setCart } = useCart();

  // add item to cart
  const handleAdd = () => {
    // check if there is same item in the cart
    const itemIsInCart = cart.some(
      el => el.cartId === `${id}-${price}-${type}`
    );

    itemIsInCart
      ? toast.info(
          'Item is in the cart already, you can manage it there',
          {
            position: 'bottom-left',
            autoClose: 3000,
          }
        )
      : setCart([
          ...cart,
          {
            cartId: `${id}-${price}-${type}`,
            itemDetailsId,
            size,
            price,
            type,
            quantity: 1,
            link,
          },
        ]);
  };

  return (
    <AddToCartStyles>
      <button onClick={handleAdd}>
        add to <GiShoppingCart className='cart-icon' />{' '}
      </button>
    </AddToCartStyles>
  );
}
