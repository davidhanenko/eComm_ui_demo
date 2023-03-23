import { useEffect, useState } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaRegTimesCircle } from 'react-icons/fa';

import { SingleItemStyles } from './SingleItemStyles';
import ImagesSlider from '../../../shared/sliders/images-slider/ImagesSlider';

import ItemPlaceholder from '../../../shared/placeholders/SingleItemPlaceholder';
import ItemDetails from './item-details/ItemDetails';

export default function SingleItem({ singleItem, link }) {
  const [sizePrice, setSizePrise] = useState([
    ...singleItem?.attributes?.sizePrice,
  ]);

  const [qty, setQty] = useState(
    singleItem?.attributes?.quantity
  );

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

  useEffect(() => {
    if (singleItem?.attributes?.quantity) {
      setQty(singleItem?.attributes?.quantity);
    }
  }, [qty]);

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
        <div className='item-image'>
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
            />
          )}
        </div>
        <div className='availability'>
          {singleItem?.attributes?.isAvailable === false ||
          qty === 0 ? (
            <div className='not-available'>
              <FaRegTimesCircle /> <p> not available</p>
            </div>
          ) : (
            <div className='is-available'>
              {' '}
              <AiOutlineCheckCircle /> <p>In Stock</p>
            </div>
          )}

          <div className='available-quantity'>
            {(qty === 0 || qty > 0) && (
              <p>items available - {qty}</p>
            )}

            {/* {qty > 0 && <p>items available - {qty}</p>} */}
          </div>
        </div>
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
          qty={qty}
          setQty={setQty}
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
