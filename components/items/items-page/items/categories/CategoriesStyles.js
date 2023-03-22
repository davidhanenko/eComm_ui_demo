import styled from 'styled-components';

const CategoriesStyles = styled.div`
  position: relative;
  padding: 1rem;
  min-height: 300px;
  text-align: center;
  background-color: var(--white);
  box-shadow: var(--bs);
  z-index: 0;

  a {
    width: 100%;
    height: 100%;
    display: block;

    .service-item-title {
      position: absolute;
      text-transform: uppercase;
      color: var(--blue4);
      font-size: 3rem;
      font-weight: 400;
      z-index: 1;
      margin: 0 auto;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.25s;
    }

    &:hover {
      .service-item-image {
        transform: scale(1.1);
      }
      .service-item-title {
        color: var(--blue3);
      }
    }

    .category-items {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export { CategoriesStyles };
