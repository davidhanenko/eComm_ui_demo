import Signup from '../../components/auth/signup/Signup';

export default function SignupPage(props) {
  return <Signup />;
}

export async function getStaticProps() {
  const layout = 'main';

  return {
    props: {
      layout,
    },
  };
}
