import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { FooterContactsStyles } from './FooterStyles';
import { ContactsPlaceholder } from '../../../shared/placeholders/FooterPlaceholders';

const CONTACTS_QUERY = gql`
  query CONTACTS_QUERY {
    contact {
      data {
        id
        attributes {
          phone1: telephone1
          addressLine1
          addressLine2
          email
          hours
        }
      }
    }
  }
`;

export default function FooterContacts() {
  const { data, loading } = useQuery(CONTACTS_QUERY);

  if (loading)
    return (
      <FooterContactsStyles>
        <h4>Contacts</h4>
        <ContactsPlaceholder i={'contacts'} />
      </FooterContactsStyles>
    );

  return (
    <FooterContactsStyles>
      <h4>Contacts</h4>

      <p className='phone'>
        {data?.contact?.data?.attributes?.phone1}
      </p>
      <p className='email'>
        {data?.contact?.data?.attributes?.email}
      </p>

      <hr />

      <p className='address'>
        {data?.contact?.data?.attributes?.addressLine1}
      </p>
      <p className='address'>
        {data?.contact?.data?.attributes?.addressLine2}
      </p>

      <p className='hours'>
        {data?.contact?.data?.attributes?.hours}
      </p>
    </FooterContactsStyles>
  );
}
