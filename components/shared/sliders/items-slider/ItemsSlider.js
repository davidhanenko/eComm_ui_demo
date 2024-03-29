import React, { useState, useEffect, useCallback } from 'react';
import { PrevButton, NextButton } from '../SliderButtons';
import { useEmblaCarousel } from 'embla-carousel/react';
import ItemsSliderStyles from './ItemsSliderStyles';

import ItemsSlide from './ItemsSlide';
import useMediaQuery from '../../../../lib/useMediaQuery';

const ItemsSlider = ({ slides, itemsByIndex, service, loading}) => {
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 1,
    containScroll: 'keepSnap',
    skipSnaps: false,
    align: 0,
    loop: true,
  });

  const isToggled = useMediaQuery(1000);

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
    if (!isToggled) {
      setPrevBtnEnabled(false);
      setNextBtnEnabled(false);
    }
  }, [isToggled]);


  return (
    <ItemsSliderStyles className='embla'>
      <div className='embla__viewport' ref={viewportRef}>
        <div className='embla__container'>
          {slides.map(index => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__inner'>
                {!loading && <ItemsSlide
                  itemsByIndex={itemsByIndex}
                  index={index}
                  service={service}
                  loading={loading}
                />}
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
    </ItemsSliderStyles>
  );
};

export default ItemsSlider;
