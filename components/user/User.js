import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      username
      email
    }
  }
`;

export default function useUser(token) {
  const { data, loading, error } = useQuery(
    CURRENT_USER_QUERY,
    {
      context: {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    }
  );
  return data;
}
