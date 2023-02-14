import styled from 'styled-components';

const UserDropdownStyles = styled.div`
  position: absolute;
  right: 0;
  top: var(--navHeight);
  background-color: var(--white);
  box-shadow: 0px 0px 3px 1px var(--offWhite);
  width: 150px;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  z-index: 10;

  transition: all 0.25s;
  transform: translateX(150%);

  ${props => props.userOpen && `transform: translateX(0%);`}

  hr {
    width: 100%;
    margin: 1rem 0;
    height: 1px;
    border: none;
    background-color: var(--blue4);
  }

  button {
    color: var(--blue3);
    border: none;
    background: transparent;
    margin: 0.5rem auto;
    padding: 0.6rem 2rem;
    text-align: center;
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.25s;

    @media (hover: hover) {
      &:hover {
        color: var(--blue2);
      }
    }
  }

  .user-title {
    font-size: 1.2rem;
    text-transform: lowercase;
    text-align: center;
    color: var(--dark);
  }
`;
export { UserDropdownStyles };
