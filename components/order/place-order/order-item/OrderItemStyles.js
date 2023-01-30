import styled from 'styled-components';

const OrderItemStyles = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 1rem;

  .item-img {
    padding-right: 2rem;
  }
  .item-details {
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    .item-title {
    }
    p {
      margin: 0;
    }
  }
`;

export { OrderItemStyles };
