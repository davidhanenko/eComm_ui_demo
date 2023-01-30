import styled from 'styled-components';

const PlaceOrderStyles = styled.div`
  margin-top: calc(
    var(--navHeight) + var(--searchHeight) + 5rem
  );
  padding: 0 5rem;

  display: grid;
  grid-template-columns: 3fr 1fr;

  .charge-section {
    margin-top: 5rem;
    padding-left: 3rem;
    border-left: 1px solid var(--blue3);
    p {
      margin: 0;
    }
    button {
      padding: 1rem;
      margin-top: 5rem;
    }
  }
`;

export { PlaceOrderStyles };
