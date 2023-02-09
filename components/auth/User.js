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

  if (!session) return null;

  const { data, loading, error } = useQuery(
    CURRENT_USER_QUERY,
    {
      context: {
        headers: {
          authorization: `Bearer ${session?.jwt}`,
        },
      },
    }
  );
  return data;
}
