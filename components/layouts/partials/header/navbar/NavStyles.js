import styled from 'styled-components';

const NavStyles = styled.nav`
  overflow-x: hidden;
  place-self: center end;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;

  .nav-links {
    font-size: 1.8rem;
    margin: 0;
    padding: 2rem 0 0 0;
    position: relative;
    padding-right: 3rem;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    min-width: 250px;
    gap: 0.5rem;
    place-self: center end;

    @media (max-width: 850px) {
      position: fixed;
      gap: 0;
      top: var(--searchHeight);
      right: 0;
      min-width: 80%;
      background: var(--white);
      box-shadow: 1px 1px 3px 1px var(--offWhite);
      transform: translateX(100%);
      z-index: 2;
      padding-bottom: 2rem;
      opacity: 0.9;
      ${props =>
        props.open &&
        `grid-auto-flow: row; opacity: 0.98; transform: translate(0, var(--navHeight)); transition: all 0.3s;`};
      ${props =>
        !props.open &&
        props.width <= 850 &&
        `grid-auto-flow: row; transform: translateX(100%); transition: all 0.3s;`};
      @media (pointer: coarse) {
        ${props =>
          !props.open &&
          props.btnClick &&
          `grid-auto-flow: row; transform: translateX(100%); transition: all 0.3s;`};
      }
    }
    @media (max-width: 600px) {
      width: 100%;
    }
  }
  a {
    padding: 0.2rem 0.25rem 0.2rem 1rem;
    margin: 0.5rem 0;
    color: var(--blue1);
    position: relative;
    transition: all 0.25s;
    @media (hover: hover) {
      &:hover,
      &:focus {
        text-decoration: none;
        color: var(--blue3);
      }
    }
    @media (max-width: 850px) {
      margin-left: 4rem;
      width: 20rem;
      border-bottom: 1px solid var(--navBorder);
    }
  }
  *:focus {
    outline: none !important;
  }

  .active-link {
    color: var(--blue3);
  }

  @media (max-width: 850px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-self: center;
  }
`;

const CartContainerStyles = styled.div`
  color: var(--blue3);
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 2.5rem;
  margin-right: 3rem;
  .user {
    padding: 0 1rem;
  }
  .user,
  .cart {
    transition: all 0.25s;
    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        transform: scale(1.2);
        color: var(--darkBlue);
      }
    }
  }
  @media (max-width: 850px) {
    font-size: 3rem;
  }

  @media print {
    display: none;
  }
`;

const NavButtonStyles = styled.button`
  display: none;
  border: none;
  color: var(--darkBlue);
  background: transparent;
  @media (max-width: 850px) {
    display: block;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;

export { NavStyles, NavButtonStyles };
