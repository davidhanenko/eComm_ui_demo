import styled from 'styled-components';

const DropdownSelectStyles = styled.div`
  display: inline-block;
  margin-left: 1rem;
  position: relative;

  #sort-btn {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    border: 1px solid var(--gray);
    background: transparent;
    padding: 0.2rem 1rem;
    color: var(--dark);
    font-size: 1.2rem;

    svg {
      color: var(--dark);
      transform: scale(1.7);
      margin-left: 1rem;
    }
  }

  #sort-dropdown {
    font-size: 1.2rem;
    list-style-type: none;
    padding-left: 0;
    margin: 0;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    background: var(--offWhite);
    position: absolute;
    left: 0;

    transition: all 0.25s;

    .sort-opt-btn {
      width: 100%;
      padding: 1rem;
      cursor: pointer;
      border: none;
      color: var(--dark);
      background: none;
      transition: all 0.2s;
      text-align: start;

      @media (hover: hover) {
        &:hover {
          background: var(--green3);
        }
      }
    }
    ${props =>
      props.dropdownOpen &&
      `opacity: 1; visibility: visible;`}
  }
`;

export { DropdownSelectStyles };
