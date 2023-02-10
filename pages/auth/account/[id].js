import gql from 'graphql-tag';
import { initializeApollo } from '../../../lib/apollo';
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
  console.log(props);
  return (
    <Account
      user={props?.user?.data?.usersPermissionsUser}
    />
  );
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

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  try {
    const id = ctx?.query?.id;
    const data = await client.query({
      query: USER_QUERY,
      variables: {
        id,
      },
    });

    return {
      props: {
        user: data || null,
        layout,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
      props: {},
    };
  }
};
