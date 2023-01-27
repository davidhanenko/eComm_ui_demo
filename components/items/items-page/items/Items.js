import LoaderContainer from '../../../shared/loaders/loader-container/LoaderContainer';
import Categories from './categories/Categories';
import { ItemsStyles } from './ItemsStyles';

export default function Items({
  allServiceItems,
  service,
  page,
  loading
}) {


  return (
    <ItemsStyles>
      {loading ? (
        <LoaderContainer height='100vh' />
      ) : (
        allServiceItems &&
        allServiceItems.map(serviceItems => (
          <Categories
            key={serviceItems.id}
            itemsTitle={serviceItems.attributes.title}
            service={service}
            page={page}
            loading={loading}
          />
        ))
      )}
    </ItemsStyles>
  );
}
