import Link from 'next/link';
import useUser from '../../auth/User';
import { OrderPlacedStyles } from './OrderPlacedStyles';

export default function OrderPlaced() {
  const me = useUser();

  return (
    <OrderPlacedStyles>
      <div className='container'>
        <h2>
          Thank You,&nbsp;
          <span className='user-name'>{me?.username}</span>
        </h2>
        <section>
          <p>Your order has been placed</p>
          <p>
            We will contact you as soon as our
            representative reviewed it
          </p>
        </section>
        <section className='links'>
          <Link href={`/`}>Go back to main page</Link>
          <Link href={`/auth/account/${me?.id}`}>
            Go to my account
          </Link>
        </section>
      </div>
    </OrderPlacedStyles>
  );
}
