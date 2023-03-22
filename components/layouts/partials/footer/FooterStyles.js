import styled from 'styled-components';

const FooterStyles = styled.footer`
  background: var(--blue3);
  color: var(--white);
  padding: 2rem 4rem;

  position: relative;
  width: 100vw;
  bottom: 0;
  margin: 0;

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

    @media (max-width: 600px) {
      text-align: center;
    }
  }

  h4 {
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0;
    margin-bottom: 0.5rem;

    border-bottom: 1px solid var(--blue5);
    width: 50%;

    @media (max-width: 600px) {
      width: 100%;
    }
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
    font-weight: 300;
    color: inherit;
    font-size: 1.5rem;
    transition: color 0.25s;

    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

const FooterServicesStyles = styled.section`
  ul {
    padding: 0;
  }
`;

const FooterInfoStyles = styled.section`
  ul {
    padding: 0;
  }
`;

const FooterLinksStyles = styled.section`
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
    transition: all 0.25s;
    @media (hover: hover) {
      &:hover {
        color: var(--blue4);
      }
    }
  }
`;

export {
  FooterStyles,
  LinkStyles,
  FooterInfoStyles,
  FooterSocialStyles,
  FooterLinksStyles,
  FooterServicesStyles,
};
