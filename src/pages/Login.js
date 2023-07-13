import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Main from "../components/Main";
import Wrapper from "../components/wrapper/Wrapper";

const Login = () => {
  return (
    <>
      <Header />
      <Main>
        <Wrapper label="Login" />
      </Main>
      <Footer />
    </>
  );
};

export default Login;
