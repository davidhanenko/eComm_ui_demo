import styled from 'styled-components';

const EditAccountStyles = styled.main`
  min-height: 40vh;
  width: 450px;
  margin: 18rem auto;
  text-align: center;

  box-shadow: var(--bs);
  padding: 5rem 3rem;

  h3 {
    font-size: 2.3rem;
    color: var(--green2);
    font-weight: 400;
    text-transform: capitalize;
    padding: 1rem 0;
    border-bottom: 1px solid var(--green4);
  }

  .back-to-account-btn {
    margin-top: 3rem;

    a {
      color: var(--linkBlue);
      transition: all 0.2s;

      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 800px) {
    width: 70vw;
  }

  @media (max-width: 600px) {
    width: 90vw;
    padding: 5rem 1rem;
  }
`;

export { EditAccountStyles };
