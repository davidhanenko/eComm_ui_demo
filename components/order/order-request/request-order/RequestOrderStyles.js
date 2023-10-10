import styled from 'styled-components';

const RequestOrderStyles = styled.div`
  margin-top: calc(
    var(--navHeight) + var(--searchHeight) + 5rem
  );
  padding: 2rem 5rem 8rem 5rem;

  p {
    margin: 0;
  }

  header {
    margin-bottom: 5rem;
    h1 {
      color: var(--green3);
    }
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .items-section {
      padding-right: 3rem;
    }
    .charge-section {
      padding: 0 0 3rem 3rem;
      border-left: 1px solid var(--green2);
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
  }
`;

export { RequestOrderStyles };
