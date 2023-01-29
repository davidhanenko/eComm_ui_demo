import styled from 'styled-components';

const FooterStyles = styled.footer`
  background: var(--blue2);
  color: var(--white);
  padding: 1rem;

  position: relative;
  width: 100vw;
  top: 40vh;
  bottom: 0;
  margin: 0;
  padding: 2rem 0;

  .footer-container {
    margin: 2rem auto;
    width: 100%;
    max-width: var(--maxWidth);
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(
      auto-fit,
      minmax(300px, 1fr)
    );
  }

  h4 {
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.3rem;
    margin: 0;
  }

  @media print {
    display: none;
  }
`;

const LinkStyles = styled.li`
  list-style-type: none;
  text-transform: capitalize;
  a {
    text-decoration: none;
    color: inherit;
    font-size: 1.6rem;
    transition: color 0.2s;

    @media (hover: hover) {
      &:hover {
        color: var(--darkBlue);
      }
    }
  }
`;

const FooterServicesStyles = styled.section`
  padding-left: 2rem;
  ul {
    padding: 0;
  }
`;

const FooterContactsStyles = styled.section`
  padding-left: 2rem;

  p {
    font-size: 1.4rem;

    &:first-of-type,
    &:last-of-type {
      font-size: 1.7rem;
    }
  }

  hr {
    margin: 2rem 0;
    height: 1px;
    border: none;
    background-color: var(--blue4);
    width: 60%;
  }

  .hours {
    margin-top: 2rem;
  }
`;

const FooterLinksStyles = styled.section`
  padding-left: 2rem;
  ul {
    padding: 0;
  }
`;

const FooterSocialStyles = styled.section`
  display: flex;
  justify-content: center;
  font-size: 4rem;
  padding: 2rem;

  a {
    color: var(--white);
    cursor: pointer;
    margin: 0 1rem;
    transition: all 0.3s;
    @media (hover: hover) {
      &:hover {
        color: var(--blue4);
        transform: translateY(-10%);
      }
    }
  }
`;

export {
  FooterStyles,
  LinkStyles,
  FooterContactsStyles,
  FooterSocialStyles,
  FooterLinksStyles,
  FooterServicesStyles,
};
