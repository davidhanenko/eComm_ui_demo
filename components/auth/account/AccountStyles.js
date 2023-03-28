import styled from 'styled-components';

const AccountStyles = styled.main`
  margin: calc(
      var(--navHeight) + var(--searchHeight) + 5rem
    )
    0;
  min-height: 80vh;
  padding: 0 5rem;

  header {
    letter-spacing: 0.3px;
    h2 {
      font-size: 2.5rem;
      margin: 0;
      color: var(--gray1);
    }

    p {
      margin: 0;
    }
  }

  hr {
    background-color: var(--green);
    margin: 2rem 0 3rem 0;
  }

  .account-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    background-color: var(--white);
    padding: 2rem;
    box-shadow: var(--bs);

    .user {
      padding: 2rem;
      margin: -2rem 0 -2rem -2rem;
      background-color: var(--offWhite);

      hr {
        margin: 4rem 0;
      }

      h3 {
        font-size: 2.4rem;
        color: var(--green4);
        font-weight: 600;
        text-transform: capitalize;
      }

      p {
        font-size: 1.5rem;
        margin: 0.5rem 0;
      }

      .edit-container {
        margin-top: 3rem;

        .divider {
          margin: 0 1rem;
          color: var(--green);
        }

        a {
          color: var(--linkBlue);
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
      height: 600px;
      overflow-y: hidden;

      h4 {
        text-align: center;
        font-size: 2.2rem;
        color: var(--gray);
        background-color: var(--white);
        font-weight: 600;
        margin: 1rem 0;
      }

      .orders-container {
        overflow-y: scroll;
        height: 100%;
        padding: 2rem 2rem 8rem 2rem;
      }
    }

    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;

      .user {
        margin: -2rem;
        padding-bottom: 4rem;
      }

      .orders {
        padding: 2rem 0;
      }
    }
  }

  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;

const SingleOrderStyles = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1.5rem 0;
  box-shadow: var(--bs);
  position: relative;

  .order-overlay {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  p {
    margin: 0;
    font-size: 1.3rem;
  }

  .order-id {
    font-weight: 600;
  }
  span {
    margin: 0;
    font-size: 1.3rem;

    &:nth-of-type(3) {
      margin: 0 0.3rem;
    }
  }

  &:hover {
    box-shadow: var(--bsHover);
    cursor: pointer;
  }

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;

    .right-side {
      margin-top: 2rem;
    }
  }
`;

export { AccountStyles, SingleOrderStyles };
