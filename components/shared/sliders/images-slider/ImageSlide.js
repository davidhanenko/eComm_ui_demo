import Image from 'next/image';

import placeholderImg from '../../../../public/img/1px.png';
import { ImageSlideStyles } from './ImageSlideStyles';

export default function ImageSlide({
  itemsByIndex,
  index,
  title,
}) {
  return (
    <ImageSlideStyles>
      <Image
        className='embla__slide__img item-image'
        src={itemsByIndex(index)?.attributes?.url}
        alt={title}
        width={300}
        height={300}
        objectFit='scale-down'
        layout='responsive'
        placeholder='blur'
        blurDataURL={placeholderImg}
      />
    </ImageSlideStyles>
  );
}
