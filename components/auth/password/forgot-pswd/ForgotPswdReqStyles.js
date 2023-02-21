import styled from 'styled-components';

const ForgotPswdReqStyles = styled.div`
  width: 450px;
  margin: 18rem auto;
  text-align: center;
  min-height: 50vh;

  h1 {
    font-size: 3rem;
    color: var(--blue3);
    font-weight: 400;
  }

  @media (max-width: 800px) {
    width: 70vw;
  }

  @media (max-width: 600px) {
    width: 90vw;
    h1 {
      font-size: 2.2rem;
    }
  }

  .is-password {
    font-size: 1.3rem;
    margin-top: 4rem;
    span {
      color: var(--blue3);
    }
  }
`;

export { ForgotPswdReqStyles };
