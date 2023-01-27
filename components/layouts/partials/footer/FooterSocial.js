import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import React from 'react';
import Link from 'next/link';

import { MdOutlineFacebook } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

import { FooterSocialStyles } from './FooterStyles';

const SOCIAL_QUERY = gql`
  query SOCIAL_QUERY {
    contact {
      data {
        id
        attributes {
          facebookLink
          instagramLink
        }
      }
    }
  }
`;

const FacebookBtn = React.forwardRef(({ href }, ref) => {
  return (
    <a
      href={href}
      ref={ref}
      aria-label='go to our facebook account'
    >
      <MdOutlineFacebook />
    </a>
  );
});

const InstagramBtn = React.forwardRef(({ href }, ref) => {
  return (
    <a
      href={href}
      ref={ref}
      aria-label='go to our instagram account'
    >
      <RiInstagramFill />
    </a>
  );
});

export default function FooterSocial() {
  const { data, loading } = useQuery(SOCIAL_QUERY);

  const facebookLink =
    data?.contact?.data?.attributes?.facebookLink;
  const instagramLink =
    data?.contact?.data?.attributes?.instagramLink;

  return (
    <FooterSocialStyles>
      {facebookLink && (
        <Link href={facebookLink} passHref>
          <FacebookBtn />
        </Link>
      )}
      {instagramLink && (
        <Link href={instagramLink} passHref>
          <InstagramBtn />
        </Link>
      )}
    </FooterSocialStyles>
  );
}
