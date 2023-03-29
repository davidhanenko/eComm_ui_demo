import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import LoaderContainer from '../../../../shared/loaders/loader-container/LoaderContainer';
import { CollectionItemStyles } from './CollectionItemStyles';

export default function CollectionItem({
  item,
  items,
  collection,
  loading,
}) {
  const router = useRouter();
  // current service
  const service = router.asPath.split('/')[1];

  if (loading) {
    return (
      <CollectionItemStyles>
        <LoaderContainer height={'250px'} />
      </CollectionItemStyles>
    );
  }

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
