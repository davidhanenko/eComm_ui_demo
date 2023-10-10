import styled from 'styled-components';

const ModalStyles = styled.dialog`
  max-height: 70vh;
  width: 60vw;
  overflow-y: scroll;
  background-color: var(--white);
  box-shadow: var(--bs);
  border: none;
  display: none;
  margin-top: -3rem;
  padding: 3rem 4rem;
  text-align: justify;
  z-index: calc(var(--goToTopZ) + 3);
  ${props => props.showModal && `display: block;`};

  @media (max-width: 750px) {
    width: 90vw;
  }

  p {
    text-align: left;
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

export { ModalStyles };
