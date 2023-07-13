import { NavLink } from "react-router-dom";
import Nav from "../navigation/Nav";
import Logo from "../../assets/logo/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <NavLink to="/">
          <img src={Logo} alt="Little lemon logo" />
        </NavLink>
        <Nav />
      </header>
    </>
  );
}
