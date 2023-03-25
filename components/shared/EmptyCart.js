import Image from 'next/image';
import styled from 'styled-components';
import emptyCartImg from '../../public/img/empty-cart-2.png';

const EmptyCartStyles = styled.div`
  text-align: center;
  padding-top: 5rem;

  p {
    font-size: 1.8rem;
    font-weight: 300;
    margin-top: 5rem;
    color: var(--blue3);
  }
`;

export default function EmptyCart() {
  return (
    <EmptyCartStyles>
      <Image src={emptyCartImg} width={200} height={200} />
      <p>Cart is empty</p>
    </EmptyCartStyles>
  );
}
