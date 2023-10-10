import styled from 'styled-components';

const UserCartStyles = styled.div`
  color: var(--yellow2);
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 2.4rem;
  margin-right: 4rem;

  @media (max-width: 850px) {
    margin-right: 2rem;
  }

  .user,
  .cart {
    display: flex;
    align-items: center;
    position: relative;

    svg {
      transition: all 0.2s ease;

      &:hover {
        cursor: pointer;
        transform: scale(1.2);
        color: var(--white);
      }
    }
  }

  .user {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;

    .user-title {
      display: none;
      @media (min-width: 850px) {
        text-transform: capitalize;
        display: block;
        position: absolute;
        top: 100%;
        font-size: 1.1rem;
        margin: 0;
        width: 100px;
        text-align: center;
        user-select: none;
      }
    }
  }

  @media print {
    display: none;
  }
`;

export { UserCartStyles };
