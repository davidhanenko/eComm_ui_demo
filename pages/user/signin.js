import Signin from '../../components/user/signin/Signin';

export default function SigninPage(props) {
  return <Signin />;
}

export async function getStaticProps() {
  const layout = 'main';

  return {
    props: {
      layout,
    },
  };
}
