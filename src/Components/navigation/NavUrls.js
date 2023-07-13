import { NavLink } from "react-router-dom";

export default function NavUrls() {
  return (
    <ul>
      <li>
        <NavLink to="/" className="active-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="active-link">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu" className="active-link">
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/reservations" className="active-link">
          Reservations
        </NavLink>
      </li>
      <li>
        <NavLink to="/order" className="active-link">
          Order Online
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="active-link">
          Login
        </NavLink>
      </li>
    </ul>
  );
}
