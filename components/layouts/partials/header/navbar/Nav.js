import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import Hamburger from 'hamburger-react';

import useWindowDimensions from '../../../../../lib/windowDimensions';
import { useNav } from '../../../../../context/navState';

import NavDropdown from './NavDropdown';
import { NavStyles, NavButtonStyles } from './NavStyles';
import { TOGGLE_WIDTH } from '../../../../../config';
import Search from '../../../../search/Search';
import UserCart from './user-cart/UserCart';

const SERVICES_NAV_QUERY = gql`
  query SERVICES_NAV_QUERY {
    services {
      data {
        id
        attributes {
          service
          items {
            data {
              id
              attributes {
                title
                category: items_categories {
                  data {
                    id
                    attributes {
                      categoryTitle
                      singleItem: single_items {
                        data {
                          id
                          attributes {
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
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function Nav(props) {
  const { data, loading } = useQuery(SERVICES_NAV_QUERY);

  // services to spread in nav
  const services = data?.services?.data;

  const navRef = useRef(null);

  const {
    navOpen,
    toggleNav,
    closeSideNav,
    navBtnClick,
    setNavBtnClick,
  } = useNav();

  const { width } = useWindowDimensions();

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
    if (width >= TOGGLE_WIDTH) {
      closeSideNav();
    }
    return () => {
      isMounted = false;
    };
  }, [width]);

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
        width={width}
        ref={navRef}
      >
        <div className='nav-links'>
          {services?.map(service => (
            <Link
              key={service.id}
              href={`/${service?.attributes?.service}`}
              passHref
            >
              <NavDropdown
                title={service?.attributes?.service}
                items={service?.attributes?.items?.data}
              />
            </Link>
          ))}
          <Link href='/' passHref>
            <LinkBtn title={'home'} page={''} />
          </Link>
          <Link href='/about' passHref>
            <LinkBtn title={'about'} page={'about'} />
          </Link>

          <Link href='/contacts' passHref>
            <LinkBtn title={'contacts'} page={'contacts'} />
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
        <UserCart />
      </NavStyles>
      <Search />
    </>
  );
}
