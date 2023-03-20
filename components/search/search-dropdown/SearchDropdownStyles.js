import styled from 'styled-components';

const SearchDropdownStyles = styled.ul`
  position: absolute;
  /* left: 2rem; */
  top: calc(var(--searchHeight) / 2);
  list-style: none;
  padding-left: 0;
  padding-bottom: 10rem;
  min-width: 100%;
  overflow-wrap: break-word;
  background: var(--blue3);
  box-shadow: 1px 4px 15px 1px var(--gray);

  /* @media (max-width: 600px) {
    width: 80vw;
  } */

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
    border-top: 1px solid var(--white);
    width: 80%;
  }
`;

const DropdownItemStyles = styled.li`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  cursor: pointer;
  transition: all 0.35s;
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
      background: var(--offWhite);
      border-left: 1rem solid var(--blue1);

      p {
        color: var(--blue1);
      }
    }
  }
`;

const AllResultsStyles = styled.a`
  position: absolute;
  bottom: 0;
  text-align: center;
  background: var(--blue2);
  width: 100%;
  transition: all 0.3s;
  color: var(--white);
  @media (hover: hover) {
    &:hover {
      background: var(--blue1);
    }
  }
`;

const CloseBtnStyles = styled.button`
  position: absolute;
  top: 0;
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
