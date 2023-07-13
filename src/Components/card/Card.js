import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

export default function SpecialCard(props) {
  return (
    <article className="card">
      <img src={props.image} alt="Menu"></img>
      <section className="card-text">
        <div className="card-header">
          <h1>{props.name}</h1>
          <h3>{props.price}</h3>
        </div>
        <p>{props.description}</p>
        <NavLink to="/order">
          <button className="btn">
            <span>Order for Delivery &nbsp;&nbsp;</span>
            <FontAwesomeIcon icon={faMotorcycle} />
          </button>
        </NavLink>
      </section>
    </article>
  );
}
