import styled from 'styled-components';

const MenuLinkStyles = styled.div`
  font-size: 1.7rem;
  margin-right: 2rem;
  a {
    text-decoration: none;
  }
  .link-title {
    margin: 1rem 1rem 0 1rem;
    padding: 1.5rem 1rem 1rem 1rem;
    color: var(--dark);
    text-transform: uppercase;
    font-weight: 400;
    transition: all 0.25s;
    @media (hover: hover) {
      &:hover {
        color: var(--blue3);
      }
    }
  }

  .active {
    color: var(--blue3);
  }
`;

export { MenuLinkStyles };
