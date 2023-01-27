import styled from 'styled-components';

const ModalStyles = styled.dialog`
  max-height: 70vh;
  width: 60vw;
  overflow-y: scroll;
  background-color: #fff;
  border: none;
  display: none;
  margin-top: -3rem;
  padding: 3rem 4rem;
  text-align: justify;
  z-index: calc(var(--goToTopZ) + 3);
  ${props => props.showModal && `display: block;`};

  @media(max-width: 750px) {
    width: 90vw;
  } 

  button {
    margin-top: 2rem;
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: 300;
  }
`;

export { ModalStyles };
