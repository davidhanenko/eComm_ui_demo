import styled from 'styled-components';

const UserDropdownStyles = styled.div`
  position: absolute;
  top: var(--navHeight);
  background-color: var(--white);
  box-shadow: 0px 0px 3px 1px var(--offWhite);

  width: 100px;
  height: 150px;

  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  z-index: 3;

  display: none;

  transition: all 0.25s;

  ${props => props.userOpen && `display: flex;`}

  a {
    margin: 0 auto;
    padding: 0.4rem 0;
    text-align: center;
    text-transform: capitalize;
    font-size: 1.5rem;
    width: 100%;
  }
`;
export { UserDropdownStyles };
