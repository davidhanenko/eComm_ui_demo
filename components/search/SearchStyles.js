import styled from 'styled-components';

const SearchStyles = styled.div`
  /* position: absolute; */
  display: flex;
  width: 350px;
  height: var(--searchHeight);
  opacity: 1;
  transition: all 0.25s;
  top: var(--navHeight);
  ${props =>
    props.scroll &&
    `-webkit-animation:transition: all 0.25s;;
    opacity: 0;
    height: 0;`};


`;

export { SearchStyles };
