import dynamic from 'next/dynamic';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    services(filters: { service: { eq: $service } }) {
      data {
        id
        attributes {
          service
          items(
            filters: { title: { eq: $itemsCategory } }
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
              }
            }
          }
        }
      }
    }
  }
`;

export default function ServiceCategoryPage({ query }) {
  const { data, error, loading } = useQuery(
    ALL_ITEMS_QUERY,
    {
      variables: {
        service: query.service,
        itemsCategory: decodeURIComponent(query.items),
      },
    }
  );

  const items =
    data?.services?.data[0]?.attributes?.items?.data[0];

  const service = query?.service;

  if (error) {
    toast.error(
      'An unexpected error while loading the page, please try again'
    );
  }

  return (
    <ItemsByCategory
      items={items}
      service={service}
      loading={loading}
    />
  );
}
