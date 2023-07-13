import React from "react";
import ReservationForm from "./ReservationForm";
import "./Reservation.css";
import ReservationHeader from "./ReservationHeader";

function Reservation() {
  return (
    <div className="reservation-content-wrapper">
      <div className="reservation-content-container">
        <ReservationHeader className="top" />
        <div className="reservation-form">
          <h1>Reserve a Table</h1>
          <p>
            To book your reservation at Little Lemon, please fill in and submit
            this form.
          </p>
          <ReservationForm />
        </div>
        <ReservationHeader className="side" />
      </div>
    </div>
  );
}

export default Reservation;
