import React from "react";
import Main from "../components/Main";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ConfirmationComponent from "../components/confirmation/Confirmation";

const Confirmation = () => {
  return (
    <>
      <Header />
      <Main>
        <ConfirmationComponent />
      </Main>
      <Footer />
    </>
  );
};

export default Confirmation;
