import styled from 'styled-components';

const ItemsMainPageStyles = styled.section`
  position: relative;
  margin: 5rem;
  background-color: var(--white);
  padding: 5rem 2rem;
  box-shadow: var(--bs);

  @media (max-width: 900px) {
    margin: 10rem 1rem;
  }
  h2 {
    background: transparent;
    font-size: 4rem;
    text-transform: capitalize;
    font-weight: 600;
    color: var(--dark);
    margin: 0;
  }

  h4 {
    font-size: 2rem;
    font-weight: 400;
    margin: 0;
    color: var(--lightGray);
  }

  hr {
    border: none;
    height: 1px;
    background-color: var(--green);
    margin: 2rem 0;
  }

  .items-slider {
    padding: 1rem 5rem;

    @media (max-width: 600px) {
      padding: 0 1rem;
    }
  }

  /* items slider styles for main page */
  .embla__slide {
    position: relative;
    min-width: 25%;

    @media (max-width: 1000px) {
      min-width: 50%;
    }
    @media (max-width: 600px) {
      min-width: 100%;
    }
  }

  img {
    transition: all 0.25s;
  }
`;

export { ItemsMainPageStyles };
