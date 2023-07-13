import React from "react";
import "./Reservation.css";

function ReservationHeader({ className }) {
  return (
    <div className={`reservation-header ${className}`}>
      <h2>Experience the perfect Mediterranean tradition.</h2>
      <p>
        At Little Lemon, we take great pride in providing the pleasant
        experience to our customers.
      </p>
      <p>Book a table with us and start your journey.</p>
    </div>
  );
}

export default ReservationHeader;
