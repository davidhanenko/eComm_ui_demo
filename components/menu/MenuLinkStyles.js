import styled from 'styled-components';

const MenuLinkStyles = styled.div`
  font-size: 1.3rem;
  margin-right: 1rem;
  a {
    text-decoration: none;
  }
  .link-title {
    margin: 0rem 1rem;
    padding: 1rem;
    color: var(--dark);
    text-transform: uppercase;
    font-weight: 400;
    transition: all 0.25s;
    @media (hover: hover) {
      &:hover {
        color: var(--blue2);
      }
    }
  }

  .active {
    color: var(--blue2);
  }

  @media (min-width: 850px) {
    .active {
      color: var(--blue3);
    }
  }
`;

export { MenuLinkStyles };
