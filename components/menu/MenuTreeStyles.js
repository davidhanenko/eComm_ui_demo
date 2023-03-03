import styled from 'styled-components';

const MenuTreeStyles = styled.ul`
  display: flex;
  align-items: center;
  background: var(--blue3);
  margin: 0;
  padding: 0.3rem 3rem;
  height: var(--menuTreeHeight);
  position: fixed;
  top: calc(var(--layoutHeaderHeight) + 6px);

  width: 100%;
  z-index: 2;

  @media (max-width: 850px) {
    padding: 0.2rem 3rem;
    top: calc(
      var(--layoutHeaderHeight) - var(--menuTreeHeight)
    );
  }
`;

const TreeNodeStyles = styled.li`
  display: inline;
  font-size: 1.2rem;
  font-weight: 300;
  text-transform: capitalize;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
  a {
    user-select: none;
    color: var(--white);
    text-decoration: none;
    transition: all 0.3s;
    padding-right: 0.3rem;

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
