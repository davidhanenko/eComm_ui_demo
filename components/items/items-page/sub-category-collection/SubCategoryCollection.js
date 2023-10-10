import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import Head from 'next/head';

import { usePagination } from '../../../../context/paginationState';
import capitalizeStr from '../../../../helpers/capitalizeStr';

import { SubCategoryCollectionStyles } from './SubCategoryCollectionStyles';
import CollectionItem from './collection-item/CollectionItem';
import LoaderContainer from '../../../shared/loaders/loader-container/LoaderContainer';

const ITEMS_SUBCATEGORY_COLLECTION_QUERY = gql`
  query ITEMS_SUBCATEGORY_COLLECTION_QUERY(
    $collection: String!
    $limit: Int
    $start: Int = 0
    $sort: [String]
  ) {
    singleItems(
      filters: {
        items_categories: {
          categoryTitle: { eqi: $collection }
        }
      }
      pagination: { start: $start, limit: $limit }
      sort: $sort
    ) {
      data {
        id
        attributes {
          itemTitle
          price
          description
          isAvailable: is_available
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
          itemsCategories: items_categories(
            filters: { categoryTitle: { eqi: $collection } }
          ) {
            data {
              id
              attributes {
                categoryTitle
              }
            }
          }
        }
      }
    }
  }
`;

export default function SubCategoryCollection({
  items,
  collection,
  page,
  itemsCount,
}) {
  const { itemsPerPage, sortItemsBy } = usePagination();

  const { data, error, loading } = useQuery(
    ITEMS_SUBCATEGORY_COLLECTION_QUERY,
    {
      variables: {
        collection: collection,
        limit: itemsPerPage,
        start: page * itemsPerPage - itemsPerPage,
        sort: sortItemsBy,
      },
    }
  );

  const collectionItems = data?.singleItems?.data;

  const arr = new Array(itemsCount).fill(1);

  if (loading) {
    return (
      <SubCategoryCollectionStyles>
        <div className='collection-container'>
          {arr?.map((item, i) => (
            <LoaderContainer key={i} height={'250px'} />
          ))}
        </div>
      </SubCategoryCollectionStyles>
    );
  }
  return (
    <SubCategoryCollectionStyles>
      <Head>
        <title>
          {collectionItems?.length > 0 &&
            capitalizeStr(
              collectionItems[0]?.attributes
                ?.itemsCategories?.data[0]?.attributes
                ?.categoryTitle
            )}{' '}
          - Demo-UI
        </title>
      </Head>
      <h3 className='collection-title'>
        {collectionItems &&
          collectionItems[0]?.attributes?.itemsCategories
            ?.data[0]?.attributes?.categoryTitle}
      </h3>
      <p className='items-count'>{itemsCount} item(s)</p>

      <hr className='title-underline' />

      <div className='collection-container'>
        {collectionItems?.map(item => (
          <CollectionItem
            key={item?.id}
            item={item?.attributes}
            items={items}
            collection={collection}
          />
        ))}
        {collectionItems &&
          collectionItems?.length === 0 && (
            <div className='collection-container'>
              <div className='no-items'>
                <p>Nothing here yet...</p>
              </div>
            </div>
          )}
      </div>
    </SubCategoryCollectionStyles>
  );
}
