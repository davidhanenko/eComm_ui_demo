import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

import {
  FooterServicesStyles,
  LinkStyles,
} from './FooterStyles';
import { ServicesPlaceholder } from '../../../shared/placeholders/FooterPlaceholders';

const SERVICES_QUERY = gql`
  query SERVICES_QUERY {
    services {
      data {
        id
        attributes {
          categoryTitle: service
        }
      }
    }
  }
`;

export default function FooterServices() {
  const { data, loading } = useQuery(SERVICES_QUERY);
  const services = data?.services?.data;

  return (
    <FooterServicesStyles>
      <h4>Services</h4>
      <ul>
        {services &&
          services?.map(service => (
            <LinkStyles
              key={service.id}
              className='footer-link'
            >
              <Link
                href={`/${service?.attributes?.categoryTitle}`}
              >
                {service?.attributes?.categoryTitle}
              </Link>
            </LinkStyles>
          ))}
      </ul>
    </FooterServicesStyles>
  );
}
