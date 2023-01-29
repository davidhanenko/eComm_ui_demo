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
  box-shadow: 0px 0px 3px 1px var(--offWhite);

  @media (min-width: 850px) {
    display: block;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10%);
    background: var(--white);
    position: fixed;
    right: 12rem;
    width: 50vw;
    margin: 0 0 0 -5rem;
    padding: 2rem;
    padding-bottom: 10rem;
    transition: all 0.25s;

    display: grid;
    grid-template-columns: auto auto auto;

    ${props =>
      props.isDropdownOpen &&
      `visibility: visible; opacity: 0.9; transform: translateY(-2%);`}
  }
`;

const DropdownItemStyles = styled.li`
  list-style: none;
  text-transform: capitalize;
  cursor: pointer;
  line-height: 2rem;
  font-weight: 300;
  padding: 0.6rem;

  .item-title-img {
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

  a {
    @media (hover: hover) {
      &:hover {
        .item-image {
          img {
            transform: translateX(0%);
          }
        }
      }
    }
  }

  @media (max-width: 850px) {
    line-height: 1.7rem;
    font-size: 2rem;
    a {
      display: block;
    }
  }
`;

export {
  NavDropdownStyles,
  DropdownBtnStyles,
  DropdownMenuStyles,
  DropdownItemStyles,
};
