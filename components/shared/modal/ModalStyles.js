import styled from 'styled-components';

const ModalStyles = styled.button`
  color: var(--linkBlue);
  display: block;
  margin: 0 auto;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: capitalize;
  background: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ModalContainer = styled.dialog`
  max-height: 70vh;
  width: 60vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: scroll;
  background-color: var(--white);
  border: none;
  display: none;
  margin-top: -3rem;
  padding: 3rem 4rem;
  text-align: justify;
  z-index: calc(var(--goToTopZ) + 6);

  box-shadow: var(--bs);

  ${props => props.isModalOpen && `display: block;`};

  @media (max-width: 750px) {
    width: 90vw;
  }

  h3 {
    color: var(--green4);
  }

  p {
    text-align: start;
  }

  button {
    margin-top: 2rem;
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: 300;
    text-transform: capitalize;
    outline: none;
    background: none;
    color: var(--green4);
    border: 1px solid var(--green4);
    padding: 0.25rem 1rem;
    transition: all 0.2s;

    &:hover {
      border: 1px solid var(--yellow);
    }
  }
`;

export { ModalStyles, ModalContainer };
