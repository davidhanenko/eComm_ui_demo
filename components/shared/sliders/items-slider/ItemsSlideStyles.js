import styled from 'styled-components';

const ItemsSlideStyles = styled.div`
  background: transparent;
  cursor: pointer;
  margin: 0 1rem 1rem 1rem;
  position: relative;
  padding: 1rem;
  overflow: none;

  .item-title {
    display: flex;
    justify-content: center;

    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 400;
    color: var(--brown);
    z-index: 3;
    transition: all 0.3s;
    @media (max-width: 500px) {
      font-size: 2.8rem;
    }

    @media (hover: hover) {
      &:hover {
        color: var(--orange);
      }
    }
  }

  .item-image {
    transition: transform 0.3s;
  }

  @media (hover: hover) {
    &:hover {
      .item-image {
        transform: scale(1.05);
      }
    }
  }

  .no-items {
    height: 100%;
    width: 100%;
    position: relative;

    p {
      position: absolute;
      top: 5%;
      left: 5%;
      color: var(--gray);
      font-size: 1.8rem;
    }
  }
`;

export { ItemsSlideStyles };
