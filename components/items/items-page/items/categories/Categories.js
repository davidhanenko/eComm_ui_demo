import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

import Item from '../item/Item';
import { CategoriesStyles } from './CategoriesStyles';
import LoaderContainer from '../../../../shared/loaders/loader-container/LoaderContainer';

const ITEMS_COMPONENT_QUERY = gql`
  query ITEMS_COMPONENT_QUERY($items: String) {
    itemsCategories(
      filters: { items: { title: { eqi: $items } } }
      pagination: { start: 0, limit: 4 }
    ) {
      data {
        id
        attributes {
          categoryTitle
          items {
            data {
              attributes {
                title
              }
            }
          }
        }
      }
    }
  }
`;

export default function Categories({
  itemsTitle,
  service,
  page,
}) {
  const { data, loading } = useQuery(
    ITEMS_COMPONENT_QUERY,
    {
      variables: {
        items: itemsTitle,
      },
    }
  );

  const categories = data?.itemsCategories?.data;

  return loading ? (
    <LoaderContainer height={'300px'} />
  ) : (
    <CategoriesStyles>
      <Link
        href={{
          pathname: '/[service]/[items]',
          query: {
            service: service,
            items: itemsTitle,
          },
        }}
      >
        <a>
          <div className='overlay'></div>
          <p className='service-item-title'>{itemsTitle}</p>
          <div className='category-items'>
            {categories &&
              categories.map(itemsCategory => (
                <Item
                  page={page}
                  key={itemsCategory.id}
                  categoryTitle={
                    itemsCategory?.attributes?.categoryTitle
                  }
                />
              ))}
          </div>
        </a>
      </Link>
    </CategoriesStyles>
  );
}
