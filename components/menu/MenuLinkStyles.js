import styled from 'styled-components';

const MenuLinkStyles = styled.div`
  font-size: 1.5rem;
  margin-right: 3rem;

  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    letter-spacing: 0.5px;
  }
  .link-title {
    margin: 0rem;
    padding: 1rem 0.3rem;
    color: var(--dark);
    text-transform: capitalize;
    font-weight: 400;
    transition: all 0.25s;

    @media (max-width: 650px) {
      margin: 1rem;

    }

    @media (hover: hover) {
      &:hover {
        color: var(--blue2);
      }
    }
  }

  .active {
    color: var(--blue2);
  }

  @media (min-width: 650px) {
    .active {
      color: var(--blue3);
    }
  }
`;

export { MenuLinkStyles };
