import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import placeholderImg from '../../../../../public/img/1px.png';
import { CollectionItemStyles } from './CollectionItemStyles';

export default function CollectionItem({
  item,
  items,
  collection,
}) {
  const router = useRouter();
  // current service
  const service = router.asPath.split('/')[1];

  return (
    <CollectionItemStyles>
      <Link
        href={{
          pathname: `/[service]/[items]/[collection]/[single]`,
          query: {
            service: service,
            items: items,
            collection: collection,
            single: item?.itemTitle,
          },
        }}
      >
        <a>
          {item?.available === false && (
            <div className='not-available'>
              not available
            </div>
          )}
          <Image
            className='item-img'
            src={item?.image?.data[0]?.attributes?.url}
            width={150}
            height={150}
            objectFit='scale-down'
            alt={item?.itemTitle}
            placeholder='blur'
            blurDataURL={placeholderImg}
          />
          
          <hr />

          <h4 className='collection-item-title'>
            {item?.itemTitle}
          </h4>
        </a>
      </Link>
    </CollectionItemStyles>
  );
}
