import Head from 'next/head';

import capitalizeStr from '../../../../helpers/capitalizeStr';

import ItemsSubCategory from '../items-sub-category/ItemsSubCategory';
import { ItemsCategoryStyles } from './ItemsCategoryStyles';

export default function ItemsCategory({ items, service }) {
  const title = items?.attributes?.title;

  return (
    <ItemsCategoryStyles>
      <Head>
        <title>{items && capitalizeStr(title)} | A2Z</title>
      </Head>

      <h3 className='items-category-title'>{title}</h3>

      <hr className='title-underline' />

      <div className='category-container'>
        {items?.attributes?.category?.data?.length > 0 ? (
          items?.attributes?.category?.data.map(
            subCategory => (
              <ItemsSubCategory
                key={subCategory?.id}
                subCategoryTitle={
                  subCategory?.attributes?.categoryTitle
                }
                itemsTitle={title}
                service={service}
              />
            )
          )
        ) : (
          <p className='no-items'>Nothing here yet</p>
        )}
      </div>
    </ItemsCategoryStyles>
  );
}
