import dynamic from 'next/dynamic';
import Head from 'next/head';

import gql from 'graphql-tag';

import {
  addApolloState,
  initializeApollo,
} from '../../lib/apollo';

import capitalizeStr from '../../helpers/capitalizeStr';

const Items = dynamic(() =>
  import('../../components/items/items-page/items/Items')
);

export const ITEMS_PAGE_QUERY = gql`
  query ITEMS_PAGE_QUERY($service: String) {
    services(filters: { service: { eqi: $service } }) {
      data {
        id
        attributes {
          service
          metatags {
            ... on ComponentMetatagsMetatags {
              metaTitle
              metaDescription
            }
          }
          items {
            data {
              id
              attributes {
                title
              }
            }
          }
        }
      }
    }
  }
`;

export default function ServicePage(props) {
  // title of the service
  const service =
    props?.services?.data[0]?.attributes?.service;

  const allServiceItems =
    props?.services?.data[0]?.attributes?.items?.data;

  return (
    <>
      <Head>
        <title>
          {props?.services?.data[0]?.attributes?.metatags[0]
            ?.metaTitle &&
            capitalizeStr(
              props?.services?.data[0]?.attributes
                ?.metatags[0]?.metaTitle
            )}{' '}
          - Demo-Ui
        </title>
        <meta
          name='description'
          content={
            props?.services[0]?.data?.attributes
              ?.metatags[0]?.metaDescription
          }
        />
      </Head>
      {service && (
        <Items
          allServiceItems={allServiceItems}
          service={service}
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
    const {
      data: { services },
    } = await client.query({
      query: ITEMS_PAGE_QUERY,
      variables: {
        service: ctx?.query?.service,
      },
    });

    if (services?.data?.length <= 0) {
      return {
        notFound: true,
      };
    }

    return addApolloState(client, {
      props: {
        services: services || null,
      },
    });
  } catch {
    return {
      props: {},
    };
  }
};
