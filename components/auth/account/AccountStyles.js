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
      margin: 4rem 0;
      border: none;
      background-color: var(--blue4);
      height: 1px;
    }

    h3 {
      font-size: 3rem;
      color: var(--blue1);
    }

    p {
      font-size: 1.5rem;
    }

    .edit-container {
      margin-top: 3rem;

      .divider {
        margin: 0 1rem;
        color: var(--blue4);
      }

      a {
        color: var(--blue3);
        transition: all 0.2s;

        @media (hover: hover) {
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .orders {
    padding: 0 2rem;
    h4 {
      text-align: center;
      font-size: 2.2rem;
      color: var(--blue2);
    }
  }
`;

const OrderItemStyles = styled.div`
  border: 1px dashed var(--blue5);
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1.5rem 0;

  p {
    margin: 0;
    font-size: 1.3rem;
  }

  span {
    margin: 0;
    font-size: 1.3rem;

    &:nth-of-type(2) {
      margin: 0 0.3rem;
    }
  }

  .left-side {
  }

  .right-side {
  }
`;

export { AccountStyles, OrderItemStyles };
