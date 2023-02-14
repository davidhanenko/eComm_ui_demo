import styled from 'styled-components';

const ErrorMessageStyles = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--lightGray);
  padding: 2rem;
  z-index: 9999;
  width: 200px;
  height: 100px;

  p {
    font-size: 1.4rem;
    color: var(--red);
  }
`;

export { ErrorMessageStyles };
