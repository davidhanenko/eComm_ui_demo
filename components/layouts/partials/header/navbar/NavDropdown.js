import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import {
  AiFillCaretUp,
  AiFillCaretDown,
} from 'react-icons/ai';

import { useNav } from '../../../../../context/navState';

import { TOGGLE_WIDTH } from '../../../../../config';

import {
  DropdownBtnStyles,
  DropdownItemStyles,
  DropdownMenuStyles,
  NavDropdownStyles,
} from './NavDropdownStyles';
import useMediaQuery from '../../../../../lib/useMediaQuery';

const SERVICE_NAV_QUERY = gql`
  query SERVICE_NAV_QUERY($service: String!) {
    services(filters: { service: { eqi: $service } }) {
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

// navbar dropdown item
const DropdownItem = React.forwardRef(
  ({ href, onClick, dropdownItem }, ref) => {
    // item' title
    const title = dropdownItem.title;
    // item' 1st image
    const imgUrl =
      dropdownItem?.category?.data[0]?.attributes
        ?.singleItem?.data[0]?.attributes?.image?.data[0]
        ?.attributes?.url;

    const { closeSideNav } = useNav();
    return (
      <DropdownItemStyles>
        <a
          href={href}
          onClick={() => closeSideNav()}
          ref={ref}
          className='item-link'
        >
          <div className='item-title-img'>
            <span className='item-image'>
              {imgUrl && (
                <Image
                  src={imgUrl}
                  alt={title}
                  width={25}
                  height={25}
                  objectFit='scale-down'
                />
              )}
            </span>
            <p>{title}</p>
          </div>
        </a>
      </DropdownItemStyles>
    );
  }
);

// navbar dropdown
const NavDropdown = React.forwardRef(function NavDropdown(
  props,
  ref
) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { navOpen } = useNav();

  const isToggled = useMediaQuery(TOGGLE_WIDTH);

  const { data, loading } = useQuery(SERVICE_NAV_QUERY, {
    variables: {
      service: props.serviceTitle,
    },
  });

  const service = data?.services?.data[0]?.attributes;

  const router = useRouter();

  const showDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleMouseEnter = () => {
    !navOpen && setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    !navOpen && setDropdownOpen(false);
  };

  useEffect(() => {
    let isMounted = true;
    if (!isToggled && isMounted) {
      setDropdownOpen(false);
    }
    return () => {
      isMounted = false;
    };
  }, [isToggled]);

  return (
    <NavDropdownStyles onMouseLeave={handleMouseLeave}>
      <div
        className='dropdown-btns-group'
        onMouseOver={handleMouseEnter}
      >
        <a
          href={`/${service?.service}`}
          ref={ref}
          className={
            router.asPath.split('/')[1] ===
            props.serviceTitle
              ? 'active-link'
              : ''
          }
        >
          {props.serviceTitle}
        </a>
        <DropdownBtnStyles
          type='button'
          onClick={showDropdown}
          disabled={!navOpen || !isToggled}
          aria-label='Open and Close dropdown'
        >
          {dropdownOpen ? (
            <AiFillCaretUp />
          ) : (
            <AiFillCaretDown />
          )}
        </DropdownBtnStyles>
      </div>

      {
        <DropdownMenuStyles isDropdownOpen={dropdownOpen}>
          {service?.items?.data?.map(item => (
            <Link
              href={{
                pathname: `/${service?.service}/[items]`,
                query: {
                  items: item?.attributes?.title,
                },
              }}
              key={item?.id}
              passHref
            >
              <DropdownItem
                dropdownItem={item?.attributes}
              />
            </Link>
          ))}
        </DropdownMenuStyles>
      }
    </NavDropdownStyles>
  );
});

export default NavDropdown;
