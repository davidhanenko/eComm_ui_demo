import styled from 'styled-components';

const PlaceOrderStyles = styled.div`
  margin-top: calc(
    var(--navHeight) + var(--searchHeight) + 5rem
  );
  padding: 0 5rem;
  p {
    margin: 0;
  }

  header {
    margin-bottom: 5rem;
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .items-section {
      padding-right: 3rem;
    }
    .charge-section {
      padding: 0 0 3rem 3rem;
      border-left: 1px solid var(--blue3);
    }

    @media (max-width: 850px) {
      display: flex;
      flex-direction: column;

      .charge-section {
        border: none;
      }
    }
  }
`;

export { PlaceOrderStyles };
