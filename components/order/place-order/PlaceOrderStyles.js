import styled from 'styled-components';

const PlaceOrderStyles = styled.div`
  margin-top: calc(
    var(--navHeight) + var(--searchHeight) + 5rem
  );
  padding: 0 5rem;

  display: grid;
  grid-template-columns: 3fr 2fr;

  .charge-section {
    padding: 6rem 0 0 3rem;
    border-left: 1px solid var(--blue3);
    min-height: 60vh;
    p {
      margin: 0;
    }
    button {
      padding: 1rem;
      margin-top: 10rem;
      background-color: var(--blue3);
      color: var(--white);
      border-radius: 2rem;
      border: none;
      text-transform: uppercase;
      transition: all 0.25s;

      @media (hover: hover) {
        &:hover {
          cursor: pointer;
          background-color: var(--blue2);
        }
      }
    }
  }

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;

    .charge-section {
      border: none;
    }
  }
`;

export { PlaceOrderStyles };
