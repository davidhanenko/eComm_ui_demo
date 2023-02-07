import {
  getSession,
  signIn,
  signOut,
} from 'next-auth/react';
import Signin from '../../components/user/signin/Signin';

export default function SigninPage(props) {
  return <Signin />;
}

export async function getServerSideProps({ req }) {
  const layout = 'main';
  
  const session = await getSession({ req });


  return {
    props: {
      layout,
      session,
    },
  };
}
