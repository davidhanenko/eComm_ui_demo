import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { UserDropdownStyles } from './UserDropdownStyles';
import {
  signIn,
  signOut,
  useSession,
} from 'next-auth/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMessage } from '../../../context/messageState';

export default function UserDropdown({
  userOpen,
  setUserOpen,
  userOpenBtnRef,
}) {
  const router = useRouter();
  const { data: session } = useSession();
  const { message, setMessage } = useMessage();

  const dropdownRef = useRef(null);

  const handleAccountClick = () => {
    setUserOpen(false);
    router.push(`/auth/account/${session?.id}`);
  };

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

  useEffect(() => {
    if (message) {
      toast.success(`${message}`, {
        position: 'top-right',
        autoClose: 5000,
      });
      setMessage(null);
    }
  }, [message]);

  return (
    <UserDropdownStyles
      userOpen={userOpen}
      ref={dropdownRef}
    >
      {session ? (
        <>
          <button
            type='button'
            onClick={handleAccountClick}
          >
            Account
          </button>
          <p className='user-title-dropdown'>
            {session?.user?.name}
          </p>
        </>
      ) : (
        <button
          type='button'
          onClick={() => router.push('/auth/signup')}
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
