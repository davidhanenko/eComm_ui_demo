import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { RequestOrderComponentStyles } from './RequestOrderComponentStyles';

export default function RequestOrderComponent() {
  return (
    <RequestOrderComponentStyles>
      <p className='sign-in-first'>
        <span onClick={() => signIn()}>Sing in</span> first
        to place order
      </p>

      <hr />
      <p>
        To place the order you have to be signed in
        confirmed customer or you can send us an order
        request, we will review it and update you about
        further steps
      </p>
      <div className='order-options'>
        <p>Available options:</p>
        <Link href={'/auth/signup'}>Create account</Link>
        <Link href={'/request-order'}>Request order</Link>
      </div>
    </RequestOrderComponentStyles>
  );
}
