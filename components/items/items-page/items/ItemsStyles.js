import styled from 'styled-components';

const ItemsStyles = styled.div`
  padding: 10rem 5rem;
  justify-content: center;
  display: grid;
  grid-gap: 2rem;

  grid-template-columns: repeat(
    auto-fill,
    minmax(150px, 300px)
  );

  @media (max-width: 750px) {
    padding: 10rem 1rem;
  }
`;

export { ItemsStyles };
