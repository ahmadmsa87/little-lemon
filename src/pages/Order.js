import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Main from "../components/Main";
import Wrapper from "../components/wrapper/Wrapper";

const Order = () => {
  return (
    <>
      <Header />
      <Main>
        <Wrapper label="Order Online" />
      </Main>
      <Footer />
    </>
  );
};

export default Order;
