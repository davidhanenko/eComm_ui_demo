import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  from {
    box-shadow: 0 0 0px var(--green);
  }

  to {
    box-shadow: 0 0 4px 2px var(--green);
  }
`;

const SearchInputStyles = styled.div`
  width: 100%;
  position: relative;
  display: flex;

  input {
    border: none;
    height: 100%;
    width: 100%;
    outline: 0;
    padding-left: 0.5rem;
    background: var(--offWhite);

    &::placeholder {
      color: var(--gray);
      font-weight: 100;
    }
    &:focus {
      outline: none;
      border: 1px solid var(yellow);
    }
    &.loading {
      animation: ${glow} 0.6s ease-in-out infinite alternate;
    }
  }

  .search-btn {
    border: none;
    outline: none;
    background: transparent;
    position: absolute;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .search-icon {
      font-size: 2rem;
      color: var(--yellow2);
      transition: all 0.25s;

      &:hover {
        transform: scale(1.2);
      }
    }

    &:hover[disabled] {
      .search-icon {
        transform: none;
      }
      cursor: auto;
    }
  }
`;

export { SearchInputStyles };
