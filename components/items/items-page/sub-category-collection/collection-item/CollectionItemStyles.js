import styled from 'styled-components';

const CollectionItemStyles = styled.div`
  background: transparent;
  margin: 2rem 3rem;
  text-align: center;
  position: relative;

  @media (max-width: 576px) {
    margin: 2rem 0.5rem;
  }

  a {
    text-decoration: none;
  }

  .not-available {
    position: absolute;
    top: 5%;
    left: 0;
    width: 100%;
    text-transform: uppercase;
    color: var(--blue3);
    background-color: var(--blue5);
    opacity: 0.7;
    z-index: 2;

    @media (max-width: 576px) {
      font-size: 1.2rem;
    }
  }

  .collection-item-title {
    text-transform: uppercase;
    color: var(--blue1);
    font-weight: 400;
    font-size: 1.8rem;
    margin: 0;
    transition: all 0.25s;

    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }

  .item-img {
    transition: all 0.25s;
  }
  @media (hover: hover) {
    &:hover {
      .collection-item-title {
        color: var(--blue4);
      }

      .item-img {
        transform: scale(0.95);
      }
    }
  }
`;

export { CollectionItemStyles };
