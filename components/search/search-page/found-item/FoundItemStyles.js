import styled from 'styled-components';

const FoundItemStyles = styled.div`
  box-shadow: var(--bs);

  a {
    padding: 2rem;
    display: grid;
    grid-auto-rows: auto 1fr 1fr;
    height: 100%;

    h4 {
      font-weight: 300;
      margin: 0;
      color: var(--green4);
      font-size: 1.7rem;

      &::first-letter {
        text-transform: capitalize;
      }
    }
    .price-from {
      font-weight: 100;
      font-size: 1.4rem;
      color: var(--gray);
      font-style: italic;
      grid-row: 2;
      place-self: end center;
    }

    .item-img {
      transition: all 0.2s;
    }

    @media (hover: hover) {
      &:hover {
        .item-img {
          transform: scale(0.9);
        }
      }
    }
  }
`;

export { FoundItemStyles };
