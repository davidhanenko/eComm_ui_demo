import styled from 'styled-components';

const SingleItemStyles = styled.div`
  margin: 15rem 0;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 720px) {
    flex-direction: column;
    margin: 10rem 0;
  }

  .item-image-container {
    max-width: 450px;
    max-height: 450px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 3rem;
    text-transform: uppercase;
    flex: 1 1 0;
    position: relative;

    .not-available {
      position: absolute;
      right: 0rem;
      top: 8rem;
      text-transform: uppercase;
      color: var(--orange);
      background-color: var(--lightGray);
      transform: rotate(45deg);
      padding: 0 3rem;
      z-index: 2;

      @media (max-width: 576px) {
        font-size: 1.2rem;
      }
    }
  }

  .item-description-container {
    max-width: 50%;
    padding: 0 5rem 0 1rem;
    flex: 1 1 0;

    .single-item-title {
      font-size: 3rem;
      font-weight: 400;
      text-align: start;
      text-transform: uppercase;
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
