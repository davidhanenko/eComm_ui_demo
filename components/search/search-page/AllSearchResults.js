import Head from 'next/head';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { toast } from 'react-toastify';

import { usePagination } from '../../../context/paginationState';
import LoaderContainer from '../../shared/loaders/loader-container/LoaderContainer';
import FoundItem from './found-item/FoundItem';
import {
  AllSearchResultsStyles,
  SearchResultsContainerStyles,
} from './AllSearchResultsStyles';

// search query
const SEARCH_QUERY = gql`
  query SEARCH_QUERY(
    $searchTerm: String!
    $limit: Int
    $start: Int
    $sort: [String]
  ) {
    singleItems(
      filters: {
        or: [
          { itemTitle: { containsi: $searchTerm } }
          { description: { containsi: $searchTerm } }
        ]
      }
      pagination: { start: $start, limit: $limit }
      sort: $sort
    ) {
      data {
        id
        attributes {
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
          itemTitle
          price
          minPrice
          sizePrice {
            ... on ComponentItemDetailsItemDetails {
              id
              size
              price
            }
          }
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
`;

// search results component
export default function AllSearchResults({
  itemsCount,
  term,
  page,
}) {
  const { itemsPerPage, sortItemsBy } = usePagination();

  const { data, error, loading } = useQuery(SEARCH_QUERY, {
    variables: {
      searchTerm: term,
      limit: itemsPerPage,
      start: page * itemsPerPage - itemsPerPage,
      sort: sortItemsBy,
    },
  });

  if (loading) return <LoaderContainer height={'100vh'} />;
  // if (error) {
  //   toast.error(
  //     'An unexpected error while searching for items, please try again'
  //   );
  // }

  const foundItems = data?.singleItems?.data || [];

  return (
    <>
      <SearchResultsContainerStyles>
        <Head>
          <title>A2Z-Search results</title>
        </Head>

        {itemsCount > 0 ? (
          <h3>
            Items found for <span>{term}</span>
            <br />
            <p className='total-items'>
              Total {itemsCount} item(s) found{' '}
            </p>
          </h3>
        ) : (
          <h3>
            Nothing found for <span>{term}</span>, please
            try again
          </h3>
        )}

        <AllSearchResultsStyles>
          {foundItems &&
            foundItems.map(item => (
              <FoundItem
                key={item?.id}
                item={item?.attributes}
              />
            ))}
        </AllSearchResultsStyles>
      </SearchResultsContainerStyles>
    </>
  );
}
