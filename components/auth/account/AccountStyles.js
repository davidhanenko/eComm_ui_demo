import styled from 'styled-components';

const AccountStyles = styled.main`
  margin-top: calc(
    var(--navHeight) + var(--searchHeight) + 5rem
  );
  min-height: 80vh;
  padding: 0 5rem;

  display: grid;
  grid-template-columns: 1fr 2fr;

  .user {
    border-right: 1px solid var(--blue4);
    padding: 0 2rem;
    margin: 2rem 0;

    hr {
      border: none;
      background-color: var(--blue4);
      height: 1px;
    }

    h3 {
      font-size: 3rem;
      color: var(--blue3);
    }

    p {
      font-size: 1.5rem;
    }
  }

  .orders {
    padding: 0 2rem;
    h4 {
      font-size: 2.2rem;
      color: var(--blue4);
    }
  }
`;

const OrderItemStyles = styled.div`
  border-bottom: 1px dashed var(--blue5);
  p {
    margin: 0;
    font-size: 1.3rem;
  }

  .top-line {
  }
`;

export { AccountStyles, OrderItemStyles };
