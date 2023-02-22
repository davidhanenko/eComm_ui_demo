import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../api/auth/[...nextauth]';
import EditAccount from '../../../../components/auth/account/edit/EditAccount';

export default function AccountPage(props) {
  return <EditAccount />;
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
