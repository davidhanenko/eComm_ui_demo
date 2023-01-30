import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../../context/cartState';
import CartItem from './cart-item/CartItem';
import { CartStyles } from './CartStyles';

import Modal from './modal/Modal';
import { MdClose } from 'react-icons/md';

export default function Cart() {
  const {
    cart,
    setCart,
    count,
    isCartOpen,
    closeCart,
    cartRefState,
    modalCloseBtnRef,
    totalCost,
    setTotalCost,
  } = useCart();

  // purchase policy modal window state
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const cartRef = useRef(null);

  // close cart on click outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        isCartOpen &&
        !cartRef.current.contains(event.target) &&
        !cartRefState.contains(event.target) &&
        !modalCloseBtnRef.contains(event.target)
      ) {
        closeCart();
      }
    };
    document.addEventListener(
      'mousedown',
      handleClickOutside,
      {
        passive: true,
      }
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, [isCartOpen]);

  // check if cart has items before set initial state
  useEffect(() => {
    const cartData = JSON.parse(
      localStorage.getItem('cart')
    );
    if (cartData !== null) setCart(cartData);
  }, []);

  // calc total cost for all items in the cart
  useEffect(() => {
    setTotalCost(
      cart &&
        cart.reduce(
          (t, el) =>
            (t += el.price ? el.quantity * el.price : 0),
          0
        )
    );

    // set items from cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handlePlaceOrder = () => {
    closeCart();
    router.push('/place-order');
  };

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <CartStyles isCartOpen={isCartOpen} ref={cartRef}>
        <header>
          <button onClick={closeCart}>
            <MdClose />
          </button>
        </header>
        <div className='cart-body'>
          <ul>
            {cart.length > 0 ? (
              cart.map(cartItem => (
                <CartItem
                  key={cartItem?.cartId}
                  cartId={cartItem?.cartId}
                  quantity={cartItem?.quantity}
                  sizeProp={cartItem?.size}
                  priceProp={cartItem?.price}
                  typeProp={cartItem?.type}
                  link={cartItem?.link}
                />
              ))
            ) : (
              <li className='cart-empty'>Cart is empty</li>
            )}
          </ul>
        </div>
        <footer>
          {totalCost > 0 && (
            <div className='cart-total'>
              <p>Cart total - ${totalCost.toFixed(2)}</p>
              <sub>
                Plus cost of items without a defined price{' '}
              </sub>
            </div>
          )}
          <p
            className='modal-trigger'
            onClick={() => setShowModal(true)}
          >
            purchase policy
          </p>
          <button
            disabled={!count > 0}
            onClick={handlePlaceOrder}
          >
            place order
          </button>
        </footer>
      </CartStyles>
    </>
  );
}
