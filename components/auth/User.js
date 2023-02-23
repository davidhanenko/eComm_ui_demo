import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      username
      email
      role {
        name
      }
    }
  }
`;

export default function useUser() {
  const { data, loading, error } = useQuery(
    CURRENT_USER_QUERY
  );

  return data?.me;
}
