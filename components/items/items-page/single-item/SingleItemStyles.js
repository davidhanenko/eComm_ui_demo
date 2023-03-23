import styled from 'styled-components';

const SingleItemStyles = styled.div`
  padding: 12rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 700px) {
    display: block;
    padding: 8rem 0;
  }

  .item-image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 3rem;

    .item-image {
      width: 100%;
      height: 100%;
      max-width: 400px;
      max-height: 400px;
    }

    .availability {
      width: 100%;
      border: 1px solid var(--lightGray);
      padding: 0.5rem 1rem;
      margin-top: 3rem;
      text-transform: capitalize;

      display: flex;
      justify-content: space-between;

      .not-available {
        display: flex;
        align-items: center;
        font-size: 1.6rem;

        svg {
          font-size: 2.5rem;
          margin-right: 1rem;
          color: var(--red);
        }
      }

      .is-available {
        display: flex;
        align-items: center;
        font-size: 1.6rem;

        svg {
          font-size: 2.5rem;
          margin-right: 1rem;
          color: var(--green);
        }
      }

      .available-quantity {
      }
    }
  }

  .item-description-container {
    padding: 3rem;
    flex: 1 1 0;

    .single-item-title {
      font-size: 2.2rem;
      font-weight: 400;
      text-align: start;
      text-transform: capitalize;
      color: var(--dark);
      margin: 0 0 1rem 0;
    }

    hr {
      height: 1px;
      border: none;
      background-color: var(--blue3);
    }

    .single-item-description {
      margin-top: 5rem;
      font-size: 1.5rem;
      font-weight: 300;
      text-align: justify;
    }
    @media (max-width: 720px) {
      max-width: 100%;
      padding: 4rem 2rem 5rem 2rem;

      .single-item-title {
        font-size: 2rem;
      }
    }
  }
`;

export { SingleItemStyles };
