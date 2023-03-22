import {
  FooterInfoStyles,
  LinkStyles,
} from './FooterStyles';
import Link from 'next/link';

export default function FooterInfo() {
  return (
    <FooterInfoStyles>
      <h4>Info</h4>

      <ul>
        <LinkStyles>
          <Link href={'/info/purchase-policy'}>
            purchase policy
          </Link>
        </LinkStyles>
        <LinkStyles>
          <Link href={'/info/return-policy'}>
            return policy
          </Link>
        </LinkStyles>
        <LinkStyles>
          <Link href={'info/privacy-policy'}>privacy policy</Link>
        </LinkStyles>
        <LinkStyles>
          <Link href={'/about'}>our brand</Link>
        </LinkStyles>
        <LinkStyles>
          <Link href={'info/c-19'}>COVID-19</Link>
        </LinkStyles>
      </ul>
    </FooterInfoStyles>
  );
}
