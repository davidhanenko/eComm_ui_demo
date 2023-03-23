import Categories from './categories/Categories';
import { ItemsStyles } from './ItemsStyles';

export default function Items({
  allServiceItems,
  service,
  page,
}) {
  return (
    <ItemsStyles>
      <header>
        <h2>Select from {service} categories</h2>
        <hr />
      </header>
      <div className='service-categories'>
        {allServiceItems &&
          allServiceItems.map(serviceItems => (
            <Categories
              key={serviceItems.id}
              itemsTitle={serviceItems.attributes.title}
              service={service}
              page={page}
            />
          ))}
      </div>
    </ItemsStyles>
  );
}
