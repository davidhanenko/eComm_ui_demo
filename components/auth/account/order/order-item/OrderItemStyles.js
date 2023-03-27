import styled from 'styled-components';

const OrderItemStyles = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  border-bottom: 1px dashed var(--blue4);

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }

  .item-number {
    width: 3rem;
    align-self: start;
  }

  h4,
  p {
    margin: 0;
  }

  .item-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .item-type {
      text-transform: capitalize;
    }

    @media (max-width: 800px) {
      flex-direction: column;
      width: 100%;

      .top-line,
      .lower-line {
        width: 100%;
      }
    }
  }

  .top-line {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    margin-bottom: 0.5rem;
    width: 50vw;
  }

  .lower-line {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    width: 50vw;

    .price-not-available {
      font-weight: 300;
    }
  }
`;

export { OrderItemStyles };
