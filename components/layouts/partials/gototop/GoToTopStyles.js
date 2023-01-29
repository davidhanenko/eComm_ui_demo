import styled from 'styled-components';

const GoToTopButtonStyles = styled.button`
  display: none;
  position: fixed;
  right: 10vw;
  bottom: 5%;
  height: 4rem;
  width: 4rem;
  color: var(--blue3);
  border: 1px solid var(--blue3);
  background-color: transparent;
  border-radius: 50%;
  transition: all 0.25s;
  z-index: var(--goToTopZ);
  cursor: pointer;
  ${props => props.visible && `display: block`};
  @media (hover: hover) {
    &:hover {
      background-color: var(--blue5);
      border-color: transparent;
    }
  }

  .btn-icon {
    transform: scale(1.2);
    font-size: 3rem;
    margin: 0;
    display: flex;
    justify-content: center;
    transition: all 0.1s;
  }

  @media print {
    display: none;
  }
`;

export { GoToTopButtonStyles };
