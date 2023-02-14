import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]';

import Account from '../../../components/auth/account/Account';

export default function AccountPage(props) {
  return <Account id={props.id} />;
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
          destination: '/api/auth/signin',
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
