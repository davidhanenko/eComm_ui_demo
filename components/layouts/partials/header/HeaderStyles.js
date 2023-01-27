import styled from 'styled-components';

const HeaderStyles = styled.header`
  background: var(--white);
  margin: 0;
  padding: 0;
  max-height: var(--navHeight);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  .navbar {
    height: var(--navHeight);
    display: flex;
    justify-content: space-between;
    @media (max-width: 850px) {
      /* grid-template-rows: var(--navHeight); */
    }
  }
  .search-scrolled {
    transition: all 0.5s;
    opacity: 0;
    height: 0;
  }
`;

const Logo = styled.div`
  display: flex;
  grid-auto-columns: min-content;
  place-self: start center;
  font-size: 5rem;
  line-height: 1rem;
  margin-left: 2rem;
  z-index: 2;
  transform: skew(-7deg);
  align-items: center;
  align-self: center;
  a {
    color: var(--blue1);
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 1rem;
  }
`;

export { HeaderStyles, Logo };
