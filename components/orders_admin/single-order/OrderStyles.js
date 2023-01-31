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

export { OrderStyles };
