import dynamic from 'next/dynamic';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import capitalizeStr from '../helpers/capitalizeStr';

import Main from '../components/main/Main';
import Head from 'next/head';

const TAGS_QUERY = gql`
  query TAGS_QUERY {
    mainMetaTag {
      data {
        id
        attributes {
          mainMetaTitle
          mainMetaDescription
          mainOgLink
        }
      }
    }
  }
`;

const SERVICES_QUERY = gql`
  query SERVICES_QUERY {
    services {
      data {
        id
        attributes {
          serviceTitle: service
        }
      }
    }
  }
`;

export default function MainPage(props) {
  const { data, loading } = useQuery(SERVICES_QUERY);

  const { data: tagsData, loading: tagsLoading } =
    useQuery(TAGS_QUERY);

  const metaTags = tagsData?.mainMetaTag?.data?.attributes;
  const services = data?.services?.data;

  return (
    <>
      <Head>
        <title>
          {metaTags?.attributes?.title &&
            capitalizeStr(metaTags?.attributes?.title)}
        </title>
        <meta
          name='description'
          content={
            metaTags?.attributes?.description &&
            capitalizeStr(metaTags?.attributes?.description)
          }
        />
      </Head>
      <Main services={services} />
    </>
  );
}

export async function getServerSideProps(props) {
  let layout = 'main';

  return {
    props: {
      layout,
    },
  };
}
