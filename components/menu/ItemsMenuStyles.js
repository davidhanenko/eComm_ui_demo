import styled from 'styled-components';

const ItemsMenuStyles = styled.div`
  margin-top: calc(var(--navHeight) + var(--searchHeight));
  background: transparent;
  width: 100%;
  z-index: 1;
  padding-bottom: 2rem;
  user-select: none;
  @media (max-width: 850px) {
    overflow-x: hidden;
  }
  .menu-header {
    height: 100px;
    padding-top: 1rem;
    padding-left: 2rem;
    position: relative;
  }
  .main-title {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 400;
    color: var(--darkBlue);
    margin: 0;
    transition: transform 0.35s;
    @media (max-width: 850px) {
      transform: translateX(6rem);
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
    position: absolute;
    width: 300px;
    padding: 3rem;
    opacity: 0;
    transform: translateX(-100%);
    transition: all 0.25s;
    z-index: 5;
    ${props =>
      props.isMenuOpen &&
      `transform: translateX(0%); opacity: 0.95;`};
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
  }
`;

const MenuButtonStyles = styled.div`
  display: none;
  transition: all 0.5s;
  @media (max-width: 850px) {
    display: block;
    position: absolute;
    top: 2rem;
    left: 2rem;
  }
`;

export { ItemsMenuStyles, MenuButtonStyles };
