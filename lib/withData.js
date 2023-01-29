import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/link-error';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { createUploadLink } from 'apollo-upload-client';
import withApollo from 'next-with-apollo';
import { DEV_ENDPOINT, PROD_ENDPOINT } from '../config';

function createClient({ headers, initialState }) {
  return new ApolloClient({
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

      createUploadLink({
        uri:
          process.env.NODE_ENV === 'development'
            ? DEV_ENDPOINT
            : PROD_ENDPOINT,
        fetchOptions: {
          credentials: 'include',
        },
        headers,
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
    }).restore(initialState || {}),
  });
}

export default withApollo(createClient, {
  getDataFromTree,
});
