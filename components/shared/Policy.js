import Image from 'next/image';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import LoaderContainer from '../../components/shared/loaders/loader-container/LoaderContainer';

export const POLICY_QUERY = gql`
  query POLICY_QUERY($page: String!) {
    infoPages(filters: { page: { eqi: $page } }) {
      data {
        attributes {
          title
          section {
            ... on ComponentParagraphText {
              header
              paragraph
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
        }
      }
    }
  }
`;

const ReturnPolicyPageStyles = styled.main`
  margin: 20rem auto;
  min-height: calc(100vh - var(--navHeight));
  max-width: var(--midWidth);
  padding: 0 10rem;

  header {
    width: 100%;
    display: flex;

    justify-content: space-between;

    h1 {
      margin: 0;
      text-transform: capitalize;
      color: var(--green4);
    }
  }

  hr {
    background-color: var(--green);
  }

  section {
    margin: 0.5rem;
    h5 {
      font-size: 1.6rem;
      margin: 3rem 0 1rem 0;
      color: var(--gray);
    }

    p {
      margin: 0;
    }
  }

  @media (max-width: 700px) {
    padding: 0 2rem;
  }
`;

export default function Policy({ page }) {

  const { data, loading } = useQuery(POLICY_QUERY, {
    variables: {
      page: page,
    },
  });

  const sections =
    data?.infoPages?.data[0]?.attributes?.section;

  const pageTitle =
    data?.infoPages?.data[0]?.attributes?.title;

  const imageUrl =
    data?.infoPages?.data[0]?.attributes?.image1?.data
      ?.attributes?.url;

  console.log(data);

  if (loading) {
    return <LoaderContainer height={'100vh'} />;
  }

  return (
    <ReturnPolicyPageStyles>
      <header>
        <h1>{pageTitle}</h1>
        <Image src={imageUrl} width={150} height={150} />
      </header>

      <hr />

      {sections?.map(s => (
        <section>
          <h5>{s?.header}</h5>
          <ReactMarkdown>{s?.paragraph}</ReactMarkdown>
        </section>
      ))}
    </ReturnPolicyPageStyles>
  );
}
