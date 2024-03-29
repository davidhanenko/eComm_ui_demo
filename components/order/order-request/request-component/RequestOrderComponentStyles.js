import styled from 'styled-components';

const RequestOrderComponentStyles = styled.div`
  margin-top: 10rem;
  padding: 3rem 1rem;
  border: 1px solid var(--yellow);
  font-size: 1.3rem;

  @media (max-width: 600px) {
    padding: 3rem 1rem;
  }

  hr {
    background-color: var(--yellow);
  }

  .sign-in-first {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    transition: all 0.2s;
    span {
      color: var(--linkBlue);
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .order-options {
    margin-top: 2rem;

    p {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    a {
      margin-right: 1.5rem;
      padding: 1rem;
      background-color: var(--yellow);
      color: white;
      border-radius: 2rem;
      transition: all 0.2s;

      @media (hover: hover) {
        &:hover {
          background-color: var(--green2);
        }
      }
    }
  }
`;

export { RequestOrderComponentStyles };
