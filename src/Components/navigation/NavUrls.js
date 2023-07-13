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
        <NavLink to="#">Menu</NavLink>
      </li>
      <li>
        <NavLink to="/reservations" className="active-link">
          Reservations
        </NavLink>
      </li>
      <li>
        <NavLink to="#">Order Online</NavLink>
      </li>
      <li>
        <NavLink to="#">Login</NavLink>
      </li>
    </ul>
  );
}
