import styled from 'styled-components';

const OrdersStyles = styled.ul`
  margin-top: calc(
    var(--navHeight) + var(--searchHeight) + 5rem
  );
  padding: 5rem 5rem 10rem 5rem; 
  @media (max-width: 800px) {
    padding: 0 2rem;
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
  box-shadow: 1px 1px 4px 1px var(--blue5);
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
      box-shadow: 2px 2px 6px 3px var(--blue5);
    }
  }
`;

export { OrdersStyles, OrdersItemStyles };
