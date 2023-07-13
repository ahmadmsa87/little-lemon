import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Nav from "../navigation/Nav";
import Logo from "../../assets/logo/footer-logo.png";
import "./Footer.css";
import NavUrls from "../../components/navigation/NavUrls";

const socials = [
  {
    alt: "Facebook",
    icon: faFacebook,
    url: "https://www.facebook.com",
  },
  {
    alt: "Instagram",
    icon: faInstagram,
    url: "https://www.instagram.com",
  },
  {
    alt: "Whatsapp",
    icon: faWhatsapp,
    url: "tel: 02366333333",
  },
];

export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Little lemon logo" />
      <div className="footer-navigation">
        <div className="footer-section-title">Page Navigations</div>
        <nav>
          <NavUrls />
        </nav>
      </div>
      <div className="footer-contact">
        <div className="footer-section-title">Contact</div>
        <ul>
          <li>
            <FontAwesomeIcon icon={faLocationDot} size="1x" />
            &nbsp; 101 Star ST, North Ridge Chicago - US
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
            &nbsp; support@little-lemon.com
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} size="1x" />
            &nbsp; 02366333333
          </li>
        </ul>
      </div>

      <div className="footer-social-media">
        <div className="footer-section-title">Social Media</div>
        <ul>
          {socials.map((item) => {
            return (
              <li key={item.alt}>
                <a alt={item.alt} href={item.url}>
                  <FontAwesomeIcon icon={item.icon} size="2x" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="copyright">
        <p>© 2023 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}
