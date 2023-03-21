import styled from 'styled-components';

const UserCartStyles = styled.div`
  color: var(--blue3);
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 2.4rem;
  margin-right: 4rem;

  @media (max-width: 850px) {
    margin-right: 2rem;
  }

  .user {
    padding: 0 1rem;
  }
  .cart {
    position: relative;
  }
  .user,
  .cart {
    display: flex;
    align-items: center;

    svg {
      transition: all 0.2s ease;

      &:hover {
        cursor: pointer;
        transform: scale(1.2);
        color: var(--darkBlue);
      }
    }
  }

  @media print {
    display: none;
  }
`;

export { UserCartStyles };
