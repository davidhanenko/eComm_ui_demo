import styled from 'styled-components';

const ItemsMainPageStyles = styled.section`
  position: relative;
  margin: 20rem 5rem;
  border-top: 1px solid var(--dark);

  @media (max-width: 828px) {
    margin: 10rem 1rem;
  }
  h2 {
    background: transparent;
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--blue1);
    padding-left: 5rem;
    padding-bottom: 5rem;
  }

  /* items slider styles for main page */
  .embla__slide {
    position: relative;
    min-width: 25%;
    @media (max-width: 828px) {
      min-width: 50%;
    }
    @media (max-width: 500px) {
      min-width: 100%;
    }
  }

  img {
    transition: all 0.25s;
  }
`;

export { ItemsMainPageStyles };
