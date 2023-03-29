import styled from 'styled-components';

const SearchDropdownStyles = styled.ul`
  position: absolute;
  top: calc(var(--searchHeight) / 2);
  list-style: none;
  padding-left: 0;
  padding-bottom: 10rem;
  min-width: 100%;
  overflow-wrap: break-word;
  background: var(--offWhite);
  box-shadow: var(--bs);

  .no-items {
    padding: 8rem 1rem 0 1rem;
    color: var(--white);
    font-weight: 300;
    em {
      color: var(--dark);
      user-select: none;
      font-size: 1.2em;
    }
  }

  .found-items {
    font-weight: 300;
    font-size: 1.4rem;
    padding: 1rem 0 0 2rem;
    margin-left: 1rem;
    border-top: 1px solid var(--yellow2);
    width: 80%;
  }
`;

const DropdownItemStyles = styled.li`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  p {
    display: inline;
    padding: 0.2rem 0.6rem;
    z-index: 5;
  }
  p::first-letter {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    &:hover {
      background: var(--white);
      border-left: 1rem solid var(--yellow2);
    }
  }
`;

const AllResultsStyles = styled.a`
  position: absolute;
  bottom: 0;
  text-align: center;
  background: var(--green2);
  width: 100%;
  transition: all 0.2s;

  p {
    transition: all 0.2s;
  }

  @media (hover: hover) {
    &:hover {
      background: var(--yellow);
    }
  }
`;

const CloseBtnStyles = styled.button`
  position: absolute;
  bottom: 100%;
  right: -3rem;
  width: 3rem;
  height: 3rem;
  padding: 0;
  border: none;
  font-size: 2rem;
  color: var(--red);
  cursor: pointer;
  background: transparent;
  svg {
    width: 100%;
    height: 100%;
    padding: 0.2rem;
    transition: transform 0.35s;
    @media (hover: hover) {
      &:hover {
        transform: rotate(90deg) scale(1.4);
      }
    }
  }
`;

export {
  SearchDropdownStyles,
  DropdownItemStyles,
  CloseBtnStyles,
  AllResultsStyles,
};
