import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import Image from 'next/image';
import Link from 'next/link';

import { SubCategoryItemStyles } from './SubCategoryItemStyles';
import placeholderImg from '../../../../../public/img/1px.png';
import LoaderContainer from '../../../../shared/loaders/loader-container/LoaderContainer';

const SUBCATEGORY_ITEMS_QUERY = gql`
  query SUBCATEGORY_ITEMS_QUERY($itemsCategory: String!) {
    singleItems(
      filters: {
        items_categories: {
          categoryTitle: { eq: $itemsCategory }
        }
      }
      pagination: { start: 0, limit: 1 }
    ) {
      data {
        id
        attributes {
          items_categories {
            data {
              id
              attributes {
                categoryTitle
              }
            }
          }
          itemTitle
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default function SubCategoryListItem({
  subCategoryTitle,
  itemsTitle,
  service,
}) {
  const { data,loading } = useQuery(
    SUBCATEGORY_ITEMS_QUERY,
    {
      variables: {
        itemsCategory: subCategoryTitle,
      },
    }
  );

  const subCategoryItem =
    data?.singleItems?.data[0]?.attributes;

  return loading ? (
    <SubCategoryItemStyles>
      <LoaderContainer height={'250px'} />
    </SubCategoryItemStyles>
  ) : (
    <SubCategoryItemStyles>
      <Link
        href={{
          pathname: `/${service}/[items]/[collection]`,
          query: {
            items: itemsTitle,
            collection: subCategoryTitle,
          },
        }}
      >
        {subCategoryItem ? (
          <a>
            <Image
              className='sub-image'
              src={
                subCategoryItem?.image?.data[0]?.attributes
                  ?.url
              }
              width={150}
              height={150}
              objectFit='scale-down'
              alt={subCategoryItem?.itemTitle}
              placeholder='blur'
              blurDataURL={placeholderImg}
            />
            <hr />
            <h4 className='subcategory-title'>
              {subCategoryTitle}
            </h4>
          </a>
        ) : (
          <div className='no-item'>
            <Image
              src={placeholderImg}
              width={150}
              height={150}
              alt='image coming soon'
            />

            <h4 className='subcategory-title'>
              {subCategoryTitle}
            </h4>
            <p>Coming soon...</p>
          </div>
        )}
      </Link>
    </SubCategoryItemStyles>
  );
}
