import React from 'react';
import Link from 'next/link';

import { MdOutlineClose } from 'react-icons/md';

import {
  AllResultsStyles,
  CloseBtnStyles,
  DropdownItemStyles,
  SearchDropdownStyles,
} from './SearchDropdownStyles';

export default function SearchDropdown({
  foundItems,
  term,
  setTerm,
  foundItemsCount,
}) {
  // close search dropdown / clear input
  const handleClose = () => {
    return setTerm('');
  };

  //link to view all found items
  const SeeAllItemsLink = React.forwardRef(
    ({ href }, ref) => {
      return (
        <AllResultsStyles
          href={href}
          ref={ref}
          onClick={handleClose}
        >
          <p>See all search results</p>
        </AllResultsStyles>
      );
    }
  );

  return (
    <SearchDropdownStyles>
      {foundItems &&
        foundItems.map(item => (
          <Link
            key={item.id}
            href={{
              pathname:
                '/[service]/[items]/[collection]/[singleItem]',
              query: {
                // service
                service:
                  item?.attributes?.category?.data[0]
                    ?.attributes?.items?.data[0]?.attributes
                    ?.services?.data[0]?.attributes
                    ?.service,
                // items category
                items:
                  item?.attributes?.category?.data[0]
                    ?.attributes?.items?.data[0]?.attributes
                    ?.title,
                // items collection
                collection:
                  item?.attributes?.category?.data[0]
                    ?.attributes?.categoryTitle,
                // single item/found item
                singleItem: item?.attributes?.itemTitle,
              },
            }}
          >
            <DropdownItemStyles>
              <p>{item?.attributes?.itemTitle}</p>
            </DropdownItemStyles>
          </Link>
        ))}
      {foundItemsCount > 0 && (
        <p className='found-items'>
          {foundItemsCount} item(s) found
        </p>
      )}
      {foundItemsCount !== 0 ? (
        <Link
          href={{
            pathname: '/search/[searchQuery]',
            query: {
              searchQuery: term,
            },
          }}
          passHref
        >
          <SeeAllItemsLink />
        </Link>
      ) : (
        <li className='no-items'>
          Nothing match your request - <em>{term}</em>
        </li>
      )}

      <CloseBtnStyles type='button' onClick={handleClose}>
        <MdOutlineClose />
      </CloseBtnStyles>
    </SearchDropdownStyles>
  );
}
