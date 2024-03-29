import styled from 'styled-components';

const ItemsSliderStyles = styled.div`
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  .embla__viewport {
    overflow: hidden;
    width: 100%;
  }

  .embla__viewport.is-draggable {
    cursor: move;
    cursor: grab;
  }

  .embla__viewport.is-dragging {
    cursor: grabbing;
  }

  .embla__container {
    display: flex;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .embla__slide {
    position: relative;
    @media (max-width: 600px) {
      min-width: 100%;
    }
  }

  .embla__slide__inner {
    position: relative;
    overflow: hidden;
    height: 100%;
  }

  .embla__slide__img {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: auto;
    min-height: 100%;
    min-width: 100%;
    max-width: none;
  }

  .embla__button {
    outline: 0;
    background-color: var(--offWhite);
    opacity: 0.5;
    box-sizing: content-box;
    padding: 1rem;
    border-radius: 50%;
    touch-action: manipulation;
    position: absolute;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
      fill: var(--yellow);
      opacity: 0.7;
      transition: fill 0.2s;
    }
    @media (hover: hover) {
      &:hover {
        svg {
          opacity: 1;
          fill: var(--green3);
        }
      }
    }
  }

  .embla__button:disabled {
    cursor: default;
    opacity: 0.3;
  }

  .embla__button__svg {
    width: 100%;
    height: 100%;
  }

  .embla__button--prev {
    left: -50px;

    @media (max-width: 600px) {
      left: 0px;
    }
  }

  .embla__button--next {
    right: -50px;

    @media (max-width: 600px) {
      right: 0px;
    }
  }
`;

export default ItemsSliderStyles;
