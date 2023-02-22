import { getServerSession } from 'next-auth/next';
import { ChangePassword } from '../../../components/auth/password/change-password/ChangePassword';

import { authOptions } from '../../api/auth/[...nextauth]';

export default function ChangePswdPage(props) {
  return <ChangePassword />;
}

export const getServerSideProps = async ctx => {
  let layout = 'main';

  const session = await getServerSession(
    ctx.req,
    ctx.res,
    authOptions
  );

  try {
    if (!session) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }


    return {
      props: {
        layout,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
};
