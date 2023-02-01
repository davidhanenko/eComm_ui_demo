import dynamic from 'next/dynamic';

import LoaderContainer from '../components/shared/loaders/loader-container/LoaderContainer';

const Contacts = dynamic(
  () => import('../components/contacts/Contacts'),
  {
    loading: () => <LoaderContainer height={'100vh'} />,
  }
);

export default function ContactsPage(props) {
  return <Contacts />;
}

export async function getStaticProps() {
  let layout = 'main';

  return {
    props: {
      layout,
    },
  };
}
