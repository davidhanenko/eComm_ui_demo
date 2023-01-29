import styled from 'styled-components';

const OrderStyles = styled.div`
  margin-top: calc(var(--navHeight) + var(--searchHeight));
  padding: 5rem;

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
`;

export { OrderStyles, OrderItemStyles };
