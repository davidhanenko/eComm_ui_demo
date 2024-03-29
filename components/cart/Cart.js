import gql from 'graphql-tag';
import {
  useLazyQuery,
  useMutation,
  useQuery,
} from '@apollo/client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../../context/cartState';
import { useSession } from 'next-auth/react';
import CartItem from './cart-item/CartItem';
import { CartStyles } from './CartStyles';

import Modal from './modal/Modal';
import { MdClose } from 'react-icons/md';
import EmptyCart from '../shared/EmptyCart';
// import useUser from '../auth/User';

// const USER_CART_QUERY = gql`
//   query USER_CART_QUERY($id: ID!) {
//     usersPermissionsUser(id: $id) {
//       data {
//         id
//         attributes {
//           cart
//         }
//       }
//     }
//   }
// `;

// const UPDATE_USER_CART_MUTATION = gql`
//   mutation UPDATE_USER_CART_MUTATION(
//     $id: ID!
//     $data: UsersPermissionsUserInput!
//   ) {
//     updateUsersPermissionsUser(id: $id, data: $data) {
//       data {
//         id
//         attributes {
//           cart
//         }
//       }
//     }
//   }
// `;

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

  // const me = useUser();
  // user session
  const { data: session } = useSession();

  // get user query
  // const [
  //   fetchCart,
  //   { data: userData, loading: userLoading },
  // ] = useLazyQuery(USER_CART_QUERY, {
  //   variables: {
  //     id: session?.id,
  //   },
  // });

  //  update user cart mutation
  // const [updateUsersPermissionsUser, { error }] =
  //   useMutation(UPDATE_USER_CART_MUTATION);

  // purchase policy modal window state
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const cartRef = useRef(null);

  // useEffect(() => {
  //   if (session) {
  //     fetchCart();
  //   }
  // }, [session]);

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
  // if yes - fill cart with items from local storage
  // useEffect(() => {
  //   const mergeCart = () => {
  //     if (session) {
  //       if (userData) {
  //         const cartData = JSON.parse(
  //           localStorage.getItem('cart') ?? '[]'
  //         );

  //         const userCart = JSON.parse(
  //           userData?.usersPermissionsUser?.data?.attributes
  //             ?.cart
  //         );

  //         const newCart = [...cartData, ...userCart];

  //         let obj = {};

  //         for (let el of newCart) {
  //           if (!obj[el.cartId]) {
  //             obj[el.cartId] = el;
  //           } else {
  //             obj[el.cartId].quantity += el.quantity;
  //           }
  //         }

  //         // updated/merged cart
  //         setCart(
  //           Object.keys(obj).map(el => (el = obj[el]))
  //         );
  //         localStorage.setItem('cart', '[]');
  //       }
  //     } else {
  //       setCart(JSON.parse(localStorage.getItem('cart')));
  //     }
  //   };
  //   setTimeout(() => {
  //     mergeCart();
  //   }, 100);
  // }, [userLoading]);

  useEffect(() => {
    if (sessionStorage.getItem('cart')) {
      setCart(JSON.parse(sessionStorage.getItem('cart')));
    }
  }, []);

  // calc total cost for all items in the cart
  useEffect(() => {
    const handleCart = async () => {
      setTotalCost(
        cart &&
          cart.reduce(
            (t, el) =>
              (t += el.price ? el.quantity * el.price : 0),
            0
          )
      );

      // update user cart
      // if (session) {
      //   await updateUsersPermissionsUser({
      //     variables: {
      //       id: session?.id,
      //       data: { cart: JSON.stringify(cart) },
      //     },
      //   });
      // } else {
      // set items from cart to localStorage
      sessionStorage.setItem('cart', JSON.stringify(cart));
      // }
    };

    handleCart();
  }, [cart, totalCost, count]);

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
          {cart && cart.length > 0 ? (
            <ul>
              {cart.map(cartItem => (
                <CartItem
                  key={cartItem?.cartId}
                  cartId={cartItem?.cartId}
                  quantity={cartItem?.quantity}
                  link={cartItem?.link}
                  itemDetailsId={cartItem?.itemDetailsId}
                />
              ))}
            </ul>
          ) : (
            <EmptyCart />
          )}
        </div>
        <footer>
          {totalCost > 0 && (
            <div className='cart-total'>
              <p>Cart subtotal - ${totalCost.toFixed(2)}</p>
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
