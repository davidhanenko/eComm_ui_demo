import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../api/auth/[...nextauth]';
import EditAccount from '../../../../components/auth/account/edit/EditAccount';
import LoaderContainer from '../../../../components/shared/loaders/loader-container/LoaderContainer';

const USER_QUERY = gql`
  query USER_QUERY($id: ID!) {
    usersPermissionsUser(id: $id) {
      data {
        id
        attributes {
          username
          email
          phone
          company
          deliveryAddress: delivery_address
        }
      }
    }
  }
`;

export default function AccountPage(props) {
  const { data, loading, error } = useQuery(USER_QUERY, {
    variables: {
      id: props?.id,
    },
  });

  const user = data?.usersPermissionsUser?.data;

  if (loading) return <LoaderContainer height={'100vh'} />;

  return <EditAccount user={user} id={props?.id} />;
}

export const getServerSideProps = async ctx => {
  const layout = 'main';

  try {
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

    const id = ctx?.query?.id;

    return {
      props: {
        layout,
        id,
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
