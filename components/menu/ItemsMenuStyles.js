import styled from 'styled-components';

const ItemsMenuStyles = styled.div`
  background: transparent;
  width: 100%;
  z-index: 3;
  padding-bottom: 1rem;
  user-select: none;
  position: fixed;
  top: calc(var(--navHeight) + var(--searchHeight));
  background-color: var(--white);

  @media (max-width: 850px) {
    overflow-x: hidden;
    background: transparent;
    padding-bottom: 3rem;
  }
  .menu-header {
    display: flex;
    align-items: center;
    height: var(--menuHeight);
    padding: 1rem 0 0 2rem;
    position: relative;
    background-color: var(--white);
    width: 100%;

    @media (max-width: 850px) {
    }
  }
  .main-title {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 400;
    color: var(--darkBlue);
    margin: 0;
    transition: transform 0.35s;
    @media (max-width: 850px) {
      transform: translateX(6rem);
      font-size: 1.7rem;
    }
  }
  .menu-links {
    padding-left: 3rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media (max-width: 850px) {
      display: none;
    }
  }

  .side-menu-links {
    flex-direction: column;
    align-items: flex-start;
    background: var(--blue3);
    box-shadow: 1px 1px 4px 1px var(--blue3);
    display: none;
    width: 300px;
    margin-top: var(--menuTreeHeight);
    padding: 3rem;
    opacity: 0;
    transform: translateX(-100%);
    transition: all 0.25s;
    z-index: 5;
    ${props =>
      props.isMenuOpen &&
      `transform: translateX(0%); opacity: 0.97;`};
    ${props =>
      !props.btnClicked &&
      ` -webkit-transition: none !important;
       -moz-transition: none !important;
        -ms-transition: none !important;
        -o-transition: none !important;`};
    @media (max-width: 850px) {
      display: block;
      padding-bottom: 3rem;
    }

    @media (max-width: 350px) {
      width: 100%;
    }
  }
`;

const MenuButtonStyles = styled.div`
  display: none;
  transition: all 0.5s;
  transform: scale(0.6);
  @media (max-width: 850px) {
    display: block;
    position: absolute;
  }
`;

export { ItemsMenuStyles, MenuButtonStyles };
