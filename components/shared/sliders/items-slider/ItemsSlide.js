import Image from 'next/image';
import Link from 'next/link';

import { ItemsSlideStyles } from './ItemsSlideStyles';

import placeholderImg from '../../../../public/img/1px.png';
import SlidePlaceholder from '../../placeholders/SlidePlaceholder';

export default function Slide({
  itemsByIndex,
  index,
  service,
  loading,
}) {
  if (loading) {
    return (
      <ItemsSlideStyles>
        <SlidePlaceholder i={index} />
      </ItemsSlideStyles>
    );
  }
  return (
    <ItemsSlideStyles>
      <Link
        href={{
          pathname: `/${service}/[items]`,
          query: {
            items: itemsByIndex(index)?.attributes?.title,
          },
        }}
        key={itemsByIndex(index)?.id}
      >
        <a>
          <div className='item'>
            {itemsByIndex(index)?.attributes?.category
              ?.data[0]?.attributes?.singleItem?.data[0]
              ?.attributes?.image?.data[0]?.attributes
              ?.url ? (
              <Image
                className='embla__slide__img item-image'
                src={
                  itemsByIndex(index)?.attributes?.category
                    ?.data[0]?.attributes?.singleItem
                    ?.data[0]?.attributes?.image?.data[0]
                    ?.attributes?.url
                }
                alt={itemsByIndex(index)?.attributes?.title}
                width={300}
                height={300}
                layout='responsive'
                placeholder='blur'
                blurDataURL={placeholderImg}
              />
            ) : (
              <div className='no-items'>
                <Image
                  src={placeholderImg}
                  alt='item image'
                  width={300}
                  height={300}
                  layout='responsive'
                />
                <div>
                  <p>Coming soon...</p>
                </div>
              </div>
            )}
            <h3 className='item-title'>
              {itemsByIndex(index)?.attributes?.title}
            </h3>
          </div>
        </a>
      </Link>
    </ItemsSlideStyles>
  );
}
