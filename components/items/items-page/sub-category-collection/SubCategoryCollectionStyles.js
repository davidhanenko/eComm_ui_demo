import styled from 'styled-components';

const SubCategoryCollectionStyles = styled.div`
  padding: 5rem 5rem;


  @media (max-width: 500px) {
    padding: 5rem 1rem;
  }

  .collection-title {
    text-transform: capitalize;
    color: var(--blue1);
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 0;
  }

  .items-count {
    margin-top: 0;
    font-size: 1.2rem;
    color: var(--gray);
  }

  .title-underline {
    height: 1px;
    border: none;
    margin-bottom: 10rem;
    background-color: var(--green);
    margin-left: 0;
  }

  .collection-container {
    margin: 10rem auto;
    display: grid;
    grid-gap: 1rem;
    justify-content: center;
    grid-template-columns: repeat(
      auto-fill,
      minmax(250px, 1fr)
    );
    @media (max-width: 500px) {
      grid-template-columns: repeat(
        auto-fill,
        minmax(150px, 1fr)
      );
    }
  }

  .no-items {
    p {
      font-size: 2rem;
      color: var(--gray);
    }
  }
`;

export { SubCategoryCollectionStyles };
