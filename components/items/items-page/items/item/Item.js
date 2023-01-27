import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import Image from 'next/image';

import { ItemStyles } from './ItemStyles';
import placeholderImg from '../../../../../public/img/1px.png';

const CATEGORY_ITEM_QUERY = gql`
  query CATEGORY_ITEM_QUERY($category: String) {
    singleItems(
      filters: {
        items_categories: {
          categoryTitle: { eq: $category }
        }
      }
      pagination: { start: 0, limit: 1 }
    ) {
      data {
        id
        attributes {
          items_categories {
            data {
              attributes {
                categoryTitle
              }
            }
          }
          itemTitle
          image {
            data {
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

export default function Item({ categoryTitle }) {
  const { data } = useQuery(CATEGORY_ITEM_QUERY, {
    variables: {
      category: categoryTitle,
    },
  });

  const serviceItem = data?.singleItems?.data[0];

  return (
    <ItemStyles>
      <div className='service-item-image'>
        {serviceItem?.attributes?.image?.data[0]?.attributes
          ?.url && (
          <Image
            src={
              serviceItem?.attributes?.image?.data[0]
                ?.attributes?.url
            }
            width={100}
            height={100}
            objectFit='scale-down'
            alt={serviceItem?.attributes?.itemTitle}
            placeholder='blur'
            blurDataURL={placeholderImg}
          />
        )}
      </div>
    </ItemStyles>
  );
}
