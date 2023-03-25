import styled from 'styled-components';

const SignupStyles = styled.div`
  min-height: 40vh;
  width: 450px;
  margin: 15rem auto;
  text-align: center;

  box-shadow: 0px 0px 3px 1px var(--green);
  padding: 2rem;

  h3 {
    font-size: 2.5rem;
    color: var(--green);
    font-weight: 400;
    margin: 0;
  }

  @media (max-width: 800px) {
    width: 70vw;
  }

  @media (max-width: 600px) {
    width: 90vw;
    padding: 5rem 1rem;
  }

  .divider {
    margin: 2rem auto;
    position: relative;
    width: 80%;
    color: var(--green);

    &::before {
      content: '';
      position: absolute;
      bottom: 50%;
      left: 0;
      width: 45%;
      height: 1px;
      background-color: var(--green);
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 50%;
      right: 0;
      width: 45%;
      height: 1px;
      background-color: var(--green);
    }
  }
`;

const FormStyles = styled.form`

  fieldset {
    border: 1px solid transparent;
    outline: none;
    margin-bottom: 1.8rem;
    padding: 0 2rem;
    position: relative;

    label {
      display: flex;
      justify-self: start;
      color: var(--lightGray);
      font-size: 1.4rem;
      user-select: none;
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
      font-size: 1.05rem;
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
    margin-top: 3rem;
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

  span {
    color: var(--blue3);
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const SignUpSessionStyles = styled.div`
  min-height: 30vh;

  width: 450px;
  margin: 18rem auto;
  padding: 5rem 3rem;
  text-align: center;
  height: 100%;

  box-shadow: 0px 0px 3px 1px var(--green);

  p {
    font-size: 2rem;
    color: var(--dark);
  }

  span {
    color: var(--blue1);
  }

  hr {
    margin: 5rem 0;
    border: none;
    height: 1px;
    background-color: var(--green);
  }

  a {
    color: var(--blue3);

    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  button {
    display: block;
    margin: 2rem auto;
    border: none;
    outline: none;
    background: none;
    color: var(--blue3);
    cursor: pointer;
  }

  @media (hover: hover) {
    a,
    button {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 600px) {
    width: 90vw;
    padding: 5rem 1rem;

    p {
      font-size: 1.6rem;
    }
  }
`;

export {
  SignupStyles,
  FormStyles,
  FooterStyles,
  SignUpSessionStyles,
};
