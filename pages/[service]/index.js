import dynamic from 'next/dynamic';
import Head from 'next/head';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

export default function ServicePage({ query }) {
  // name of the service
  const service = query?.service;


  const { data, error, loading } = useQuery(
    ITEMS_PAGE_QUERY,
    {
      variables: {
        service: service,
      },
    }
  );

  const allServiceItems =
    data?.services?.data[0]?.attributes?.items?.data;

  if (error) {
    toast.error(
      'An unexpected error while loading the page, please try again'
    );
  }

  return (
    <>
      <Head>
        <title>
          {data?.services?.data[0]?.attributes?.metatags[0]
            ?.metaTitle &&
            capitalizeStr(
              data?.services?.data[0]?.attributes
                ?.metatags[0]?.metaTitle
            )}{' '}
          - A2Z
        </title>
        <meta
          name='description'
          content={
            data?.services[0]?.data?.attributes?.metatags[0]
              ?.metaDescription
          }
        />
      </Head>
      {
        <Items
          allServiceItems={allServiceItems}
          service={service}
          loading={loading}
        />
      }
    </>
  );
}
