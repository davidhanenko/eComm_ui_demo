import styled from 'styled-components';

const OrderItemStyles = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 1rem;

  border-bottom: 0.5px dashed var(--blue4);

  .item-img {
    padding-right: 2rem;
  }
  .item-details {
    width: 90%;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;

    .item-title {
      font-weight: 400;
      font-size: 1.6rem;
    }
    p {
      margin: 0;
      font-size: 1.5rem;
    }
  }
`;

export { OrderItemStyles };
