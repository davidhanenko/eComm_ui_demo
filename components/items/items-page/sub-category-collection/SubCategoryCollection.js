import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import Head from 'next/head';

import { usePagination } from '../../../../context/paginationState';
import capitalizeStr from '../../../../helpers/capitalizeStr';


import { SubCategoryCollectionStyles } from './SubCategoryCollectionStyles';
import CollectionItem from './collection-item/CollectionItem';

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
          categoryTitle: { eq: $collection }
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
          available
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
          itemsCategories: items_categories(
            filters: { categoryTitle: { eq: $collection } }
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
          - A2Z
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
        {collectionItems?.length > 0 ? (
          collectionItems?.map(item => (
            <CollectionItem
              key={item?.id}
              item={item?.attributes}
              items={items}
              collection={collection}
            />
          ))
        ) : (
          <div className='no-items'>
            <p>Nothing here yet...</p>
          </div>
        )}
      </div>
    </SubCategoryCollectionStyles>
  );
}
