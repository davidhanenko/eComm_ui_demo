import { useState } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { TbUserCircle } from 'react-icons/tb';
import { useCart } from '../../../../../../context/cartState';
import UserDropdown from '../../../../../user/nav-dropdown/UserDropdown';
import CartCount from '../../../../../cart/cart-count/CartCount';
import { UserCartStyles } from './UserCartStyles';

export default function UserCart() {
  const [userOpen, setUserOpen] = useState(false);

  // cart state
  const { toggleCart, setCartRefState } = useCart();

  const handleUserClick = () => {
    setUserOpen(prev => !prev);
  };

  return (
    <UserCartStyles>
      <div className='user'>
        <TbUserCircle onClick={handleUserClick} />
      </div>
      <UserDropdown userOpen={userOpen} />
      <div
        className='cart'
        ref={node => setCartRefState(node)}
      >
        <GiShoppingCart onClick={toggleCart} />
      </div>
      <CartCount />
    </UserCartStyles>
  );
}
