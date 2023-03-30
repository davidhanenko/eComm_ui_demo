import styled from 'styled-components';

const PaginationContainerStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  margin-top: 2rem;
  user-select: none;
  @media (max-width: 850px) {
    display: block;
  }
`;

const ItemsPerPageSelectStyles = styled.div`
  display: inline-block;
  margin-left: 2rem;

  p {
    display: inline;
    text-transform: capitalize;
    color: var(--gray);
  }
`;

const ItemsSortSelectStyles = styled.div`
  display: inline-block;
  margin-left: 1rem;

  #sort-btn {
    width: 150px;
  }
`;

const PagesControlStyles = styled.div`
  display: inline;
  margin-right: 2rem;
  font-size: 1.3rem;

  @media (max-width: 850px) {
    display: flex;
    justify-content: end;
    padding-top: 3rem;
    align-items: center;
    font-size: 1.4rem;
  }

  a {
    margin: 1rem;
    color: var(--dark);
    border-radius: 5px;
    transition: color 0.25s;

    @media (hover: hover) {
      &:hover {
        color: var(--orange);
      }
    }
  }
  a[aria-disabled='true'] {
    color: var(--lightGray);
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export {
  PaginationContainerStyles,
  ItemsPerPageSelectStyles,
  PagesControlStyles,
  ItemsSortSelectStyles,
};
