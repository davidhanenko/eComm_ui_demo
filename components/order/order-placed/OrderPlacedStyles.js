import styled from 'styled-components';

const OrderPlacedStyles = styled.div`
  margin: 15rem auto;
  min-height: 30vh;
  max-width: 500px;
  padding: 0 1rem;

  .container {
    text-align: center;
    padding: 3rem;
    box-shadow: var(--bs);

    h2 {
      color: var(--green4);
      .user-name {
        text-transform: capitalize;
      }
    }

    p {
      margin: 0;
      color: var(--gray);
    }

    .links {
      margin-top: 4rem;
      a {
        color: var(--linkBlue);
        margin: 0 1rem;
        transition: all 0.2s;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export { OrderPlacedStyles };
