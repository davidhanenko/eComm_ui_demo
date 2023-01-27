import Link from 'next/link';

import { NavStateProvider } from '../../../../context/navState';

import Nav from './navbar/Nav';
import Cart from '../../../cart/Cart';
import Error from './errors/Error';
import { HeaderStyles, Logo } from './HeaderStyles';

export default function Header() {
  return (
    <NavStateProvider>
      <HeaderStyles>
        <Error />
        <div className='navbar'>
          <Logo>
            <Link href='/'>a2z</Link>
          </Logo>
          <Nav />
        </div>
        <Cart />
      </HeaderStyles>
    </NavStateProvider>
  );
}
