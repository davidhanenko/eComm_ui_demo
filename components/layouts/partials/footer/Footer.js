import FooterSocial from './FooterSocial';
import FooterServices from './FooterServices';
import FooterLinks from './FooterLinks';
import FooterAbout from './FooterInfo';
import { FooterStyles } from './FooterStyles';

export default function Footer() {
  return (
    <FooterStyles>
      <div className='footer-container'>
        <FooterServices />
        <FooterLinks />
        <FooterAbout />
      </div>
      <FooterSocial />
    </FooterStyles>
  );
}
