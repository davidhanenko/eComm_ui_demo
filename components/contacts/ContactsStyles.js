import styled from 'styled-components';

const ContactsStyles = styled.div`
  margin-top: calc(var(--navHeight) + var(--searchHeight));
  padding: 15rem 5rem;
  background-color: var(--bg);

  @media (max-width: 576px) {
    margin-bottom: 15rem;
    padding: 10rem 0;
  }

  display: flex;
  flex-wrap: wrap;

  .map-container {
    flex: 1 1 400px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export { ContactsStyles };
