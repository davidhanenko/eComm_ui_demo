import styled from 'styled-components';

const CategoriesStyles = styled.div`
  position: relative;
  min-height: 300px;
  text-align: center;
  background-color: var(--white);
  box-shadow: var(--bs);
  z-index: 0;

  a {
    padding: 1rem;
    width: 100%;
    height: 100%;
    display: block;

    .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: #36683c28;
      top: 0;
      left: 0;
      z-index: 1;

      transition: all 0.25s;
    }
    .service-item-title {
      position: absolute;
      text-transform: uppercase;
      color: var(--gray);
      font-size: 2.5rem;
      font-weight: 400;
      z-index: 2;
      margin: 0 auto;
      padding: 1rem 0;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.25s;
    }

    .category-items {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  &:hover {
    box-shadow: var(--bsHover);
    .overlay {
      background: none;
    }
    .service-item-image {
      transform: scale(1.1);
    }
    .service-item-title {
      letter-spacing: 0.5px;
    }
  }
`;

export { CategoriesStyles };
