import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import ItemsSlider from '../../shared/sliders/items-slider/ItemsSlider';
import { ItemsMainPageStyles } from './ItemsMainPageStyles';

import LoaderContainer from '../../shared/loaders/loader-container/LoaderContainer';

const ITEMS_MAIN_PAGE_QUERY = gql`
  query ITEMS_MAIN_PAGE_QUERY($service: String) {
    services(filters: { service: { eqi: $service } }) {
      data {
        id
        attributes {
          items {
            data {
              id
              attributes {
                title
                category: items_categories {
                  data {
                    id
                    attributes {
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

export default function ItemsMainPage({ service }) {
  const { data, loading } = useQuery(
    ITEMS_MAIN_PAGE_QUERY,
    {
      variables: {
        service: service,
      },
    }
  );

  const SLIDE_COUNT =
    data?.services?.data[0]?.attributes?.items?.data
      ?.length;

  const slides = Array.from(Array(SLIDE_COUNT).keys());
  // func from Embla Carousel docs
  const itemsByIndex = index =>
    data?.services?.data[0]?.attributes?.items?.data[
      index %
        data?.services?.data[0]?.attributes?.items?.data
          ?.length
    ];

  return (
    <>
      <ItemsMainPageStyles>
        {service && <h2>{service}</h2>}
        {loading ? (
          <LoaderContainer height='40vh' />
        ) : (
          <ItemsSlider
            slides={slides}
            itemsByIndex={itemsByIndex}
            service={service}
            loading={loading}
          />
        )}
      </ItemsMainPageStyles>
    </>
  );
}
