import styled from 'styled-components';

const MenuTreeStyles = styled.ul`
  background: var(--blue3);
  margin: 0;
  padding: 0.7rem 3rem;
`;

const TreeNodeStyles = styled.li`
  display: inline;
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: capitalize;
  a {
    user-select: none;
    color: var(--white);
    text-decoration: none;
    transition: all 0.3s;
    @media (hover: hover) {
      &:hover {
        color: var(--gray);
      }
    }
  }
  &:last-of-type {
    a {
      color: var(--gray);
      pointer-events: none;
    }
  }
  &:before {
    content: ' / ';
    padding: 0 0.2rem;
  }
  &:first-of-type {
    &:before {
      content: none;
    }
  }
`;

export { MenuTreeStyles, TreeNodeStyles };
