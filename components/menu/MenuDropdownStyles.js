import styled from 'styled-components';

const DropdownStyles = styled.div`
  align-self: center;
  display: inline-block;
  position: relative;

  .dropdown-btns-group {
    display: flex;
    align-items: center;

    .link-title {
      padding: 0;
    }
  }
`;

const DropdownBtnStyles = styled.button`
  padding: 0;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;

  display: flex;

  svg {
    color: var(--gray1);
    transform: scale(1.3);
    margin-left: 0.3rem;
  }

  @media (max-width: 650px) {
    position: fixed;
    right: 2rem;
    border: 1px solid var(--yellow);
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    transition: all 0.2s;

    svg {
      margin: 0;
      height: 100%;
    }

    &:hover {
      background: var(--yellow);
    }
  }
`;

const DropdownMenuStyles = styled.ul`
  margin: 0;
  opacity: 0;
  display: none;
  width: 250px;
  visibility: hidden;
  padding-bottom: 2rem;
  z-index: 5;

  ${props =>
    props.dropdownOpen &&
    `opacity: 1; visibility: visible; display: flex; flex-direction: column;`}

  @media (min-width: 650px) {
    background: var(--green2);
    box-shadow: 1px 3px 8px 1px var(--green2);
    opacity: 0;

    margin-top: 0.5rem;
    min-height: 25rem;
    width: 220px;
    padding: 2rem 2rem 3rem 2rem;

    visibility: hidden;
    transform: translateY(10%);
    right: 0;
    height: fit-content;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 5;

    transition: all 0.2s;

    ${props =>
      props.dropdownOpen &&
      `visibility: visible; opacity: 0.98; transform: translateY(-2%);`}
  }

  .no-items {
    font-weight: 300;
    font-size: 1.8rem;
    color: var(--gray);
  }
`;

const DropdownItemStyles = styled.li`
  list-style: none;
  font-weight: 300;
  text-transform: capitalize;
  cursor: pointer;
  margin: 0.7rem 0;
  padding-bottom: 0.5rem;

  transition: all 0.2s;

  width: 100%;
  border-bottom: 1px solid var(--yellow2);

  a {
    text-decoration: none;
    color: var(--dark);
    font-size: 1.4rem;
    display: block;
    transition: all 0.2s;
  }

  @media (hover: hover) {
    &:hover {
      color: var(--white);
      a {
        text-decoration: none;
        color: var(--white);
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
