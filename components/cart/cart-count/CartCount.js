import { useState, useEffect } from 'react';
import { useCart } from '../../../context/cartState';

import { CartCountStyles } from './CartCountStyles';

export default function CartCount() {
  const { cart, count, setCount } = useCart();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setCount(
      cart.reduce((count, el) => count + el.quantity, 0)
    );
  }, [cart]);

  useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 400);
  }, [count]);

  return cart?.length > 0 ? (
    <CartCountStyles animate={animate}>
      <div key={count}>{count}</div>
    </CartCountStyles>
  ) : null;
}
