import { useState } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import { SingleItemStyles } from './SingleItemStyles';
import ImagesSlider from '../../../shared/sliders/images-slider/ImagesSlider';

import ItemPlaceholder from '../../../shared/placeholders/SingleItemPlaceholder';
import ItemDetails from './item-details/ItemDetails';

export default function SingleItem({ singleItem, link }) {
  const [sizePrice, setSizePrise] = useState([
    ...singleItem?.attributes?.sizePrice,
  ]);

  // sort by prices to show list of available sizes of item in asc order
  sizePrice.sort((a, b) => a.size - b.size);

  // functions from image slider/carousel
  const SLIDE_COUNT =
    singleItem?.attributes?.image?.data?.length;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  const itemsByIndex = index =>
    singleItem?.attributes?.image?.data[
      index % singleItem?.attributes?.image?.data?.length
    ];

  if (!singleItem) {
    <SingleItemStyles>
      <div className='item-image-container'>
        <ItemPlaceholder i={'singleItem'} />
      </div>
    </SingleItemStyles>;
  }

  return (
    <SingleItemStyles>
      <div className='item-image-container'>
        {singleItem?.attributes?.available === false && (
          <div className='not-available'>not available</div>
        )}
        {SLIDE_COUNT > 1 ? (
          <ImagesSlider
            slides={slides}
            itemsByIndex={itemsByIndex}
            title={singleItem?.attributes?.itemTitle}
          />
        ) : (
          <Image
            src={
              singleItem?.attributes?.image?.data[0]
                ?.attributes?.url
            }
            alt={
              singleItem?.attributes?.itemTitle ||
              'item image'
            }
            width={300}
            height={300}
            objectFit='scale-down'
            layout='responsive'
            // placeholder='blur'
            // blurDataURL={placeholderImg}
          />
        )}
      </div>

      <div className='item-description-container'>
        <p className='single-item-title'>
          {singleItem?.attributes?.itemTitle &&
            singleItem?.attributes?.itemTitle}
        </p>

        <hr />

        <ItemDetails
          item={singleItem?.attributes}
          itemDetails={sizePrice}
          id={singleItem?.id}
          link={link}
        />

        <hr />

        <ReactMarkdown className='single-item-description'>
          {singleItem?.attributes?.description &&
            singleItem?.attributes?.description}
        </ReactMarkdown>
      </div>
    </SingleItemStyles>
  );
}
