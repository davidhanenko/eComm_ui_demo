import React, { useEffect } from 'react';
import Image from 'next/image';

import { SlideStyles } from './SlideStyles';

export default function Slide({
  slidesByIndex,
  index,
  setAnimation,
  animation,
}) {
  const Btn = React.forwardRef(
    ({ onClick, href, title }, ref) => {
      return (
        <a href={href} ref={ref}>
          {title}
        </a>
      );
    }
  );

  useEffect(() => {
    let mounted = true;
    mounted && setAnimation(false);
    return () => (mounted = false);
  }, [animation]);

  return (
    <SlideStyles>
      <>
        <Image
          className='embla__slide__img'
          src={
            slidesByIndex(index)?.attributes?.bgImage?.data
              ?.attributes?.url
          }
          objectFit='cover'
          layout='fill'
          alt=''
        />

        <div className='image-1'>
          <Image
            width={200}
            height={200}
            src={
              slidesByIndex(index)?.attributes?.image1?.data
                ?.attributes?.url
            }
            alt=''
            objectFit='scale-down'
          />
        </div>
        <div className='image-2'>
          <Image
            width={200}
            height={200}
            src={
              slidesByIndex(index)?.attributes?.image2?.data
                ?.attributes?.url
            }
            alt=''
            objectFit='scale-down'
          />
        </div>
      </>

      <a
        href={`/${
          slidesByIndex(index)?.attributes?.service
        }`}
      >
        <button className='slide-btn' type='button'>
          view more
        </button>
      </a>

      <div className='slide-header'>
        <h2>{slidesByIndex(index)?.attributes?.slogan}</h2>
        <h4>
          {slidesByIndex(index)?.attributes?.description}
        </h4>
      </div>
    </SlideStyles>
  );
}
