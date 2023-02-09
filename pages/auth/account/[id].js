import gql from 'graphql-tag';
import {
  addApolloState,
  initializeApollo,
} from '../../../lib/apollo';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]';

import Account from '../../../components/auth/account/Account';

const USER_QUERY = gql`
  query USER_QUERY($id: ID!) {
    usersPermissionsUser(id: $id) {
      data {
        id
        attributes {
          username
          email
        }
      }
    }
  }
`;

export default function AccountPage(props) {
  return <Account />;
}

export const getServerSideProps = async ctx => {
  const layout = 'main';
  const client = initializeApollo({
    headers: ctx?.req?.headers,
  });

  const session = await getServerSession(
    ctx.req,
    ctx.res,
    authOptions
  );

  const id = ctx?.query?.id;

  try {
    if (session) {
      const {
        data: { user },
      } = await client.query({
        query: USER_QUERY,
        variables: {
          id,
        },
      });

      return addApolloState(client, {
        props: {
          user: user || null,
          layout,
        },
      });
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
      props: {},
    };
  }

  return {
    props: {
      layout,
    },
  };
};
