import styled from 'styled-components';

const SearchResultsContainerStyles = styled.div`
  max-width: var(--maxWidth);
  padding: 5rem 5rem 15rem 5rem;

  min-height: 60vh;
  @media (max-width: 500px) {
    padding: 0 3rem;
  }

  h3 {
    font-weight: 400;
    font-size: 2.5rem;
    background: transparent;
    color: var(--gray);
    margin-bottom: 15rem;
  }
  span {
    font-style: italic;
    font-weight: 600;
    color: var(--green3);
    text-decoration: underline;
  }
  .total-items {
    font-size: 1.3rem;
    border-bottom: 1px solid var(--green2);

    @media (max-width: 750px) {
      width: 100%;
    }
  }
`;

const AllSearchResultsStyles = styled.div`
  text-align: center;
  display: grid;
  grid-gap: 1rem;
  justify-content: center;
  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 1fr)
  );
  @media (max-width: 500px) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(135px, 1fr)
    );
  }
`;

export {
  AllSearchResultsStyles,
  SearchResultsContainerStyles,
};
