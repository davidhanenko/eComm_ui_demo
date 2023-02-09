import { getProviders } from 'next-auth/react';
import Signin from '../../components/user/signin/Signin';

export default function SigninPage(props) {
  return <Signin providers={props.providers} />;
}

export async function getServerSideProps({ req }) {
  const layout = 'main';

  const providers = await getProviders();

  return {
    props: {
      layout,
      providers,
    },
  };
}
