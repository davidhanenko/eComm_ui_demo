import styled from 'styled-components';

const ItemsMenuStyles = styled.div`
  margin-top: var(--navHeight);
  background: transparent;
  padding: 1rem;
  width: 100%;
  z-index: 1;
  user-select: none;

  position: relative;

  display: flex;
  align-self: center;

  @media (max-width: 850px) {
    padding-top: 3rem;
  }
  .menu-header {
    padding-left: 2rem;
    position: relative;

    display: flex;
    align-items: center;
  }
  .main-title {
    font-size: 2.3rem;
    text-transform: uppercase;
    font-weight: 400;
    color: var(--gray);
    margin: 0;
    transition: transform 0.25s;

    &:after {
      content: '|';
      font-size: 2.8rem;
      padding-left: 1rem;
      font-weight: 200;
      color: var(--yellow2);
    }

    @media (max-width: 650px) {
      transform: translateX(6rem);
      font-size: 2rem;

      &:after {
        display: none;
      }
    }
  }
  .menu-links {
    padding-left: 2rem;
    display: flex;
    letter-spacing: 0.5px;
    flex-wrap: wrap;

    @media (max-width: 650px) {
      display: none;
    }
  }
  .side-menu-links {
    background: var(--green2);
    box-shadow: 1px 1px 4px 0px var(--green2);
    display: none;
    position: absolute;
    width: 300px;
    padding: 2rem 3rem;
    opacity: 0;
    transform: translateX(-100%);
    transition: all 0.25s;
    z-index: 5;
    top: 100%;
    left: 0;

    ${props =>
      props.isMenuOpen &&
      `transform: translateX(0%); opacity: 0.98;`};
    ${props =>
      !props.btnClicked &&
      ` -webkit-transition: none !important;
       -moz-transition: none !important;
        -ms-transition: none !important;
        -o-transition: none !important;`};
    @media (max-width: 650px) {
      display: block;
      padding-bottom: 3rem;
    }

    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;

const MenuButtonStyles = styled.div`
  display: none;
  transition: all 0.3s;
  transform: scale(0.7);
  @media (max-width: 650px) {
    display: block;
    position: absolute;
  }
`;

export { ItemsMenuStyles, MenuButtonStyles };
