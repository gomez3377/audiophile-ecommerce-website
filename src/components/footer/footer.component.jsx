


import { Link } from 'react-router-dom';
import {ReactComponent as FacebookIcon} from '../../assets/shared/desktop/icon-facebook.svg'
import {ReactComponent as InstagramIcon} from '../../assets/shared/desktop/icon-instagram.svg'
import {ReactComponent as TwitterIcon} from '../../assets/shared/desktop/icon-twitter.svg'
import {ReactComponent as Logo} from '../../assets/shared/desktop/logo.svg'
import { Copyright, FooterContainer, FooterContent, FooterNav, SocialMediaContainer } from './footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterNav>
        <Logo/>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/headphones">Headphones</Link></li>
          <li><Link to="/speakers">Speakers</Link></li>
          <li><Link to="/earphones">Earphones</Link></li>
        </ul>
      </FooterNav>
      <FooterContent>
      <p className="store-description">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
        <SocialMediaContainer>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
        </SocialMediaContainer>
      </FooterContent>
      <Copyright>Copyright 2021. All Rights Reserved</Copyright>
    </FooterContainer>
  );
};

export default Footer;
