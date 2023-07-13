import Cuisine from "../../assets/images/cuisine3.jpeg";
import "./Wrapper.css";

export default function Wrapper({ label }) {
  return (
    <section className="main-wrapper">
      <img
        className="wrapper-header"
        src={Cuisine}
        alt="Little Lemon food"
      ></img>
      <div className="wrapper-header-text">
        <h1>{label}</h1>
      </div>
    </section>
  );
}
