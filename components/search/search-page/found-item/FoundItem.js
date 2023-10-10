import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { FoundItemStyles } from './FoundItemStyles';

export default function FoundItem({ item }) {
  const [minPrice, setMinPrice] = useState();
  const [sizePrice, setSizePrise] = useState([
    ...item.sizePrice,
  ]);

  useEffect(() => {
    if (!item?.price) {
      sizePrice.sort((a, b) => a.price - b.price);

      setMinPrice(prev => sizePrice[0]?.price);
    } else {
      setMinPrice(prev => item?.price);
    }
  }, []);

  // service - url
  const service =
    item?.category?.data[0]?.attributes?.items?.data[0]
      ?.attributes?.services?.data[0]?.attributes?.service;
  // category of items - url
  const items =
    item?.category?.data[0]?.attributes?.items?.data[0]
      ?.attributes?.title;
  // collection of items - url
  const collection =
    item?.category?.data[0]?.attributes?.categoryTitle;
  // single item - url
  const singleItem = item?.itemTitle;

  return (
    <FoundItemStyles>
      <Link
        href={{
          pathname: `/[service]/[items]/[collection]/[single]`,
          query: {
            service: `${service}`,
            items: `${items}`,
            collection: `${collection}`,
            single: `${singleItem}`,
          },
        }}
      >
        <a>
          <Image
            className='item-img'
            src={item?.image?.data[0]?.attributes?.url}
            alt={item?.itemTitle}
            width={200}
            height={200}
            objectFit='scale-down'
          />

          <p className='price-from'>
            {minPrice ? (
              !item.price ? (
                `from $${minPrice}`
              ) : (
                `$${minPrice}`
              )
            ) : (
              <p></p>
            )}
          </p>
          <h4>{item?.itemTitle}</h4>
        </a>
      </Link>
    </FoundItemStyles>
  );
}
