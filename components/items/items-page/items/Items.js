
import Categories from './categories/Categories';
import { ItemsStyles } from './ItemsStyles';

export default function Items({
  allServiceItems,
  service,
  page,
}) {
  return (
    <ItemsStyles>
      {allServiceItems &&
        allServiceItems?.map(serviceItems => (
          <Categories
            key={serviceItems?.id}
            itemsTitle={serviceItems?.attributes?.title}
            service={service}
            page={page}
          />
        ))}
    </ItemsStyles>
  );
}
