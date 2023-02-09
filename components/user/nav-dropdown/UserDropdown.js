import { useRouter } from 'next/router';
import { UserDropdownStyles } from './UserDropdownStyles';
import {
  signIn,
  signOut,
  useSession,
} from 'next-auth/react';

export default function UserDropdown({ userOpen }) {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <UserDropdownStyles userOpen={userOpen}>
      {session ? (
        <button
          type='button'
          onClick={() => router.push(`/user/${session.id}`)}
        >
          Account
        </button>
      ) : (
        <button
          type='button'
          onClick={() => router.push('/user/signup')}
        >
          Sign up
        </button>
      )}
      <hr />
      {session ? (
        <button type='button' onClick={() => signOut()}>
          Log out
        </button>
      ) : (
        <button type='button' onClick={() => signIn()}>
          Sign in
        </button>
      )}
    </UserDropdownStyles>
  );
}
