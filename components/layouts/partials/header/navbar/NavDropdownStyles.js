import styled from 'styled-components';

const NavDropdownStyles = styled.div`
  position: relative;
  align-self: center;
  width: 100%;
  .dropdown-btns-group {
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
  @media (max-width: 850px) {
    position: relative;
    right: 0rem;
  }
  svg {
    color: var(--blue1);
    transform: scale(2);
  }
`;

const DropdownMenuStyles = styled.ul`
  padding-left: 2rem;
  z-index: calc(var(--goToTopZ) + 3);
  display: none;
  margin: -2rem 0 3rem 0;

  ${props =>
    props.isDropdownOpen && `display: block; opacity:0.99;`}

  @media (min-width: 850px) {
    box-shadow: 0px 0px 3px 1px var(--offWhite);
    opacity: 0;
    visibility: hidden;
    transform: translateY(10%);
    background: var(--white);
    position: fixed;
    width: 200px;
    margin: 0;
    padding: 2rem 0;
    padding-bottom: 10rem;
    transition: all 0.25s;
    display: grid;

    ${props =>
      props.isDropdownOpen &&
      `visibility: visible; opacity: 0.9; transform: translateY(-2%);`};
  }
`;

const DropdownItemStyles = styled.li`
  list-style: none;
  text-transform: capitalize;
  padding: 0.6rem;

  height: 4rem;

  a {
    .item-title-img {
      font-weight: 300;
      letter-spacing: 1px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: start;
      margin-right: 5rem;
      width: 100%;
    }
    .item-image {
      img {
        transition: all 0.3s;
        transform: translateX(100%);
        background-color: var(--white);
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
    }

    /* @media (hover: hover) { */
    &:hover {
      .item-image {
        img {
          transform: translateX(0%);
        }
      }
    }

    @media (max-width: 850px) {
      font-size: 1.6rem;
    }
  }
`;

export {
  NavDropdownStyles,
  DropdownBtnStyles,
  DropdownMenuStyles,
  DropdownItemStyles,
};
