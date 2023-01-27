import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { ToastContainer } from 'react-toastify';

import HeadLine from './headline/HeadLine';
import EmailForm from './email-form/EmailForm';
import Map from './map/Map';
import { ContactsStyles } from './ContactsStyles';
import LoaderContainer from '../shared/loaders/loader-container/LoaderContainer';

const CONTACT_FORM_QUERY = gql`
  query CONTACT_FORM_QUERY {
    contact {
      data {
        id
        attributes {
          telephone1
          telephone2
          email
          email2
          headline: headlineHead
          headlineText
        }
      }
    }
  }
`;

export default function Contacts() {
  const { data, loading } = useQuery(CONTACT_FORM_QUERY);

  const emailTo =
    data?.contact?.data?.attributes?.email2;
  const headline =
    data?.contact?.data?.attributes?.headline;
  const headlineText =
    data?.contact?.data?.attributes?.headlineText;

    
    if (loading)
    return (
      <ContactsStyles>
        {' '}
        <LoaderContainer height={'10rem'} />;
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
      <EmailForm emailTo={emailTo} />
      <div className='map-container'>
        <HeadLine
          headline={headline}
          headlineText={headlineText}
        />
        <Map />
      </div>
    </ContactsStyles>
  );
}
