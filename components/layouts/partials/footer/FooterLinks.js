import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import {
  FooterLinksStyles,
  LinkStyles,
} from './FooterStyles';

const LINKS_QUERY = gql`
  query LINKS_QUERY {
    links {
      data {
        id
        attributes {
          title
          link
        }
      }
    }
  }
`;

export default function FooterLinks() {
  const { data } = useQuery(LINKS_QUERY);

  const links = data?.links?.data;

  return (
    <FooterLinksStyles>
      <h4>Links</h4>
      <ul>
        <LinkStyles>
          <Link href={'/'}>home</Link>
        </LinkStyles>
        <LinkStyles>
          <Link href={'/about'}>about</Link>
        </LinkStyles>
        <LinkStyles>
          <Link href={'/contacts'}>contacts</Link>
        </LinkStyles>
        {links &&
          links?.length > 0 &&
          links?.map(link => (
            <LinkStyles key={link?.id}>
              <Link href={`${link?.attributes?.link}`}>
                <a target='_blank' rel='noreferrer'>
                  {link?.attributes?.title}
                </a>
              </Link>
            </LinkStyles>
          ))}
      </ul>
    </FooterLinksStyles>
  );
}
