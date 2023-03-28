import styled from 'styled-components';

const HeaderStyles = styled.header`
  background: var(--green3);
  margin: 0;
  max-height: var(--navHeight);
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  box-shadow: var(--bs);

  @media (max-width: 850px) {
    max-height: var(--navHeightSm);
  }

  .navbar {
    height: var(--navHeight);
    display: grid;
    grid-template-columns: auto 1fr;
    @media (max-width: 850px) {
      height: var(--navHeightSm);
    }
  }
`;

const Logo = styled.div`
  display: flex;
  grid-auto-columns: min-content;
  place-self: start center;
  font-size: 3rem;
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
