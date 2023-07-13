import TestimonialCard from "../testimonialCard/TestimonialCard";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonial-section">
      <article className="testimonials-top-section">
        <h1>Testimonials</h1>
      </article>

      <section className="testimonials-card-section">
        <TestimonialCard
          name="John Dou"
          description="This is the best Mediterranean food that I've ever had!"
        />
        <TestimonialCard
          name="Adam Caldwell"
          description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."
        />
        <TestimonialCard
          name="Chasy Laury"
          description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."
        />
        <TestimonialCard
          name="Mark Chennel"
          description="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here."
        />
      </section>
    </section>
  );
}
