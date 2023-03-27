import styled from 'styled-components';

const EmailFormStyles = styled.form`
  color: var(--dark);
  flex: 1 1 400px;

  display: flex;
  justify-content: center;

  .form {
    background: var(--white);
    box-shadow: var(--bs);

    padding:3rem 2rem;
    width: 450px;

    .input-field {
      border: 1px solid transparent;
      max-height: 12rem;
      outline: none;
      position: relative;
      margin-bottom: 3rem;
      padding: 0;

      &:focus-within label {
        color: var(--gray);
        opacity: 1;
        background: var(--green4);
        width: 7rem;
        max-height: 12rem;
      }

      input,
      textarea {
        border: 1px solid var(--green2);
        outline: none;
        background: transparent;
        padding: 0.9rem 0.5rem;
        width: 100%;
        height: 100%;
        font-size: 1.5rem;
        font-weight: 300;
        transition: all 0.25s ease;

        &:focus {
          border: 1px solid var(--yellow2);
          margin-left: 7rem;
          width: calc(100% - 7rem);
        }
      }

      label {
        opacity: 0.5;
        position: absolute;
        padding-left: 0.5rem;
        padding-top: 0.3rem;
        height: 100%;
        max-height: 100%;
        transition: all 0.3s ease;
        font-size: 1.5rem;
      }

      .input-dirty {
        margin-left: 7rem;
        width: calc(100% - 7rem);
      }

      .label-dirty {
        opacity: 1;
        background: var(--green4);
        width: 7rem;
      }

      .input-error {
        position: absolute;
        color: var(--red);
        font-size: 1.3rem;
        right: 0;
        top: -2.5rem;
      }
    }
  }
`;

const EmailSendBtn = styled.button`
  display: inline-block;
  padding: 1.5rem 2.5rem;
  border: none;
  color: var(--white);
  text-transform: uppercase;
  font-size: 1.6rem;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;

  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--green2);
    z-index: -2;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: var(--green4);
    transition: all 0.3s;
    z-index: -1;
  }

  @media (hover: hover) {
    &:hover {
      color: var(--white);
      &:before {
        width: 100%;
      }
    }
  }
`;

export { EmailFormStyles, EmailSendBtn };
