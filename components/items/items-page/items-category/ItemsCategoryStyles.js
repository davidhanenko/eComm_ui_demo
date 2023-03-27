import styled from 'styled-components';

const ItemsCategoryStyles = styled.div`
  padding: 5rem 3rem 10rem 3rem;

  @media (max-width: 600px) {
    padding: 5rem 1rem 10rem 1rem;
  }

  .items-category-title {
    font-size: 2.5rem;
    text-transform: capitalize;
    font-weight: 400;
    letter-spacing: 0.75px;
    margin-bottom: 1rem;
    color: var(--gray);
    @media (max-width: 850px) {
      font-size: 2.5rem;
    }
  }

  .title-underline {
    height: 1px;
    border: none;
    margin-bottom: 10rem;
    background-color: lightgreen;
    margin-left: 0;
  }

  .category-container {
    display: grid;
    grid-gap: 1rem;
    justify-content: center;
    grid-template-columns: repeat(
      auto-fill,
      minmax(250px, 1fr)
    );
    @media (max-width: 600px) {
      grid-template-columns: repeat(
        auto-fill,
        minmax(150px, 1fr)
      );
    }
  }

  .no-items {
    font-size: 2rem;
    color: var(--gray);
  }
`;

export { ItemsCategoryStyles };
