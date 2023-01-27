import FooterSocial from './FooterSocial';
import FooterServices from './FooterServices';
import FooterLinks from './FooterLinks';
import FooterContacts from './FooterContacts';
import { FooterStyles } from './FooterStyles';

export default function Footer() {
  return (
    <FooterStyles>
      <div className='footer-container'>
        <FooterServices />
        <FooterLinks />
        <FooterContacts />
      </div>
      <FooterSocial />
    </FooterStyles>
  );
}
