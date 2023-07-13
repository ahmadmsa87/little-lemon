import Cuisine1 from "../../assets/images/cuisine1.jpeg";
import Cuisine2 from "../../assets/images/cuisine2.jpeg";
import "./About.css";

export default function About() {
  return (
    <article className="about-section">
      <section className="about-text-section">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="about-main-text">
          Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
          Despite the city's diversity, the two brothers recognized the lack of
          Mediterranean cuisine in Chicago, and were inspired to bring the
          flavors of their hometown in Italy to the people of Chicago. The two
          brothers continue to oversee the Little Lemon restaurant, nearly
          thirty years later.
        </p>
      </section>

      <section className="about-image">
        <img className="about-img-top" src={Cuisine1} alt="cuisine 1"></img>
        <img className="about-img-bottom" src={Cuisine2} alt="cuisine 2"></img>
      </section>
    </article>
  );
}
