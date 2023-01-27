import dynamic from 'next/dynamic';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PaginationStateProvider } from '../../../../context/paginationState';
import Pagination from '../../../../components/shared/pagination/Pagination';
import LoaderContainer from '../../../../components/shared/loaders/loader-container/LoaderContainer';

const SubCategoryCollection = dynamic(() =>
  import(
    '../../../../components/items/items-page/sub-category-collection/SubCategoryCollection'
  )
);

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY($collection: String!) {
    singleItems(
      filters: {
        items_categories: {
          categoryTitle: { eq: $collection }
        }
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

export default function ServiceCollectionPage({ query }) {
  const service = query.service;
  const items = query.items;
  const collection = query.collection;

  const { data, error, loading } = useQuery(
    PAGINATION_QUERY,
    {
      variables: {
        collection: decodeURIComponent(collection),
      },
    }
  );

  const itemsCount =
    data?.singleItems?.meta?.pagination?.total;

  // url for pagination component
  const currentUrl = `${service}/${items}/${collection}`;

  // current page
  const page = parseInt(query.page);

  if (error) {
    toast.error(
      'An unexpected error while loading the page, please try to refresh'
    );
  }

  return (
    <PaginationStateProvider>
      {!loading ? (
        <Pagination
          page={page || 1}
          currentUrl={currentUrl}
          itemsCount={itemsCount}
        />
      ) : (
        <LoaderContainer height={'75vh'} />
      )}
      <SubCategoryCollection
        service={service}
        items={items}
        collection={collection}
        page={page || 1}
        itemsCount={itemsCount}
      />
    </PaginationStateProvider>
  );
}
