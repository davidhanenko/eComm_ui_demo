import styled from 'styled-components';

const CartStyles = styled.div`
  position: absolute;
  right: 0;
  top: calc(var(--navHeight) + var(--searchHeight));
  width: 50%;
  z-index: calc(var(--goToTopZ) + 2);
  min-width: 400px;
  background: var(--white);
  box-shadow: 0px 1px 3px 1px var(--offWhite);

  min-height: calc(
    100vh - var(--navHeight) + var(--searchHeight) - 5rem
  );
  height: 100%;
  right: -120%;

  transition: all 0.35s;
  transition-timing-function: cubic-bezier(
    0.76,
    0.04,
    0.18,
    1.01
  );
  ${props => props.isCartOpen && `right:0;`};

  display: grid;
  grid-template-rows: auto 1fr auto;

  @media (max-width: 900px) {
    width: 65%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  header {
    display: flex;
    justify-content: end;

    button {
      border: none;
      font-size: 3rem;
      background: transparent;
      margin: 2rem 2rem 0 0;
      transition: all 0.25s;
      color: var(--blue2);

      .btn-icon {
        font-size: 3rem;
      }

      @media (hover: hover) {
        &:hover {
          cursor: pointer;
          transform: scale(1.2);
        }
      }
    }
  }

  .cart-body {
    padding: 0 1rem;
    overflow-y: scroll;
    ul {
      padding: 0;
      margin: 0;
    }

    .cart-empty {
      list-style: none;
      font-size: 1.8rem;
      font-weight: 300;
      padding-left: 3rem;
      color: var(--blue1);
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem 4rem 2rem;
    font-size: 1.3rem;
    height: 10rem;
    border-top: 1px solid var(--blue3);

    p {
      font-weight: 300;
      margin: 0;
    }

    .cart-total {
      sub {
        font-size: 1.1rem;
      }

      @media (max-width: 650px) {
        display: flex;
        align-items: center;
      }
    }

    .modal-trigger {
      cursor: pointer;
      color: var(--blue3);
      text-decoration: underline;
    }

    button {
      padding: 1rem;
      text-transform: uppercase;
      border: none;
      background: var(--blue3);
      border-radius: 2rem;
      color: var(--white);

      @media (hover: hover) {
        &:hover {
          cursor: pointer;
          background: var(--blue2);
        }
      }
    }
    @media (max-width: 650px) {
      height: 100%;
      margin: 0;
      padding-bottom: 2rem;
      flex-direction: column;
      background-color: var(--white);

      p {
        margin: 0;
      }

      .cart-total {
        display: flex;
        flex-direction: column;
        padding-bottom: 2rem;
      }

      .modal-trigger {
        margin-bottom: 1.5rem;
      }

      button {
        margin-bottom: 2rem;
        padding: 1.25rem;
      }
    }
  }
`;

export { CartStyles };
