
import gql from 'graphql-tag';
import {
  addApolloState,
  initializeApollo,
} from '../../lib/apollo';
import styled from 'styled-components';

import { PaginationStateProvider } from '../../context/paginationState';

import AllSearchResults from '../../components/search/search-page/AllSearchResults';
import Pagination from '../../components/shared/pagination/Pagination';


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

export default function SearchPage(props) {
  // current page
  const page = parseInt(props?.page);

  // count of found items
  const itemsCount =
    props?.singleItems?.meta?.pagination?.total;

  // url for pagination component
  const currentUrl = `/search/${props?.searchTerm}`;



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
        term={props?.searchTerm}
        page={page || 1}
      />
    </PaginationStateProvider>
  );
}

export const getServerSideProps = async ctx => {
  const client = initializeApollo({
    headers: ctx?.req?.headers,
  });

  const layout = 'main';

  try {
    const page = ctx?.query?.page;

    const searchTerm = ctx?.query?.search;

    const {
      data: { singleItems },
    } = await client.query({
      query: SEARCH_PAGINATION_QUERY,
      variables: {
        searchTerm: ctx?.query?.search,
      },
    });

    return addApolloState(client, {
      props: {
        singleItems: singleItems || null,
        searchTerm: searchTerm || null,
        page: page || null,
        layout,
      },
    });
  } catch {
    return {
      props: {},
    };
  }
};
