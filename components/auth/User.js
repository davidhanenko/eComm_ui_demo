import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      username
      email
    }
  }
`;

export default function useUser() {
  const { data: session } = useSession();

  const { data, loading, error } = useQuery(
    CURRENT_USER_QUERY
  );
  return data;
}
