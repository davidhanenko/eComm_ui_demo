import styled from 'styled-components';

const DropdownSelectStyles = styled.div`
  display: inline;
  margin-left: 1rem;
  position: relative;
  z-index: 0;

  #sort-btn {
    cursor: pointer;
    border: 1px solid gray;
    background: transparent;
    padding: 0.5rem 1rem;
    color: var(--dark);
    svg {
      color: var(--dark);
      transform: scale(1.7);
      margin-left: 2rem;
    }
  }

  #sort-dropdown {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
    width: 100%;
    opacity: 0;
    z-index: 1;
    visibility: hidden;
    background: var(--offWhite);
    position: absolute;
    left: 0;
    top: 2.3rem;

    transition: all 0.25s;

    .sort-opt-btn {
      width: 100%;
      padding: 1rem 2rem;
      cursor: pointer;
      border: none;
      color: var(--dark);
      background: none;
      transition: all 0.2s;
      text-align: start;

      @media (hover: hover) {
        &:hover {
          background: var(--blue5);
        }
      }
    }
    ${props =>
      props.dropdownOpen &&
      `opacity: 1; visibility: visible;`}
  }
`;

export { DropdownSelectStyles };
