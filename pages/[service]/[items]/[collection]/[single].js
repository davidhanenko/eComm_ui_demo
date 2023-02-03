import Head from 'next/head';
import gql from 'graphql-tag';
import {
  addApolloState,
  initializeApollo,
} from '../../../../lib/apollo';

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

export default function SingleItemPage(props) {
  const singleItem = props?.singleItems?.data[0];

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
          link={props?.resolvedUrl}
        />
      )}
    </>
  );
}

export const getServerSideProps = async ctx => {
  const client = initializeApollo({
    headers: ctx?.req?.headers,
  });

  try {
    const resolvedUrl = ctx?.resolvedUrl;

    const {
      data: { singleItems },
    } = await client.query({
      query: SINGLE_ITEM_QUERY,
      variables: {
        item: decodeURIComponent(ctx?.query?.single),
      },
    });

    return addApolloState(client, {
      props: {
        singleItems: singleItems || null,
        resolvedUrl: resolvedUrl || null,
      },
    });
  } catch {
    return {
      props: {},
    };
  }
};
