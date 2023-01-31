import styled from 'styled-components';

const OrderFormStyles = styled.form`
  margin-top: 5rem;

  fieldset {
    border: 1px solid transparent;
    max-height: 12rem;
    outline: none;
    position: relative;
    margin-bottom: 2rem;
    padding: 0 2rem;

    &:focus-within label {
      color: var(--dark);
      opacity: 1;
      background: var(--blue3);
      width: 7rem;
      max-height: 12rem;
    }

    input,
    textarea {
      border: 1px solid var(--blue4);
      color: var(--dark);
      outline: none;
      background: transparent;
      padding: 0.9rem 0.5rem;
      width: 100%;
      height: 100%;
      font-size: 1.5rem;
      font-weight: 100;
      transition: all 0.3s ease;

      &:focus {
        border: 1px solid var(--blue2);
        margin-left: 5px;
      }
    }
  }

  .price-not-available-note {
    font-size: 1.2rem;
    padding: 5rem 3rem 2rem 1rem;
  }
  button {
    padding: 1rem;
    /* margin-top: 10rem; */
    background-color: var(--blue3);
    color: var(--white);
    border-radius: 2rem;
    border: none;
    text-transform: uppercase;
    transition: all 0.25s;

    @media (hover: hover) {
      &:hover {
        cursor: pointer;
        background-color: var(--blue2);
      }
    }
  }
`;

export { OrderFormStyles };
