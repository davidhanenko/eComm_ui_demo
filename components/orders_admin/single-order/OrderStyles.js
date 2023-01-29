import styled from 'styled-components';

const OrderStyles = styled.div`
  margin-top: calc(var(--navHeight) + var(--searchHeight));
  padding: 5rem;

  @media (max-width: 600px) {
    padding: 5rem 2rem;
  }

  hr {
    height: 1px;
    margin: 3rem 0;
    border: none;
    background-color: var(--blue3);
  }

  header {
    p {
      margin: 0;
    }

    h2 {
      font-size: 2.7rem;
    }

    .header-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .top-left {
    }
  }

  footer {
    button {
      text-transform: uppercase;
    }
  }
`;

const OrderItemStyles = styled.section`
  display: flex;
  margin: 2rem 0;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }

  .item-img {
    margin-right: 2rem;
  }
  h4,
  p {
    margin: 0;
  }

  .item-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 800px) {
      flex-direction: column;
      width: 100%;

      .top-line,
      .lower-line {
        width: 100%;
      }
    }
  }

  .top-line {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    margin-bottom: 0.5rem;
    width: 50vw;
  }

  .lower-line {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    width: 50vw;
  }
`;

export { OrderStyles, OrderItemStyles };
