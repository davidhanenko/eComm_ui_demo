import React, { useState, useEffect, useCallback } from 'react';
import { PrevButton, NextButton } from '../SliderButtons';
import { useEmblaCarousel } from 'embla-carousel/react';
import ImagesSliderStyles from './ImagesSliderStyles';

import ImageSlide from './ImageSlide';
import useMediaQuery from '../../../../lib/useMediaQuery';
import { TOGGLE_WIDTH } from '../../../../config';

const ImagesSlider = ({ slides, itemsByIndex, title }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 1,
    containScroll: 'keepSnap',
    skipSnaps: false,
    align: 0,
    loop: true,
  });

  const isToggled = useMediaQuery(TOGGLE_WIDTH);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  // const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  useEffect(() => {
    if (isToggled) {
      setPrevBtnEnabled(true);
      setNextBtnEnabled(true);
    }
  }, [isToggled]);


  return (
    <ImagesSliderStyles className='embla'>
      <div className='embla__viewport' ref={viewportRef}>
        <div className='embla__container'>
          {slides.map(index => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__inner'>
                <ImageSlide
                  itemsByIndex={itemsByIndex}
                  index={index}
                  title={title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton
        onClick={scrollPrev}
        enabled={prevBtnEnabled}
        aria-label='Previous slide'
      />
      <NextButton
        onClick={scrollNext}
        enabled={nextBtnEnabled}
        aria-label='Next slide'
      />
    </ImagesSliderStyles>
  );
};

export default ImagesSlider;
