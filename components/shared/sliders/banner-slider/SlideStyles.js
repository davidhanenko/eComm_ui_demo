import styled, { keyframes } from 'styled-components';

const fadeInR = keyframes`
    0% {
      transform: translate(50%);
    }
    100% {
        transform: translate(0%);
        opacity: 1;
    }
  `;
const fadeInL = keyframes`
    0% {
      transform: translate(-50%);
    }
    100% {
        transform: translate(0%);
        opacity: 1;
    }
  `;

const btnAnimation = keyframes`
    0% {
      transform: scaleY(0);
      opacity: 0;
    }
    100% {
      transform: scaleY(1);
      opacity: 1;
    }
  `;

const slideHeaderAnimation = keyframes`
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
      opacity: 1;
    }
  `;

const SlideStyles = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  .image-1 {
    display: inline-block;
    position: absolute;
    left: 25%;
    top: 18em;
    opacity: 0;
    max-width: 200px;
    max-height: 200px;

    animation: ${fadeInL} 1.3s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;

    @media (max-width: 601px) {
      max-width: 40%;
      max-height: 40%;
    }
  }
  .image-2 {
    display: inline-block;
    position: absolute;
    right: 25%;
    top: 8em;
    opacity: 0;
    max-width: 200px;
    max-height: 200px;

    animation: ${fadeInR} 1.3s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;

    @media (max-width: 601px) {
      max-width: 40%;
      max-height: 40%;
    }
  }

  .slide-btn {
    position: absolute;
    bottom: 20%;
    right: 15%;
    display: block;
    cursor: pointer;
    background: var(--green3);
    color: var(--white);
    border: none;
    z-index: 2;
    text-transform: uppercase;
    padding: 1.5rem 2rem;
    transform-origin: bottom;

    opacity: 0;

    animation: ${btnAnimation} 1s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    transition: all 0.2s;

    @media (hover: hover) {
      &:hover {
        color: var(--yellow);
      }
    }
  }

  .slide-header {
    position: absolute;
    top: 8rem;
    background: #00000050;
    padding: 3rem;
    padding-left: 5rem;
    height: 18rem;

    h2 {
      background: transparent;
      margin: 0;
      font-size: 3.5rem;
      color: white;
      text-transform: uppercase;
      transform-origin: top;
      animation: ${slideHeaderAnimation} 1s;
    }
    p {
      font-size: 2rem;
      color: white;
      margin: 0;
      text-transform: uppercase;
      opacity: 0;
      transform-origin: top;
      animation: 1s ${slideHeaderAnimation};
      animation-delay: 0.6s;
      animation-fill-mode: forwards;
    }
  }
`;

export { SlideStyles };
