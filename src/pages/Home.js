import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import SpecialDishes from "../components/special/SpecialDishes";
import Main from "../components/Main";
import Testimonials from "../components/testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <SpecialDishes />
        <Testimonials />
        <About />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
