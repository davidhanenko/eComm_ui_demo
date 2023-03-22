import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { ToastContainer } from 'react-toastify';

import EmailForm from './email-form/EmailForm';
import Map from './map/Map';
import {
  ContactsInfoStyles,
  ContactsStyles,
} from './ContactsStyles';
import LoaderContainer from '../shared/loaders/loader-container/LoaderContainer';

const CONTACTS_QUERY = gql`
  query CONTACTS_QUERY {
    contact {
      data {
        id
        attributes {
          telephone1
          telephone2
          email
          email2
          addressLine1
          addressLine2
          hours
          hours2
          headline: headlineHead
          headlineText
        }
      }
    }
  }
`;

export default function Contacts() {
  const { data, loading } = useQuery(CONTACTS_QUERY);

  const contacts = data?.contact?.data?.attributes;

  const emailTo = contacts?.email2;
  const headline = contacts?.headline;
  const headlineText = contacts?.headlineText;


  if (loading)
    return (
      <ContactsStyles>
        {' '}
        <LoaderContainer height={'80vh'} />;
      </ContactsStyles>
    );

  return (
    <ContactsStyles>
      <ToastContainer
        position='bottom-left'
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        draggable
      />

      <h2>Contact Us</h2>
      <h3 className='head1'>{headline}</h3>
      <p className='head2'>{headlineText}</p>
      <div className='contacts-container'>
        <EmailForm emailTo={emailTo} />

        <ContactsInfoStyles>
          <p className='phone'>{contacts?.telephone1}</p>
          <p className='phone'>{contacts?.telephone2}</p>
          <p className='email'>{contacts?.email}</p>

          <hr />

          <p className='address'>
            {contacts?.addressLine1}
          </p>
          <p className='address'>
            {contacts?.addressLine2}
          </p>

          <p className='hours'>{contacts?.hours}</p>
          <p className='hours'>{contacts?.hours2}</p>
        </ContactsInfoStyles>
      </div>

      <Map />
    </ContactsStyles>
  );
}
