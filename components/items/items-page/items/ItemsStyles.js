import styled from 'styled-components';

const ItemsStyles = styled.div`
  margin-top: var(--layoutHeaderHeight);
  padding: 10rem 2rem;
  justify-content: center;
  display: grid;
  grid-gap: 2rem;

  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 300px)
  );
`;

export { ItemsStyles };
