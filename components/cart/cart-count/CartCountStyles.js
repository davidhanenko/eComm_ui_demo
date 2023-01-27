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
  margin: 0;
  margin-bottom: 1.75rem;
  background-color: var(--red);
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  animation: ${props => props.animate && animation} 0.7s
    cubic-bezier(0, 0, 0, 0.4);
  div {
    margin: 0;
    font-size: 1.3rem;
    color: var(--white);
    line-height: 1.3rem;
    font-feature-settings: 'tnum';
    font-variant-numeric: tabular-nums;
  }
`;

export { CartCountStyles };
