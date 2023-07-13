import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./TestimonialCard.css";

export default function TestimonialCard({ name, description }) {
  return (
    <article className="testimonial-card">
      <FontAwesomeIcon icon={faStar} size="6x" color="#f4ce14" />
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  );
}
