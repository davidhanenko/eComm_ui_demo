import styled from 'styled-components';

const SigninStyles = styled.div`
  width: 450px;
  margin: 15rem auto;
  text-align: center;
  min-height: 50vh;

  box-shadow: 0px 0px 3px 1px var(--green);
  padding: 2rem;

  h3 {
    font-size: 2.5rem;
    color: var(--green4);
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

const GoogleBtnStyles = styled.button`
  height: 4rem;
  padding: 1.5rem;
  margin-top: 4rem;
  background-color: var(--lightGray);
  color: var(--white);
  border-radius: 2rem;
  border: none;
  text-transform: uppercase;
  transition: all 0.25s;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background-color: var(--yellow);
    }

    div {
      height: 100%;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .icon-google {
        font-size: 1.8rem;
        margin-left: 1rem;
      }
    }
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const FormStyles = styled.form`
  margin-top: 2rem;

  fieldset {
    border: 1px solid transparent;
    outline: none;
    margin-bottom: 2rem;
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
      border: 1px solid var(--yellow);
      color: var(--gray);
      outline: none;
      background: transparent;
      padding: 0.6rem 0.5rem;
      width: 100%;
      height: 100%;
      font-size: 1.5rem;
      font-weight: 400;
      transition: all 0.25s ease;

      &:focus {
        border: 1px solid var(--green2);
        box-shadow: 0px 0px 2px 1px var(--green2);
      }

      &::placeholder {
        font-weight: 100;
        opacity: 0.8;
        font-size: 1.3rem;
      }
    }

    .input-dirty {
      border: 1px solid var(--green2);
    }

    .input-error {
      font-size: 1rem;
      color: var(--red);
      font-weight: 300;
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
    margin-top: 1rem;
    background-color: var(--green2);
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
        background-color: var(--yellow);
      }
    }

    @media (max-width: 600px) {
      padding: 1.25rem;
      font-size: 1.1rem;
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
    color: var(--linkBlue);
    font-size: 1.3rem;
    transition: all 0.2s;

    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export {
  SigninStyles,
  GoogleBtnStyles,
  FormStyles,
  FooterStyles,
};
