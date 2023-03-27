import styled from 'styled-components';

const OrderStyles = styled.div`
  margin-top: 10rem;
  padding: 5rem;

  background-color: var(--white);
  box-shadow: var(--bs);

  @media (max-width: 600px) {
    padding: 5rem 2rem;
  }

  hr {
    margin: 3rem 0;
    background-color: var(--green);
  }

  header {
    p,
    h4 {
      margin: 0;
    }

    .order-title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 2.7rem;
      }

      .order-status {
        padding: 0.5rem 1rem;
        color: var(--white);
        margin: 1rem 0;
        text-transform: uppercase;
      }

      .pending {
        background-color: #ffde36;
      }
      .fulfilled {
        background-color: var(--green);
      }
      .in-progress {
        background-color: var(--blue3);
      }
      .rejected {
        background-color: var(--red);
      }
    }

    span {
      margin: 0;
      font-size: 1.3rem;

      &:nth-of-type(3) {
        margin: 0 0.3rem;
      }
    }

    .header-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .top-right {
        background: var(--offWhite);
        box-shadow: var(--bs3);
        padding: 1rem;
        h4 {
          margin-bottom: 1rem;
        }
      }

      @media (max-width: 600px) {
        display: block;

        .top-right {
          margin-top: 3rem;
        }
      }
    }

    @media (max-width: 600px) {
      .order-title {
        flex-direction: column;
      }
    }
  }

  .order-items {
    margin-top: 5rem;

    h3 {
      text-align: center;
    }
  }

  footer {
    @media print {
      display: none;
    }
  }
`;

export { OrderStyles };
