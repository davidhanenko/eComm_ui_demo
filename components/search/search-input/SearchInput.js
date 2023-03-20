import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/client';
import { MdSearch } from 'react-icons/md';

import debounce from 'lodash.debounce';

import SearchDropdown from '../search-dropdown/SearchDropdown';
import { SearchInputStyles } from './SearchInputStyles';

// search query
const SEARCH_QUERY = gql`
  query SEARCH_QUERY($searchTerm: String!) {
    singleItems(
      filters: {
        or: [
          { itemTitle: { containsi: $searchTerm } }
          { description: { containsi: $searchTerm } }
        ]
      }
    ) {
      data {
        id
        attributes {
          itemTitle
          category: items_categories {
            data {
              id
              attributes {
                categoryTitle
                items {
                  data {
                    id
                    attributes {
                      title
                      services {
                        data {
                          id
                          attributes {
                            service
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

export default function SearchInput() {
  const [term, setTerm] = useState('');
  const [foundItems, setFoundItems] = useState([]);

  const router = useRouter();

  const [findItems, { data, loading }] = useLazyQuery(
    SEARCH_QUERY,
    {
      fetchPolicy: 'no-cache',
      ssr: false,
    }
  );

  const findItemsButChill = debounce(findItems, 300);

  const onChangeHandler = event => {
    setTerm(event.target.value.trim());
  };

  // go to search results page after input submit
  const handleSearchInputSubmit = event => {
    if (
      event.key === 'Enter' ||
      event.target.dataset.search === 'search'
    ) {
      router.push({
        pathname: '/search/[searchQuery]',
        query: {
          searchQuery: term,
        },
      });
    }
  };

  const foundItemsCount = foundItems?.length;

  const itemsToRender = foundItems?.slice(0, 5);

  // set new value to search query on each input term change
  useEffect(() => {
    findItemsButChill({
      variables: {
        searchTerm: term,
      },
    });
    setFoundItems(data?.singleItems?.data);
  }, [term]);

  return (
    <SearchInputStyles>
      <input
        type='text'
        placeholder='Search...'
        onChange={onChangeHandler}
        value={term}
        className={loading ? 'loading' : ''}
        onKeyDown={handleSearchInputSubmit}
      />
      <button
        className='search-btn'
        onClick={handleSearchInputSubmit}
      >
        <MdSearch
          className='search-icon'
          data-search='search'
        />
      </button>

      {term && (
        <SearchDropdown
          foundItems={itemsToRender}
          term={term}
          setTerm={setTerm}
          foundItemsCount={foundItemsCount}
        />
      )}
    </SearchInputStyles>
  );
}
