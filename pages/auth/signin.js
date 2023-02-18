import Signin from '../../components/auth/signin/Signin';
import { getProviders } from 'next-auth/react';

export default function SignupPage(props) {
  return <Signin providers={props?.providers} />;
}

export async function getStaticProps() {
  const layout = 'main';

  const providers = await getProviders();

  return {
    props: {
      providers,
      layout,
    },
  };
}
