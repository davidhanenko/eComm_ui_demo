import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/client';

import { useState } from 'react';
import { ModalStyles, ModalContainer } from './ModalStyles';

const MODAL_QUERY = gql`
  query MODAL_QUERY($modal: String!) {
    modals(filters: { title: { eqi: $modal } }) {
      data {
        id
        attributes {
          header
          paragraph {
            ... on ComponentParagraphSingleP {
              id
              p
            }
          }
        }
      }
    }
  }
`;

// buttonText: string
// header: string
// text: [string, ..., string]

export default function Modal({ modalTitle }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [loadModal, { data, loading }] = useLazyQuery(
    MODAL_QUERY,
    {
      variables: {
        modal: modalTitle,
      },
    }
  );

  const handleOpenModal = () => {
    loadModal();
    setIsModalOpen(true);
  };

  const modal = data?.modals?.data[0]?.attributes;

  return (
    <>
      <ModalStyles
        aria-label='Open Modal'
        onClick={() => handleOpenModal()}
      >
        {modalTitle}
      </ModalStyles>
      <ModalContainer isModalOpen={isModalOpen}>
        <h3>{modal?.header}</h3>

        {modal?.paragraph?.map(p => (
          <p key={p?.id}>{p?.p}</p>
        ))}

        <button
          onClick={() => setIsModalOpen(false)}
          aria-label='Close modal'
        >
          close
        </button>
      </ModalContainer>
    </>
  );
}
