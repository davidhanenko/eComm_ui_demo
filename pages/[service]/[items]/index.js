import dynamic from 'next/dynamic';

import gql from 'graphql-tag';
import {
  addApolloState,
  initializeApollo,
} from '../../../lib/apollo';

const ItemsByCategory = dynamic(() =>
  import(
    '../../../components/items/items-page/items-by-category/ItemsByCategory'
  )
);

export const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY(
    $service: String!
    $itemsCategory: String!
  ) {
    items(
      filters: {
        title: { eqi: $itemsCategory }
        services: { service: { eqi: $service } }
      }
    ) {
      data {
        id
        attributes {
          title
          category: items_categories {
            data {
              id
              attributes {
                categoryTitle
                singleItems: single_items {
                  data {
                    id
                    attributes {
                      itemTitle
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
          services {
            data {
              id
              attributes {
                service
              }
            }
          }
        }
      }
    }
  }
`;

export default function ServiceCategoryPage(props) {
  const items = props?.items?.data[0];

  const service =
    props?.items?.data[0]?.attributes?.services?.data[0]
      ?.attributes?.service;

  return (
    <ItemsByCategory items={items} service={service} />
  );
}

export const getServerSideProps = async ctx => {
  const client = initializeApollo({
    headers: ctx?.req?.headers,
  });

  try {
    const {
      data: { items },
    } = await client.query({
      query: ALL_ITEMS_QUERY,
      variables: {
        service: ctx?.query?.service,
        itemsCategory: decodeURIComponent(
          ctx?.query?.items
        ),
      },
    });

    if (items?.data?.length <= 0) {
      return {
        notFound: true,
      };
    }

    return addApolloState(client, {
      props: {
        items: items || null,
      },
    });
  } catch {
    return {
      props: {},
    };
  }
};
