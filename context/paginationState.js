import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  PER_PAGE_DEFAULT,
  SORT_ITEMS_BY_DEFAULT,
} from '../config';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function PaginationStateProvider({ children }) {
  const [itemsPerPage, setItemsPerPage] = useState();
  const [sortItemsBy, setSortItemsBy] = useState(
    SORT_ITEMS_BY_DEFAULT
  );

  // get amount of items showed per page from session storage depend on selected option
  useEffect(() => {
    const value = parseInt(
      sessionStorage.getItem('showPerPage')
    );
    const itemsPerPage = !!value ? value : PER_PAGE_DEFAULT;
    return setItemsPerPage(itemsPerPage);

  }, [itemsPerPage]);

  return (
    <LocalStateProvider
      value={{
        itemsPerPage,
        setItemsPerPage,
        sortItemsBy,
        setSortItemsBy,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

function usePagination() {
  const all = useContext(LocalStateContext);
  return all;
}

export { PaginationStateProvider, usePagination };
