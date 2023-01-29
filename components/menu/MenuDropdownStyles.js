import styled from 'styled-components';

const DropdownStyles = styled.div`
  align-self: center;
  display: inline-block;

  .dropdown-btns-group {
    @media (max-width: 850px) {
      display: flex;
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
    }
  }
`;

const DropdownBtnStyles = styled.button`
  padding: 0;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  display: none;
  @media (max-width: 850px) {
    display: flex;
    align-self: center;
    position: fixed;
    right: 2rem;
  }
  svg {
    color: var(--gray);
    transform: scale(2);
  }
`;

const DropdownMenuStyles = styled.ul`
  margin: 0;
  opacity: 0;
  z-index: 5;
  display: none;
  height: 0;
  visibility: hidden;
  transition: all 0.25s;

  ${props =>
    props.dropdownOpen &&
    `opacity: 1; visibility: visible; display: block; max-height: 100%;`}

  @media (min-width: 850px) {
    overflow-y: hidden;
    background: var(--blue3);
    margin-top: 0.5rem;
    min-height: 25rem;
    height: fit-content;
    width: 30vw;
    position: absolute;
    padding: 2rem 5rem 3rem 3rem;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10%);
    display: block;
    box-shadow: 1px 3px 15px 1px var(--darkBlue);

    ${props =>
      props.dropdownOpen &&
      `visibility: visible; opacity: 0.9; transform: translateY(-2%);`}
  }

  .no-items {
    font-weight: 300;
    font-size: 1.8rem;
    color: var(--gray);
  }
`;

const DropdownItemStyles = styled.li`
  list-style: '-';
  font-weight: 300;
  text-transform: capitalize;
  cursor: pointer;
  line-height: 1.8rem;
  padding: 1rem;
  transition: all 0.25s;
  a {
    text-decoration: none;
    color: var(--dark);
    font-size: 1.8rem;
    transition: all 0.25s;
  }
  @media (hover: hover) {
    &:hover {
      color: var(--offWhite);
      a {
        text-decoration: none;
        color: var(--offWhite);
      }
    }
  }
`;

export {
  DropdownStyles,
  DropdownBtnStyles,
  DropdownMenuStyles,
  DropdownItemStyles,
};
