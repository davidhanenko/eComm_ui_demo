import styled from 'styled-components';

const HeadLineStyles = styled.div`
  color: var(--dark);

  padding-left: 2rem;
  padding-right: 2rem;

  h4 {
    font-size: 2rem;
    font-weight: 400;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  p {
    font-size: 1.5rem;

    &::first-letter {
      text-transform: capitalize;
    }
  }
`;

export { HeadLineStyles };
