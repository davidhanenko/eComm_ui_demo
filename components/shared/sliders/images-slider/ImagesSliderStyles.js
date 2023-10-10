import styled from 'styled-components';

const ImagesSliderStyles = styled.div`
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
    min-width: 100%;
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
    cursor: pointer;
    background-color: transparent;
    touch-action: manipulation;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    fill: blue;
    padding: 0;

    svg {
      fill: var(--yellow);
      opacity: 0.5;
      transition: fill 0.2s;
    }

    @media (hover: hover) {
      &:hover {
        svg {
          fill: var(--green3);
          opacity: 0.8;
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
    left: 27px;
  }

  .embla__button--next {
    right: 27px;
  }
`;

export default ImagesSliderStyles;
