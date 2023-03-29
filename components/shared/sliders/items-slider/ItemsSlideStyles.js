import styled from 'styled-components';

const ItemsSlideStyles = styled.div`
  background: transparent;
  cursor: pointer;
  position: relative;
  padding: 2rem;
  overflow: none;
  margin: 0.5rem;
  box-shadow: var(--bs);

  transition: transform 0.2s;

  .item-title {
    display: flex;
    justify-content: center;

    font-size: 2.5rem;
    text-transform: capitalize;
    font-weight: 400;
    color: var(--green3);
    z-index: 3;
    transition: all 0.2s;
    @media (max-width: 600px) {
      font-size: 2.8rem;
    }
  }

  .item-image {
    transition: transform 0.2s;
  }

  hr {
    background-color: var(--yellow2);
    transition: all 0.2s;
  }

  &:hover {
    box-shadow: var(--bsHover);

    .item-title {
      letter-spacing: 0.75px;
    }
    .item-image {
      transform: scale(1.05);
    }
    hr {
      transform: scaleX(1.03);
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
