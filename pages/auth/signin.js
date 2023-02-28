import Signin from '../../components/auth/signin/Signin';
import { getProviders } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]';

export default function SignupPage(props) {
  return <Signin providers={props?.providers} />;
}

export const getServerSideProps = async ctx => {
  let layout = 'main';
  const providers = await getProviders();

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
        providers,
        layout,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
};
