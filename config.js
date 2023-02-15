export const DEV_ENDPOINT = 'http://localhost:1337/graphql';
export const PROD_ENDPOINT = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;

export const PER_PAGE_DEFAULT = 6;

export const TAX_VALUE = 0.08875;

export const SORT_ITEMS_BY_DEFAULT = 'itemTitle:asc';

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
  { title: 'Price, \u2191', option: 'minPrice:asc' },
  { title: 'Price, \u2193', option: 'minPrice:desc' },
];

export const PER_PAGE_OPTIONS = [
  {
    title: '2',
    option: 2,
  },
  {
    title: '4',
    option: 4,
  },
  {
    title: '6',
    option: 6,
  },
  {
    title: '8',
    option: 8,
  },
  {
    title: '10',
    option: 10,
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
