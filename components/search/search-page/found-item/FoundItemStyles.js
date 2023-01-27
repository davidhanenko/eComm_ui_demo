import styled from 'styled-components';

const FoundItemStyles = styled.div`
  h4 {
    font-weight: 300;
    margin: 0;
    color: var(--blue2);
    font-size: 2rem;

    &::first-letter {
      text-transform: capitalize;
    }
  }
  .price-from {
    font-weight: 100;
    color: var(--gray);
    font-style: italic;
  }

  .item-img {
    transition: all 0.3s;
  }

  @media (hover: hover) {
    &:hover {
      .item-img {
        transform: scale(0.9);
      }
    }
  }
`;

export { FoundItemStyles };
