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

    .order-title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 2.7rem;
      }

      #status {
        height: 4rem;

        option {
          text-transform: uppercase;
        }
      }
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
      padding: 1rem;
      margin-top: 5rem;
      border: 1px solid var(--blue3);
      cursor: pointer;

      &:hover {
        background-color: var(--blue5);
        outline: none;
      }
    }

    @media print {
      display: none;
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
