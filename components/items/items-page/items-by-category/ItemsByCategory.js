import LoaderContainer from '../../../shared/loaders/loader-container/LoaderContainer';
import ItemsCategory from '../items-category/ItemsCategory';
import { ItemsByCategoryStyles } from './ItemsByCategoryStyles';

export default function ItemsByCategory({
  items,
  service,
  loading,
}) {
  return (
    <ItemsByCategoryStyles>
      {loading ? (
        <LoaderContainer height={'75vh'} />
      ) : (
        <ItemsCategory items={items} service={service} />
      )}
    </ItemsByCategoryStyles>
  );
}
