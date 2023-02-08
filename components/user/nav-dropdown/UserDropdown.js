import Link from 'next/link';
import { UserDropdownStyles } from './UserDropdownStyles';
import {
  getSession,
  signIn,
  signOut,
  useSession,
} from 'next-auth/react';

export default function UserDropdown({ userOpen }) {
  return (
    <UserDropdownStyles userOpen={userOpen}>
      <Link href='/auth/signin'>Sign in</Link>
      <Link href='/user/signup'>Sign up</Link>
      <Link href='/user/:id'>Account</Link>
      <button onClick={() => signOut()}>log out</button>
    </UserDropdownStyles>
  );
}
