import styled from 'styled-components';

const PlaceOrderStyles = styled.div`
  margin-top: calc(
    var(--navHeight) + var(--searchHeight) + 5rem
  );
  padding: 2rem 5rem 8rem 5rem;

  p {
    margin: 0;
  }

  header {
    margin-bottom: 5rem;
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 3rem;
    background-color: var(--white);
    box-shadow: 0 0 2px 1px var(--white);

    .items-section {
      padding-right: 3rem;
    }
    .charge-section {
      padding: 0 0 3rem 3rem;
      border-left: 1px solid var(--blue3);
    }
  }
  @media (max-width: 850px) {
    main {
      display: flex;
      flex-direction: column;

      .items-section {
        padding: 0 0 3rem 0;
      }
      .charge-section {
        border: none;
        padding: 0 1rem;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 2rem 1.5rem;

    main {
      padding: 1rem;
    }
  }
`;

export { PlaceOrderStyles };
