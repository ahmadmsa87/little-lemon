import React from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css";

import PlateImage from "../../assets/images/plate.jpg";

const Hero = () => {
  return (
    <div className="hero-background">
      <div className="hero-container">
        <div className="hero-left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, located on Maldove
            Street in Chicago, Illionis. We focus on traditional recipes served
            with a modern twist.
          </p>
          <NavLink to="/reservations">
            <button className="btn">Reserve a Table</button>
          </NavLink>
        </div>
        <div className="hero-right">
          <div className="image-box">
            <img src={PlateImage} alt="Serving delicious dishes" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
