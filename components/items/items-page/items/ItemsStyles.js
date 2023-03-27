import styled from 'styled-components';

const ItemsStyles = styled.div`
  padding: 10rem 5rem 10rem 5rem;

  header {
    h2 {
      font-size: 2.5rem;
      letter-spacing: 0.5px;
      font-weight: 400;
      margin-bottom: 1rem;
    }

    hr {
      margin-bottom: 5rem;
      background-color: lightgreen;
    }
  }

  .service-categories {
    justify-content: center;
    display: grid;
    grid-gap: 2rem;

    grid-template-columns: repeat(
      auto-fill,
      minmax(150px, 300px)
    );
  }

  @media (max-width: 750px) {
    padding: 10rem 1rem;
  }
`;

export { ItemsStyles };
