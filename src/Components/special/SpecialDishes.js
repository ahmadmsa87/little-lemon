import Salad from "../../assets/images/salad.webp";
import Cuisine from "../../assets/images/cuisine3.jpeg";
import Dessert from "../../assets/images/dessert.webp";
import Card from "../card/Card";
import "./SpecialDishes.css";
import { NavLink } from "react-router-dom";

export default function SpecialDishes() {
  return (
    <section className="special-dishes">
      <article className="special-top-section">
        <h1>This weeks specials</h1>
        <NavLink to="/reservations">
          <button className="btn">Online Menu</button>
        </NavLink>
      </article>

      <section className="cards">
        <Card
          image={Salad}
          name="Greek Salad"
          price="$12.99"
          description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."
        />
        <Card
          image={Cuisine}
          name="Bruschetta"
          price="$16.99"
          description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."
        />
        <Card
          image={Dessert}
          name="Lemon Dessert"
          price="$8.50"
          description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."
        />
      </section>
    </section>
  );
}
