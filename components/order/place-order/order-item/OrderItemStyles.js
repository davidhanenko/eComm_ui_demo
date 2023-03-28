import styled from 'styled-components';

const OrderItemStyles = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.5px dashed var(--yellow);

  .item-img {
    padding-right: 2rem;
  }
  .item-details {
    width: 90%;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;

    .item-title {
      font-weight: 400;
      font-size: 1.5rem;
      margin: 0;
    }
    p {
      margin: 0;
      font-size: 1.4rem;
    }

    .item-type p {
      &:first-child {
        text-transform: capitalize;
      }
    }
    .item-price-not-available {
      font-size: 1rem;
    }
    @media (max-width: 700px) {
      .item-title {
        font-size: 1.35rem;
      }
      p {
        font-size: 1.25rem;
      }
    }
  }
`;

export { OrderItemStyles };
