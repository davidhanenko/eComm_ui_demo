import { useCart } from '../../../../../context/cartState';
import { AddToCartStyles } from './AddToCartStyles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GiShoppingCart } from 'react-icons/gi';

export default function AddToCart({
  id,
  itemDetailsId,
  title,
  size,
  price,
  type,
  typeValue,
  link,
  isAvailable,
  qty,
}) {
  const { cart, setCart } = useCart();

  // add item to cart
  const handleAdd = () => {
    if (!isAvailable || qty === 0) {
      toast.info(
        'Current item or item with selected type and size is not available at this moment',
        {
          position: 'top-right',
          autoClose: 4000,
        }
      );

      return;
    }

    // check if there is same item in the cart
    const itemIsInCart = cart.some(
      el => el.cartId === `${id}-${price}-${typeValue}`
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
            cartId: `${id}-${price}-${typeValue}`,
            itemDetailsId,
            title,
            size,
            price,
            type,
            typeValue,
            link,
            quantity: 1,
          },
        ]);
  };

  return (
    <AddToCartStyles>
      <button onClick={handleAdd}>
        add to <GiShoppingCart className='cart-icon' />
      </button>
    </AddToCartStyles>
  );
}
