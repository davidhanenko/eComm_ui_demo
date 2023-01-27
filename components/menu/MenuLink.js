import Link from 'next/link';

import MenuDropdown from './MenuDropdown';
import { MenuLinkStyles } from './MenuLinkStyles';

export default function MenuLink({ service, menuItem }) {
  return (
    <MenuLinkStyles>
      <Link
        href={{
          pathname: `/${service}/[items]`,
          query: {
            items: menuItem?.title,
          },
        }}
        passHref
      >
        <MenuDropdown
          dropDownMenuitem={menuItem?.title}
          categories={menuItem?.itemsCategories?.data}
          service={service}
        />
      </Link>
    </MenuLinkStyles>
  );
}
