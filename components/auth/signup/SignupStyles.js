import styled from 'styled-components';

const SignupStyles = styled.div`
  margin-top: calc(var(--navHeight) + var(--searchHeight));

  width: 450px;
  margin: 15rem auto;
  text-align: center;

  h1 {
    font-size: 3.5rem;
    color: var(--blue3);
  }

  @media (max-width: 800px) {
    width: 70vw;
  }

  @media (max-width: 600px) {
    width: 90vw;
  }
`;

const FormStyles = styled.form`
  margin-top: 5rem;

  fieldset {
    border: 1px solid transparent;
    outline: none;
    margin-bottom: 2.5rem;
    padding: 0 2rem;
    position: relative;

    label {
      display: flex;
      justify-self: start;
      color: var(--gray);
      font-size: 1.4rem;
    }

    input,
    textarea {
      border: 1px solid var(--blue4);
      color: var(--dark);
      outline: none;
      background: transparent;
      padding: 0.6rem 0.5rem;
      width: 100%;
      height: 100%;
      font-size: 1.5rem;
      font-weight: 400;
      transition: all 0.25s ease;

      &:focus {
        border: 1px solid var(--blue2);
      }

      &::placeholder {
        font-weight: 100;
        opacity: 0.8;
        font-size: 1.3rem;
      }
    }

    .input-dirty {
      border: 1px solid var(--blue2);
      box-shadow: 0px 0px 2px 1px var(--blue5);
    }

    .input-error {
      font-size: 1rem;
      color: var(--red);
      position: absolute;
      left: 2rem;
      bottom: -1.8rem;
    }
  }

  .price-not-available-note {
    font-size: 1.2rem;
    padding: 5rem 3rem 3rem 1rem;
  }

  button {
    width: 20rem;
    height: 4rem;
    padding: 1rem;
    margin-top: 4rem;
    background-color: var(--blue3);
    color: var(--white);
    border-radius: 2rem;
    border: none;
    text-transform: uppercase;
    transition: all 0.25s;

    div {
      width: 100%;
    }

    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        background-color: var(--blue2);
      }
    }

    @media (max-width: 600px) {
      padding: 1.25rem;
    }
  }
`;

const FooterStyles = styled.footer`
  margin-top: 5rem;
  p {
    margin: 0.5rem 0;
    font-size: 1.3rem;
  }

  a {
    color: var(--blue3);

    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export { SignupStyles, FormStyles, FooterStyles };
