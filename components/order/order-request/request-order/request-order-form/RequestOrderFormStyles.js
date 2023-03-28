import styled from 'styled-components';

const RequestOrderFormStyles = styled.form`
  margin-top: 5rem;

  fieldset {
    border: 1px solid transparent;
    max-height: 12rem;
    outline: none;
    margin-bottom: 2rem;
    padding: 0 2rem;
    position: relative;

    input,
    textarea {
      border: 1px solid var(--yellow);
      color: var(--gray);
      outline: none;
      background: transparent;
      padding: 0.6rem 0.5rem;
      width: 100%;
      height: 100%;
      font-size: 1.4rem;
      font-weight: 400;
      transition: all 0.25s ease;

      &:focus {
        border: 1px solid var(--green2);
        box-shadow: 0px 0px 2px 0px var(--green2);
        margin-left: 5px;
      }

      &::placeholder {
        font-weight: 300;
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
    margin-bottom: 3rem;
    background-color: var(--green2);
    color: var(--white);
    border-radius: 2rem;
    border: none;
    text-transform: uppercase;
    transition: all 0.2s;

    div {
      width: 100%;
    }

    &:hover {
      cursor: pointer;
      background-color: var(--yellow);
    }

    @media (max-width: 600px) {
      padding: 1.25rem;
    }
  }
`;

export { RequestOrderFormStyles };
