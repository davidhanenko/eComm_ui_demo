import styled from 'styled-components';

const OrdersStyles = styled.ul`
  margin-top: 1rem;
  padding: 0rem 5rem 10rem 5rem;

  header {
    display: grid;
    grid-template-columns: 2;
    grid-template-rows: 3;
    h1 {
      font-size: 4rem;
      color: var(--green4);
      margin: 0;
      grid-row: 1;
      grid-column: 1;
    }

    .filter-orders {
      grid-row: 2;
      grid-column: 2;
      justify-self: end;
      position: relative;
      #sort-btn {
        min-width: 150px;
        display: flex;
        justify-content: space-between;

        svg {
          right: 0;
        }
      }

      #sort-dropdown {
        width: 150px;
        top: 100%;
      }
    }
    hr {
      grid-column: 1/3;
      grid-row: 3;
      width: 100%;
      margin-bottom: 4rem;
      background-color: var(--yellow);
    }
  }

  @media (max-width: 800px) {
    padding: 0 2rem 5rem 2rem;
  }
`;

const OrdersItemStyles = styled.li`
  list-style: none;
  padding: 2rem;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr;
  color: var(--gray);
  box-shadow: var(--bs);
  transition: all 0.25s;

  p {
    margin: 0.5rem 0;
    font-size: 1.3rem;
  }

  .order-status {
    text-transform: uppercase;
    width: 110px;
    padding: 0.5rem;
    color: var(--white);
    text-align: center;
  }
  .pending {
    background-color: var(--yellow1);
  }
  .fulfilled {
    background-color: var(--green);
  }
  .in-progress {
    background-color: var(--linkBlue);
  }
  .rejected {
    background-color: var(--red);
  }

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    margin: 2rem 0;
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      box-shadow: var(--bsHover);
    }
  }
`;

export { OrdersStyles, OrdersItemStyles };
