import styled from 'styled-components';

const NavDropdownStyles = styled.div`
  position: relative;
  align-self: center;
  width: 100%;
  .dropdown-btns-group {
    
    cursor: pointer;
    @media (max-width: 850px) {
      display: flex;
    }
  }
`;

const DropdownBtnStyles = styled.button`
  padding: 0;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;

  svg {
    color: inherit;
    transform: scale(1.3);
  }

  @media (max-width: 850px) {
    border: 0.1px solid var(--blue4);
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

    transition: all 0.2s;

    svg {
      width: 100%;
    }

    &:hover {
      background: var(--blue4);
    }
  }
`;

const DropdownMenuStyles = styled.ul`
  padding-left: 2rem;
  z-index: calc(var(--goToTopZ) + 3);
  display: none;
  margin-bottom: 3rem;

  ${props =>
    props.isDropdownOpen && `display: block; opacity:0.99;`}

  @media (min-width: 850px) {
    box-shadow: 0px 0px 3px 1px var(--offWhite);
    opacity: 0;
    visibility: hidden;
    transform: translateY(10%);
    background: var(--white);
    position: fixed;
    width: 250px;
    margin: 0;
    padding: 2rem 0;
    padding-bottom: 10rem;
    transition: all 0.25s;
    display: grid;

    ${props =>
      props.isDropdownOpen &&
      `visibility: visible; opacity: 0.96; transform: translateY(-2%);`};
  }
`;

const DropdownItemStyles = styled.li`
  list-style: none;
  text-transform: capitalize;
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;

  a.item-link {
    @media (min-width: 850px) {
      margin: 0;
      padding-left: 0;
      width: 90%;
      border-bottom: 1px solid var(--blue4);
    }
  }

  .item-title-img {
    font-weight: 300;
    letter-spacing: 1px;
    cursor: pointer;
    display: flex;
    align-items: center;

    justify-content: start;
    margin-right: 5rem;
  }
  .item-image {
    img {
      transition: all 0.3s;
      transform: translateX(100%);

      @media (max-width: 850px) and (hover: none) and (pointer: coarse) {
        display: none;
        width: 0;
        height: 0;
      }
    }
  }
  p {
    margin: 0;
    padding-left: 1rem;
    width: 80%;
  }

  @media (hover: hover) {
    &:hover {
      .item-image {
        img {
          transform: translateX(0%);
        }
      }
    }
  }

  @media (max-width: 850px) {
    font-size: 1.5rem;
  }
`;

export {
  NavDropdownStyles,
  DropdownBtnStyles,
  DropdownMenuStyles,
  DropdownItemStyles,
};
