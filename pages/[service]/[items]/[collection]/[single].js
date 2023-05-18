import Head from 'next/head';
import gql from 'graphql-tag';
import {
  addApolloState,
  initializeApollo,
} from '../../../../lib/apollo';
import { getPlaiceholder } from 'plaiceholder';

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
          isAvailable: is_available
          inStore: pickup_in_store
          isDelivery: available_for_delivery
          minPrice
          callForPrice
          storeLink
          quantity
          sizePrice {
            ... on ComponentItemDetailsItemDetails {
              id
              size
              price
              type
              value: type_value
              quantity
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
          - Demo-UI
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
          placeholder={props?.base64}
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

    if (singleItems?.data?.length <= 0) {
      return {
        notFound: true,
      };
    }

    const { base64 } = await getPlaiceholder(
      singleItems?.data[0]?.attributes?.image?.data[0]
        ?.attributes?.url
    );

    return addApolloState(client, {
      props: {
        singleItems: singleItems || null,
        resolvedUrl: resolvedUrl || null,
        base64: base64 || null,
      },
    });
  } catch {
    return {
      props: {},
    };
  }
};
