import { useState } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { TbUserCircle } from 'react-icons/tb';
import { useCart } from '../../../../../../context/cartState';
import { useSession } from 'next-auth/react';
import UserDropdown from '../../../../../auth/nav-dropdown/UserDropdown';

import CartCount from '../../../../../cart/cart-count/CartCount';
import { UserCartStyles } from './UserCartStyles';

export default function UserCart() {
  const [userOpen, setUserOpen] = useState(false);
  const [userOpenBtnRef, setUserOpenBtnRef] =
    useState(null);

  const { data: session } = useSession();

  // cart state
  const { toggleCart, setCartRefState } = useCart();

  const handleUserClick = () => {
    setUserOpen(prev => !prev);
  };

  return (
    <UserCartStyles>
      <div
        className='user'
        ref={node => setUserOpenBtnRef(node)}
      >
        <TbUserCircle onClick={handleUserClick} />
        {session && (
          <p className='user-title'>
            {session?.user?.name}
          </p>
        )}
      </div>

      <UserDropdown
        userOpen={userOpen}
        setUserOpen={setUserOpen}
        userOpenBtnRef={userOpenBtnRef}
      />
      <div
        className='cart'
        ref={node => setCartRefState(node)}
      >
        <GiShoppingCart onClick={toggleCart} />
        <CartCount />
      </div>
    </UserCartStyles>
  );
}
