import {ReactComponent as FacebookIcon} from '../../assets/shared/desktop/icon-facebook.svg'
import {ReactComponent as InstagramIcon} from '../../assets/shared/desktop/icon-instagram.svg'
import {ReactComponent as TwitterIcon} from '../../assets/shared/desktop/icon-twitter.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-nav">
        <img src="" alt="logo" />
        <ul>
          <li>Home</li>
          <li>Headphones</li>
          <li>Speakers</li>
          <li>Earphones</li>
        </ul>
      </div>
      <div className="footer-content">
      <p className="store-description">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
        <div className="social-container">
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
        </div>
      </div>
      <div className="copyright">Copyright 2021. All Rights Reserved</div>
    </div>
  );
};

export default Footer;
