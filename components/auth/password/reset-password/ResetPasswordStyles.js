import styled from 'styled-components';

const ResetPswdStyles = styled.div`
  width: 450px;
  margin: 18rem auto;
  text-align: center;
  min-height: 50vh;
  box-shadow: 0px 0px 3px 1px var(--green2);
  padding: 5rem 3rem;

  h1 {
    font-size: 2.6rem;
    color: var(--green4);
    font-weight: 400;
  }

  @media (max-width: 800px) {
    width: 70vw;
  }

  @media (max-width: 600px) {
    width: 90vw;
    padding: 5rem 1rem;
  }
`;

export { ResetPswdStyles };
