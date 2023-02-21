
import { getServerSession } from 'next-auth/next';
import { ForgotPswdReq } from '../../../components/auth/password/forgot-pswd/ForgotPswdReq';
import { authOptions } from '../../api/auth/[...nextauth]';

export default function RequestPswdResetPage(props) {
  return <ForgotPswdReq />;
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
