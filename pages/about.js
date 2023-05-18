import gql from 'graphql-tag';
import {
  addApolloState,
  initializeApollo,
} from '../lib/apollo';
import { getPlaiceholder } from 'plaiceholder';

import About from '../components/about/About';

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

export default function AboutPage(props) {
  const aboutData = props?.aboutData?.attributes;
  const placeholder = props?.base64;
  const loading = props?.loading;

  return (
    <About
      aboutData={aboutData}
      placeholder={placeholder}
      loading={loading}
    />
  );
}

export const getServerSideProps = async ctx => {
  const client = initializeApollo({
    headers: ctx?.req?.headers,
  });

  const layout = 'main';

  try {
    const { data, loading } = await client.query({
      query: ABOUT_QUERY,
    });

    const { base64 } = await getPlaiceholder(
      data?.aboutUs?.data?.attributes?.image?.data
        ?.attributes?.url
    );

    return addApolloState(client, {
      props: {
        aboutData: data?.aboutUs?.data || null,
        base64: base64 || null,
        loading,
        layout,
      },
    });
  } catch {
    return {
      props: {},
    };
  }
};
