import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import LoaderContainer from '../shared/loaders/loader-container/LoaderContainer';
import { AboutStyles } from './AboutStyles';
import Image from 'next/image';

const ABOUT_QUERY = gql`
  query ABOUT_QUERY {
    aboutUs {
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

          header {
            header
            paragraph
          }

          section {
            ... on ComponentParagraphText {
              id
              header
              paragraph
            }
          }
        }
      }
    }
  }
`;

export default function About() {
  const { data, loading } = useQuery(ABOUT_QUERY);

  const aboutUs = data?.aboutUs?.data?.attributes;

  if (loading) {
    return <LoaderContainer height={'80vh'} />;
  }

  return (
    <AboutStyles>
      <h1>About Our Company</h1>
      <hr />
      <h3>{aboutUs?.header[0]?.header}</h3>
      <p>{aboutUs?.header[0]?.paragraph}</p>

      <div className='about-image'>
        <Image
          src={aboutUs?.image?.data?.attributes?.url}
          height={300}
          width={800}
        />
      </div>
      {aboutUs?.section?.map(s => (
        <>
          <h3>{s?.header}</h3>
          <p>{s?.paragraph}</p>
        </>
      ))}
    </AboutStyles>
  );
}
