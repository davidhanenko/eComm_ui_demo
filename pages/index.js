import gql from 'graphql-tag';
import {
  addApolloState,
  initializeApollo,
} from '../lib/apollo';

import capitalizeStr from '../helpers/capitalizeStr';

import Main from '../components/main/Main';
import Head from 'next/head';

const SERVICES_QUERY = gql`
  query SERVICES_QUERY {
    services {
      data {
        id
        attributes {
          serviceTitle: service
          items {
            data {
              id
              attributes {
                title
                category: items_categories {
                  data {
                    id
                    attributes {
                      categoryTitle
                      singleItem: single_items {
                        data {
                          id
                          attributes {
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
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

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

export default function MainPage({
  services,
  mainMetaTag,
}) {
  const servicesData = services?.data;
  const metaTags = mainMetaTag?.data;

  return (
    <>
      <Head>
        <title>
          {metaTags?.attributes?.mainMetaTitle &&
            capitalizeStr(
              metaTags?.attributes?.mainMetaTitle
            )}
        </title>
        <meta
          name='description'
          content={
            metaTags?.attributes?.mainMetaDescription &&
            capitalizeStr(
              metaTags?.attributes?.mainMetaDescription
            )
          }
        />
      </Head>
      {services && <Main services={servicesData} />}
    </>
  );
}

export const getServerSideProps = async ctx => {
  const client = initializeApollo({
    headers: ctx?.req?.headers,
  });

  try {
    const layout = 'main';

    const {
      data: { mainMetaTag },
    } = await client.query({ query: TAGS_QUERY });

    const {
      data: { services },
    } = await client.query({ query: SERVICES_QUERY });

    return addApolloState(client, {
      props: {
        services: services || null,
        mainMetaTag: mainMetaTag || null,
        layout,
      },
    });
  } catch {
    return {
      props: {},
    };
  }
};
