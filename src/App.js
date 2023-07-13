import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import About from "./pages/About";
import "./App.css";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </>
  );
}

export default App;
