import Link from 'next/link';
import Image from 'next/image';

import { NavStateProvider } from '../../../../context/navState';

import Nav from './navbar/Nav';
import Cart from '../../../cart/Cart';
import Toast from './errors/Error';
import logoImg from '../../../../public/img/logo.png';
import { HeaderStyles, Logo } from './HeaderStyles';

export default function Header() {
  return (
    <NavStateProvider>
      <HeaderStyles>
        <Toast />
        <div className='navbar'>
          <Logo>
            <Link href='/'>
              {logoImg ? (
                <Image
                  src={logoImg}
                  alt='LOGO'
                  width={100}
                  height={50}
                  objectFit='scale-down'
                />
              ) : (
                LOGO
              )}
            </Link>
          </Logo>
          <Nav />
        </div>
        <Cart />
      </HeaderStyles>
    </NavStateProvider>
  );
}
