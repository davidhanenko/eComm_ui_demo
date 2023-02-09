import { useRouter } from 'next/router';
import { UserDropdownStyles } from './UserDropdownStyles';
import {
  signIn,
  signOut,
  useSession,
} from 'next-auth/react';
import { useEffect, useRef } from 'react';

export default function UserDropdown({
  userOpen,
  setUserOpen,
  userOpenBtnRef,
}) {
  const router = useRouter();
  const { data: session } = useSession();

  const dropdownRef = useRef(null);

  // close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        userOpen &&
        !dropdownRef.current.contains(event.target) &&
        !userOpenBtnRef.contains(event.target)
      ) {
        setUserOpen(false);
      }
    };
    document.addEventListener(
      'mousedown',
      handleClickOutside,
      {
        passive: true,
      }
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, [userOpen]);

  return (
    <UserDropdownStyles
      userOpen={userOpen}
      ref={dropdownRef}
    >
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
