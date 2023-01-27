import dynamic from 'next/dynamic';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import { PaginationStateProvider } from '../../context/paginationState';

import AllSearchResults from '../../components/search/search-page/AllSearchResults';
import Pagination from '../../components/shared/pagination/Pagination';
import LoaderContainer from '../../components/shared/loaders/loader-container/LoaderContainer';

// query to found quantity of found items
const SEARCH_PAGINATION_QUERY = gql`
  query SEARCH_PAGINATION_QUERY($searchTerm: String!) {
    singleItems(
      filters: {
        or: [
          { itemTitle: { containsi: $searchTerm } }
          { description: { containsi: $searchTerm } }
        ]
      }
    ) {
      meta {
        pagination {
          total
        }
      }
    }
  }
`;

// styles fot the pagination component on search page
const PaginationStyles = styled.div`
  margin-top: calc(
    var(--navHeight) + var(--searchHeight) + 5rem
  );
`;

export default function SearchPage({ query }) {
  // current page
  const page = parseInt(query.page);
  // search term
  const term = query.search;

  const { data, loading, error } = useQuery(
    SEARCH_PAGINATION_QUERY,
    {
      variables: {
        searchTerm: term,
      },
    }
  );

  // count of found items
  const itemsCount =
    data?.singleItems?.meta?.pagination?.total;

  // url for pagination component
  const currentUrl = `search/${term}`;

  if (loading) return <LoaderContainer height={'100vh'} />;

  return (
    <PaginationStateProvider>
      <PaginationStyles>
        <Pagination
          page={page || 1}
          currentUrl={currentUrl}
          itemsCount={itemsCount}
        />
      </PaginationStyles>
      <AllSearchResults
        itemsCount={itemsCount}
        term={term}
        page={page || 1}
      />
    </PaginationStateProvider>
  );
}

export async function getServerSideProps(props) {
  let layout = 'main';

  return {
    props: {
      layout,
    },
  };
}
