import styled from 'styled-components';

const NavStyles = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;

  @media (max-width: 850px) {
    flex-direction: row;
    padding-top: 0;
  }

  .nav-links {
    display: grid;
    text-transform: capitalize;
    font-size: 1.6rem;
    margin: 0;
    padding: 0rem 3rem 0 0;
    position: relative;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    min-width: 250px;
    gap: 0.5rem;
    place-self: end;

    @media (max-width: 850px) {
      padding: 3rem 0;
      overflow-y: scroll;
      position: fixed;
      gap: 0;
      top: 1rem;
      right: 0;
      max-width: 400px;
      background: var(--white);
      transform: translateX(100%);
      z-index: 2;
      padding-bottom: 5rem;
      opacity: 0.9;
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

    a {
      padding: 0.2rem 0.25rem 0.2rem 1rem;
      margin: 0.5rem 0 0.5rem 0.5rem;
      color: var(--gray);
      letter-spacing: 2px;
      position: relative;
      transition: all 0.25s;
      user-select: none;
      @media (hover: hover) {
        &:hover,
        &:focus {
          text-decoration: none;
          color: var(--yellow2);
        }
      }
      @media (max-width: 850px) {
        border-bottom: 1px solid var(--blue4);
        margin: 1rem 2rem;
        padding: 0;
        width: 20rem;
      }
    }
    *:focus {
      outline: none !important;
    }
    .active-link {
      color: var(--yellow2);
    }
    @media (max-width: 850px) {
      width: 100%;
      flex-direction: row;
      justify-content: space-around;
      align-self: center;
    }
  }
  .lower-row {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    place-self: end;

    @media (max-width: 850px) {
      width: 100%;
      background: var(--gray);
      padding: 0.5rem 2rem;
      position: absolute;
      top: var(--navHeightSm);
      left: 0;
    }

    @media (max-width: 550px) {
      padding: 0.5rem 1rem;
    }
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
    right: 2rem;
  }
`;

export { NavStyles, NavButtonStyles };
