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
import Logo from "../../assets/logo/logo.png";
import "./Footer.css";

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
        <div>Page Navigations</div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <div>Contact</div>
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
        <div>Social Media</div>
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
        <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
