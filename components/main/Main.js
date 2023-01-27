import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import BannerSlider from '../shared/sliders/banner-slider/BannerSlider';
import ItemsMainPage from '../items/main-page/ItemsMainPage';
import { MainStyles } from './MainStyles';
import LoaderContainer from '../shared/loaders/loader-container/LoaderContainer';

const MAIN_QUERY = gql`
  query MAIN_QUERY {
    mainPageSlides {
      data {
        id
        attributes {
          slogan
          description
          service
          bgImage {
            data {
              id
              attributes {
                url
              }
            }
          }
          image1 {
            data {
              id
              attributes {
                url
              }
            }
          }
          image2 {
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

export default function Main({ services }) {
  const { data, loading } = useQuery(MAIN_QUERY);

  const SLIDE_COUNT = data?.mainPageSlides?.data?.length;

  const slides = Array.from(Array(SLIDE_COUNT).keys());

  // func from Embla Carousel docs
  const slidesByIndex = index =>
    data?.mainPageSlides?.data[
      index % data?.mainPageSlides?.data?.length
    ];

  return (
    <MainStyles>
      {loading ? (
        <LoaderContainer height={'100vh'} />
      ) : (
        <BannerSlider
          slides={slides}
          slidesByIndex={slidesByIndex}
        />
      )}
      <div className='items'>
        {services ? (
          services?.map(service => {
            return (
              <ItemsMainPage
                key={service?.id}
                service={service?.attributes?.serviceTitle}
              />
            );
          })
        ) : (
          <div style={{ height: '100vh' }}></div>
        )}
      </div>
    </MainStyles>
  );
}
