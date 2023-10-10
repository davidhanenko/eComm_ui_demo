import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Hamburger from 'hamburger-react';

import { useNav } from '../../../../../context/navState';

import NavDropdown from './NavDropdown';
import { NavStyles, NavButtonStyles } from './NavStyles';
import { TOGGLE_WIDTH } from '../../../../../config';
import Search from '../../../../search/Search';
import UserCart from './user-cart/UserCart';
import useMediaQuery from '../../../../../lib/useMediaQuery';

export default function Nav(props) {
  const navRef = useRef(null);

  const {
    navOpen,
    toggleNav,
    closeSideNav,
    navBtnClick,
    setNavBtnClick,
  } = useNav();

  const isToggled = useMediaQuery(TOGGLE_WIDTH);

  // close toggled nav on click outside
  useEffect(() => {
    //  click outside nav handler
    const handleClickOutside = event => {
      if (
        navOpen &&
        !navRef?.current?.contains(event.target)
      ) {
        closeSideNav();
      }
    };

    //  click outside nav listener
    document.addEventListener(
      'mousedown',
      handleClickOutside,
      {
        passive: true,
      }
    );

    // cleanup the event listener
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, [navOpen]);

  // close nav when width more than 850px/toggleWidth
  useEffect(() => {
    let isMounted = true;
    if (!isToggled && isMounted) {
      closeSideNav();
    }
    return () => {
      isMounted = false;
    };
  }, [isToggled]);

  const router = useRouter();

  // link button
  const LinkBtn = React.forwardRef(
    ({ href, title, page }, ref) => {
      return (
        <a
          href={href}
          onClick={() => closeSideNav()}
          ref={ref}
          className={
            router.asPath.split('/')[1] === page
              ? 'active-link'
              : ''
          }
        >
          {title}
        </a>
      );
    }
  );

  return (
    <>
      <NavStyles
        open={navOpen}
        btnClick={navBtnClick}
        isToggled={isToggled}
        ref={navRef}
      >
        <div className='nav-links'>
          <Link href='/products'>
            <NavDropdown serviceTitle='products' />
          </Link>

          <Link href='/tools'>
            <NavDropdown serviceTitle='tools' />
          </Link>

          <Link href='/' passHref>
            <LinkBtn title={'home'} page={''} />
          </Link>
          <Link href='/about' passHref>
            <LinkBtn title={'about us'} page={'about'} />
          </Link>

          <Link href='/contacts' passHref>
            <LinkBtn
              title={'contact us'}
              page={'contacts'}
            />
          </Link>
        </div>
        <NavButtonStyles
          onClick={() => setNavBtnClick(true)}
        >
          <Hamburger
            hideOutline={false}
            label='Show menu'
            toggled={navOpen}
            toggle={toggleNav}
          />
        </NavButtonStyles>
        <div className='lower-row'>
          <Search />
          <UserCart />
        </div>
      </NavStyles>
    </>
  );
}
