import styled from 'styled-components';

const EditAccountStyles = styled.main`
  min-height: 40vh;
  width: 450px;
  margin: 18rem auto;
  text-align: center;

  box-shadow: 0px 0px 3px 1px var(--blue5);
  padding: 5rem 3rem;

  h3 {
    font-size: 2.3rem;
    color: var(--blue3);
    font-weight: 400;
  }

  .back-to-account-btn {
    margin-top: 3rem;

    a {
      color: var(--blue3);
      transition: all 0.2s;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
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
