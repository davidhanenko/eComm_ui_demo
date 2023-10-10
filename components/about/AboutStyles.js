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
    color: var(--dark);
  }

  hr {
    background-color: var(--yellow2);
    margin: 2rem 0 3rem 0;
  }

  h3 {
    font-size: 2rem;
    color: var(--gray);
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
