import styled from 'styled-components';

const AddToCartStyles = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 3rem;

  button {
    cursor: pointer;
    padding: 0.75rem 1.5rem;
    text-transform: uppercase;
    background: var(--green2);
    color: var(--white);
    border: none;
    border-radius: 2rem;
    outline: none;
    display: flex;
    align-items: center;
    transition: all 0.2s;

    user-select: none;

    .cart-icon {
      font-size: 2rem;
      margin-left: 0.5rem;
    }

    /* @media (hover: hover) { */
      &:hover {
        background: var(--yellow);
      }
    /* } */

    @media (max-width: 850px) {
      margin-top: 3rem;
    }
  }
`;

export { AddToCartStyles };
