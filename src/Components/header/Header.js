import Nav from "../navigation/Nav";
import Logo from "../../assets/logo/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="Little lemon logo" />
      <Nav />
    </header>
  );
}
