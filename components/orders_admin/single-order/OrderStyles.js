import styled from 'styled-components';

const OrderStyles = styled.div`
  margin-top: calc(var(--navHeight) + var(--searchHeight));
  padding: 5rem;

  @media (max-width: 600px) {
    padding: 5rem 2rem;
  }

  hr {
    margin: 3rem 0;
    background-color: var(--green2);
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
        margin: 0;
        color: var(--green4);
      }
    }

    .status-select {
      #sort-btn {
        width: 150px;
      }
    }

    .header-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
      .order-title {
        flex-direction: column;
      }
    }
  }

  .order-notes {
    width: 70%;
    @media (max-width: 600px) {
      width: 100%;
    }
  }
  footer {
    button {
      display: flex;
      align-items: center;
      text-transform: uppercase;
      padding: 1rem;
      margin-top: 5rem;
      border: 1px solid var(--green2);
      cursor: pointer;

      transition: all 0.2s;

      svg {
        margin-right: 1rem;
      }

      &:hover {
        background-color: var(--yellow);
        outline: none;
      }
    }

    @media print {
      display: none;
    }
  }
`;

export { OrderStyles };
