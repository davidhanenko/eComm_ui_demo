import styled from 'styled-components';

const ContactsStyles = styled.div`
  margin-top: var(--navHeight);
  padding: 8rem 8rem 15rem 8rem;
  background-color: var(--offWhite);
  color: var(--gray);

  h2 {
    font-size: 3rem;
    margin: 0 0 2rem 0;
    font-weight: 500;
    color: var(--green4);
    background: transparent;
  }

  .head1 {
    font-size: 1.8rem;
    font-weight: 400;
    margin: 0;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  .head2 {
    font-size: 1.5rem;
    margin: 0;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  @media (max-width: 600px) {
    padding: 10rem 2rem 15rem 2rem;
  }

  .contacts-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem;
    margin: 7rem 0;

    @media (max-width: 850px) {
      display: block;
    }
  }
`;

const ContactsInfoStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: fit-content;


  p {
    font-size: 1.5rem;
    margin: 0;
  }

  .phone {
    font-weight: 500;
  }

  .email {
    font-style: italic;
    margin: 0.5rem 0;
  }

  hr {
    margin: 2rem 0;
    background-color: var(--yellow2);
    width: 75%;
  }

  .hours {
    font-size: 1.7rem;

    &:nth-child(2n + 1) {
      margin-top: 2rem;
    }
  }

  @media (max-width: 850px) {
    margin: 6rem 0;
  }
`;

export { ContactsStyles, ContactsInfoStyles };
