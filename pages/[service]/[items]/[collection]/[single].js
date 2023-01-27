import Head from 'next/head';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import capitalizeStr from '../../../../helpers/capitalizeStr';

import SingleItem from '../../../../components/items/items-page/single-item/SingleItem';

export const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($item: String!) {
    singleItems(filters: { itemTitle: { eqi: $item } }) {
      data {
        id
        attributes {
          itemTitle
          price
          size
          description
          available
          minPrice
          callForPrice
          storeLink
          sizePrice {
            ... on ComponentItemDetailsItemDetails {
              id
              size
              price
              type
              value: type_value
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

export default function SingleItemPage({ query }) {
  const { data, error, loading } = useQuery(
    SINGLE_ITEM_QUERY,
    {
      variables: {
        item: decodeURIComponent(query?.single),
      },
    }
  );

  const linkToSingleItem = `${query?.service}/${query?.items}/${query?.collection}/${query?.single}`;

  if (error) {
    toast.error(
      'An unexpected error while loading the page, please try again'
    );
  }

  const singleItem = data?.singleItems?.data[0];

  return (
    <>
      <Head>
        <title>
          {singleItem &&
            capitalizeStr(
              singleItem?.attributes?.itemTitle
            )}{' '}
          - A2Z
        </title>
        <meta
          name='description'
          content={
            singleItem &&
            singleItem?.attributes?.description
          }
          key='single item'
        ></meta>
      </Head>
      {singleItem && (
        <SingleItem
          singleItem={singleItem}
          loading={loading}
          link={linkToSingleItem}
        />
      )}
    </>
  );
}
