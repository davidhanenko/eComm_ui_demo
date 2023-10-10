import { usePagination } from '../../../context/paginationState';
import {
  SORTING_OPTIONS,
  SORT_ITEMS_BY_DEFAULT,
} from '../../../config';

import { ItemsSortSelectStyles } from './PaginationStyles';
import DropdownSelect from './dropdown/DropdownSelect';
import { useEffect } from 'react';

export default function ItemsSortSelect(props) {
  const { sortItemsBy, setSortItemsBy } = usePagination(
    props?.optionsDefault || SORT_ITEMS_BY_DEFAULT
  );

  // handle select of sort option
  const handleSelect = e => {
    setSortItemsBy(e.target.value);
  };

  useEffect(() => {
    setSortItemsBy(
      props?.optionsDefault ?? SORT_ITEMS_BY_DEFAULT
    );
  }, []);

  return (
    <ItemsSortSelectStyles>
      {sortItemsBy && (
        <DropdownSelect
          options={props?.options ?? SORTING_OPTIONS}
          select={sortItemsBy}
          handleSelect={handleSelect}
        />
      )}
    </ItemsSortSelectStyles>
  );
}
