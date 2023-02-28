import styled from 'styled-components';

const ForgotPswdReqStyles = styled.div`
  width: 450px;
  margin: 18rem auto;
  text-align: center;
  min-height: 50vh;
  box-shadow: 0px 0px 3px 1px var(--blue5);
  padding: 5rem 3rem;

  h1 {
    font-size: 2.6rem;
    color: var(--blue3);
    font-weight: 400;
  }

  @media (max-width: 800px) {
    width: 70vw;
  }

  @media (max-width: 600px) {
    width: 90vw;
    padding: 5rem 1rem;
    h1 {
      font-size: 2.2rem;
    }
  }

  .cancel-reset {
    margin-top: 4rem;
    a {
      font-size: 1.3rem;
      color: var(--blue3);
    }
  }
`;

export { ForgotPswdReqStyles };
