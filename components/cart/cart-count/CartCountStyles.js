import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.3);
    }
  100% {
    transform: scale(1);
    }
`;

const CartCountStyles = styled.div`
  position: absolute;
  right: -1.5rem;
  top: -0.4rem;
  user-select: none;
  margin: 0;
  background-color: var(--red);
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  animation: ${props => props.animate && animation} 0.5s
    cubic-bezier(0, 0, 0, 0.4);
  div {
    box-sizing: content-box;
    margin: 0;
    font-size: 1.2rem;
    color: var(--white);
    line-height: 1;
    font-feature-settings: 'tnum';
    font-variant-numeric: tabular-nums;
  }
`;

export { CartCountStyles };
