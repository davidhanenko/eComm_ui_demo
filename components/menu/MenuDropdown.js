import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  AiFillCaretUp,
  AiFillCaretDown,
} from 'react-icons/ai';

import { useMenu } from '../../context/menuState';

import useWindowDimensions from '../../lib/windowDimensions';

import {
  DropdownStyles,
  DropdownBtnStyles,
  DropdownItemStyles,
  DropdownMenuStyles,
} from './MenuDropdownStyles';

const DropdownItem = React.forwardRef(
  ({ href, onClick, item, setDropdownOpen }, ref) => {
    const { closeMenu } = useMenu();

    return (
      <DropdownItemStyles>
        <a
          href={href}
          onClick={() => {
            closeMenu();
            setDropdownOpen(false);
          }}
          ref={ref}
        >
          {item}
        </a>
      </DropdownItemStyles>
    );
  }
);

const MenuDropdown = React.forwardRef(function MenuDropdown(
  props,
  ref
) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isMenuOpen } = useMenu();
  const { width } = useWindowDimensions();
  const router = useRouter();

  const showDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleMouseEnter = () => {
    !isMenuOpen && setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    !isMenuOpen && setDropdownOpen(false);
  };

  // close dropdown if width more than 850px
  useEffect(() => {
    let isMounted = true;
    if (width >= 850) {
      setDropdownOpen(false);
    }
    return () => {
      isMounted = false;
    };
  }, [width]);

  return (
    <DropdownStyles onMouseLeave={handleMouseLeave}>
      <div
        className='dropdown-btns-group'
        onMouseOver={handleMouseEnter}
      >
        <a
          href={props.href}
          ref={ref}
          className={`${
            router.asPath.split('/')[2] &&
            router.asPath.split('/')[2] ==
              props.dropDownMenuitem
              ? 'active'
              : ''
          } link-title`}
        >
          {props.dropDownMenuitem}
        </a>
        <DropdownBtnStyles
          type='button'
          onClick={showDropdown}
          disabled={!isMenuOpen || width > 850}
          aria-label='Open and Close menu dropdown'
        >
          {dropdownOpen ? (
            <AiFillCaretUp />
          ) : (
            <AiFillCaretDown />
          )}
        </DropdownBtnStyles>
      </div>

      <DropdownMenuStyles dropdownOpen={dropdownOpen}>
        {props?.categories?.length > 0 ? (
          props?.categories?.map(category => (
            <Link
              href={{
                pathname: '/[service]/[items]/[collection]',
                query: {
                  service: props?.service,
                  items: props?.dropDownMenuitem,
                  collection:
                    category?.attributes?.categoryTitle,
                },
              }}
              key={category.id}
              passHref
            >
              <DropdownItem
                item={category?.attributes?.categoryTitle}
                setDropdownOpen={setDropdownOpen}
              />
            </Link>
          ))
        ) : (
          <p className='no-items'>Nothing here yet</p>
        )}
      </DropdownMenuStyles>
    </DropdownStyles>
  );
});

export default MenuDropdown;
