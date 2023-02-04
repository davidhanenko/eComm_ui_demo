import Link from 'next/link';
import { UserDropdownStyles } from './UserDropdownStyles';

export default function UserDropdown({ userOpen }) {
  return (
    <UserDropdownStyles userOpen={userOpen}>
      <Link href='/user/sign-in'>Sign in</Link>
      <Link href='/user/sign-up'>Sign up</Link>
      <Link href='/user/:id'>Account</Link>
    </UserDropdownStyles>
  );
}
