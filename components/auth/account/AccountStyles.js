import styled from 'styled-components';

const AccountStyles = styled.main`
  margin-top: calc(
    var(--navHeight) + var(--searchHeight) + 5rem
  );
  min-height: 80vh;
  padding: 0 5rem;

  header {
    text-align: center;
    margin-bottom: 5rem;
  }

  .account-container {
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
        font-weight: 400;
      }

      p {
        font-size: 1.5rem;
        margin: 0.5rem 0;
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
        font-weight: 400;
      }
    }
  }
`;

const OrderItemStyles = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1.5rem 0;
  box-shadow: 0px 0px 3px 2px var(--blue5);

  p {
    margin: 0;
    font-size: 1.3rem;
  }

  span {
    margin: 0;
    font-size: 1.3rem;

    &:nth-of-type(3) {
      margin: 0 0.3rem;
    }
  }

  .left-side {
  }

  .right-side {
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: 0px 0px 3px 1px var(--blue4);
      cursor: pointer;
    }
  }
`;

export { AccountStyles, OrderItemStyles };
