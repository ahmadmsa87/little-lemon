import React from "react";
import Main from "../components/Main";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Reservation from "../components/reservation/Reservation";

const Reservations = () => {
  return (
    <>
      <Header />
      <Main>
        <Reservation />
      </Main>
      <Footer />
    </>
  );
};

export default Reservations;
