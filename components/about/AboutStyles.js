import styled from 'styled-components';

const AboutStyles = styled.main`
  margin-top: var(--navHeight);
  padding: 6rem 5rem;
  max-width: var(--midWidth);

  @media (max-width: 850px) {
    padding: 5rem 2rem;
  }

  h1 {
    font-size: 3rem;
    letter-spacing: 2px;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1.6rem;
    font-weight: 300;
  }

  .about-image {
    margin: 4rem 0;
  }
`;

export { AboutStyles };
