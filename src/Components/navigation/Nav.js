import { useState } from "react";
import NavUrls from "./NavUrls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const closeMenu = (
    <div size="20px" onClick={() => setOpen(!open)}>
      <FontAwesomeIcon icon={faBars} size="2x" />
    </div>
  );
  const openMenu = (
    <div
      className="hamburger close-menu"
      size="20px"
      onClick={() => setOpen(!open)}
    >
      <FontAwesomeIcon icon={faXmark} size="2x" />
    </div>
  );

  const closeMobileMenuOnClick = () => setOpen(false);

  return (
    <nav>
      <div className="mobile-menu">
        {open ? openMenu : closeMenu}
        {open && <NavUrls onClick={closeMobileMenuOnClick} />}
      </div>
      <div className="desktop-menu">
        <NavUrls />
      </div>
    </nav>
  );
}
