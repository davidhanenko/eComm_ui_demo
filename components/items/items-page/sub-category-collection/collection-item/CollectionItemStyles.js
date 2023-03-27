import styled from 'styled-components';

const CollectionItemStyles = styled.div`
  position: relative;
  text-align: center;
  border: 1px solid var(--lightGray1);
  box-shadow: var(--bs);
  background: var(--white);
  display: grid;

  transition: all 0.25s;

  a {
    min-width: 100%;
    min-height: 100%;
    padding: 2rem;

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

      @media (max-width: 600px) {
        font-size: 1.2rem;
      }
    }

    hr {
      background-color: var(--yellow2);
      transition: all 0.25s;
    }

    .collection-item-title {
      text-transform: capitalize;
      color: var(--green4);
      font-weight: 400;
      font-size: 1.6rem;
      letter-spacing: 0.5px;
      transition: all 0.25s;

      @media (max-width: 600px) {
        font-size: 1.3rem;
      }
    }

    .item-img {
      transition: all 0.25s;
    }
  }
  @media (hover: hover) {
    &:hover {
      box-shadow: var(--bsHover);

      hr {
        transform: scaleX(0.95);
      }
      .collection-item-title {
        letter-spacing: 0.1px;
      }

      .item-img {
        transform: scale(0.95);
      }
    }
  }
`;

export { CollectionItemStyles };
