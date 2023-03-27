import styled from 'styled-components';

const SubCategoryItemStyles = styled.div`
  border: 1px solid var(--lightGray1);
  box-shadow: var(--bs);
  display: grid;
  background: var(--white);

  transition: all 0.25s;

  a {
    min-width: 100%;
    min-height: 100%;
    padding: 2rem;

    hr {
      background-color: var(--yellow2);
      transition: all 0.25s;
    }

    .subcategory-title {
      color: var(--green4);
      font-weight: 400;
      font-size: 1.6rem;
      text-transform: capitalize;
      letter-spacing: 0.5px;
      transition: all 0.25s;

      @media (max-width: 600px) {
        font-size: 1.3rem;
      }
    }

    .sub-image {
      transition: all 0.25s;
    }
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: var(--bsHover);
      hr {
        transform: scale(0.95);
      }

      .subcategory-title {
        letter-spacing: 0.1px;
      }

      .sub-image {
        transform: scale(0.95);
      }
    }
  }

  .no-item {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 150px;

    p {
      position: absolute;
      top: 20%;
      left: 10%;
      font-size: 1.5rem;
      color: var(--gray);
    }
  }
`;

export { SubCategoryItemStyles };
