export const DEV_ENDPOINT = 'http://localhost:1337/graphql';
export const PROD_ENDPOINT = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;

export const PER_PAGE_DEFAULT = 4;

export const TAX_VALUE = 0.08875;

export const SORT_ITEMS_BY_DEFAULT = 'itemTitle:asc';

export const SORT_ORDERS_BY_DEFAULT = 'createdAt:desc';

export const TOGGLE_WIDTH = 850;

export const SORTING_OPTIONS = [
  {
    title: 'Name, A-Z',
    option: 'itemTitle:asc',
  },
  {
    title: 'Name, Z-A',
    option: 'itemTitle:desc',
  },
  {
    title: 'Old to New',
    option: 'createdAt:asc',
  },
  {
    title: 'New to Old',
    option: 'createdAt:desc',
  },
  { title: 'Price, Low to High', option: 'minPrice:asc' },
  { title: 'Price, High to Low', option: 'minPrice:desc' },
];

export const SORTING_OPTIONS_ORDERS = [
  {
    title: 'New to Old',
    option: 'createdAt:desc',
  },
  {
    title: 'Old to New',
    option: 'createdAt:asc',
  },
];

export const PER_PAGE_OPTIONS = [
  {
    title: '4',
    option: 4,
  },
  {
    title: '8',
    option: 8,
  },
  {
    title: '12',
    option: 12,
  },
  {
    title: '24',
    option: 24,
  },
];

export const ORDER_STATUS_OPTIONS = [
  {
    title: 'PENDING',
    option: 'pending',
  },
  {
    title: 'FULFILLED',
    option: 'fulfilled',
  },
  {
    title: 'IN PROGRESS',
    option: 'in-progress',
  },
  {
    title: 'REJECTED',
    option: 'rejected',
  },
];
