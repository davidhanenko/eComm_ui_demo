import { ItemsSubCategoryStyles } from './ItemsSubCategoryStyles';
import SubCategoryItem from './subcategory-item/SubCategoryItem';

export default function ItemsSubCategory({
  subCategoryTitle,
  itemsTitle,
  service,
}) {

  return (
    <ItemsSubCategoryStyles>
      <SubCategoryItem
        subCategoryTitle={subCategoryTitle}
        itemsTitle={itemsTitle}
        service={service}
      />
    </ItemsSubCategoryStyles>
  );
}
