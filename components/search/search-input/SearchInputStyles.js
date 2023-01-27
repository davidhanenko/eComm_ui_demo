import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  from {
    box-shadow: 0 0 0px var(--blue4);
  }

  to {
    box-shadow: 0 0 4px 2px var(--blue4);
  }
`;

const SearchInputStyles = styled.input`
  border: 1px solid var(--blue4);
  height: 100%;
  width: 100%;
  outline: 0;
  padding-left: 3rem;
  background: var(--offWhite);
  position: relative;

  &::placeholder {
    color: var(--gray);
    font-weight: 100;
  }
  &.loading {
    animation: ${glow} 0.6s ease-in-out infinite alternate;
  }
`;

export { SearchInputStyles };
