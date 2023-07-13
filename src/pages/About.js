import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AboutComponent from "../components/about/About";
import Main from "../components/Main";

const About = () => {
  return (
    <>
      <Header />
      <Main>
        <AboutComponent />
      </Main>
      <Footer />
    </>
  );
};

export default About;
