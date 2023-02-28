import { getServerSession } from 'next-auth/next';
import { ResetPassword } from '../../../components/auth/password/reset-password/ResetPassword';

import { authOptions } from '../../api/auth/[...nextauth]';

export default function ResetPswdPage(props) {
  return <ResetPassword />;
}

export const getServerSideProps = async ctx => {
  let layout = 'main';

  const session = await getServerSession(
    ctx.req,
    ctx.res,
    authOptions
  );

  try {
    if (session) {
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
