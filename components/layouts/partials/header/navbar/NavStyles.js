import styled from 'styled-components';

const NavStyles = styled.nav`
  overflow-x: hidden;
  place-self: center end;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;

  .nav-links {
    justify-content: end;
    text-align: end;
    font-size: 1.3rem;
    margin: 0;
    padding: 0 3rem 0 0;
    position: relative;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    min-width: 250px;
    gap: 0.5rem;

    @media (max-width: 850px) {
      position: fixed;
      grid-auto-flow: row;

      gap: 1rem;
      top: var(--searchHeight);
      right: 0;
      min-width: 60%;
      background: var(--white);
      box-shadow: 1px 1px 3px 1px var(--offWhite);
      transform: translateX(100%);
      z-index: 2;
      padding: 4rem 5rem 2rem 0;
      opacity: 1;
      ${props =>
        props.open &&
        `grid-auto-flow: row; opacity: 1; transform: translate(0, var(--navHeight)); transition: all 0.3s;`};
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
    /* text-align: end; */
    padding: 0.2rem 0.25rem 0.2rem 1rem;
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
      /* width: 100%; */
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

const NavButtonStyles = styled.button`
  display: none;
  border: none;
  color: var(--darkBlue);
  background: transparent;
  transform: scale(0.7);
  @media (max-width: 850px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 2rem;
  }
`;

export { NavStyles, NavButtonStyles };
