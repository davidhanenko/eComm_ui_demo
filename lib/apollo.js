import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/link-error';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';

import { useMemo } from 'react';
import { setContext } from '@apollo/client/link/context';

import { DEV_ENDPOINT, PROD_ENDPOINT } from '../config';

const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';
import { getSession } from 'next-auth/react';

let apolloClient;

const createApolloClient = headers => {
  const authLink = setContext(async (_, { headers }) => {
    const session = await getSession();
    const modifiedHeader = {
      headers: {
        ...headers,
        authorization: session?.jwt
          ? `Bearer ${session.jwt}`
          : '',
      },
    };
    return modifiedHeader;
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(
            ({ message, locations, path }) =>
              console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
              )
          );
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
          );
      }),
      authLink,
      new HttpLink({
        uri:
          process.env.NODE_ENV === 'development'
            ? DEV_ENDPOINT
            : PROD_ENDPOINT,
        credentials: 'include',
      }),
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        SingleItem: {
          merge: true,
        },
        Item: {
          merge: true,
        },
        ItemsCategory: {
          merge: true,
        },
        Service: {
          merge: true,
        },
        Contact: {
          merge: true,
        },
        Order: {
          merge: true,
        },
      },
    }),
  });
};

export const initializeApollo = ({
  headers,
  initialState,
}) => {
  const _apolloClient =
    apolloClient ?? createApolloClient(headers);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter(d =>
          sourceArray.every(s => !isEqual(d, s))
        ),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const addApolloState = (client, pageProps) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] =
      client.cache.extract();
  }

  return pageProps;
};

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(
    () => initializeApollo({ initialState: state }),
    [state]
  );
  return store;
}
