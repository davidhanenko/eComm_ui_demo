import dynamic from 'next/dynamic';
import gql from 'graphql-tag';
import {
  addApolloState,
  initializeApollo,
} from '../../../../lib/apollo';

import { PaginationStateProvider } from '../../../../context/paginationState';
import Pagination from '../../../../components/shared/pagination/Pagination';

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
          categoryTitle: { eqi: $collection }
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

export default function ServiceCollectionPage(props) {
  const service = props?.service;
  const items = props?.items;
  const collection = props?.collection;

  // url for pagination component
  const currentUrl = `/${service}/${items}/${collection}`;

  const itemsCount =
    props?.singleItems?.meta?.pagination?.total;

  // current page
  const page = parseInt(props?.page);

  return (
    <PaginationStateProvider>
      <Pagination
        page={page || 1}
        currentUrl={currentUrl}
        itemsCount={itemsCount}
      />
      <SubCategoryCollection
        items={props?.items}
        collection={props?.collection}
        page={page || 1}
        itemsCount={itemsCount}
      />
    </PaginationStateProvider>
  );
}

export const getServerSideProps = async ctx => {
  const client = initializeApollo({
    headers: ctx?.req?.headers,
  });

  try {
    const service = ctx?.query?.service;
    const items = ctx?.query?.items;
    const collection = ctx?.query?.collection;
    const page = ctx?.query?.page;

    const {
      data: { singleItems },
    } = await client.query({
      query: PAGINATION_QUERY,
      variables: {
        collection: decodeURIComponent(
          ctx?.query?.collection
        ),
      },
    });

    if (singleItems?.meta?.pagination?.total <= 0) {
      return {
        notFound: true,
      };
    }
      return addApolloState(client, {
        props: {
          singleItems: singleItems || null,
          service: service || null,
          items: items || null,
          collection: collection || null,
          page: page || null,
        },
      });
  } catch {
    return {
      props: {},
    };
  }
};
