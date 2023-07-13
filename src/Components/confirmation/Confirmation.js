import React from "react";
import "./Confirmation.css";

function Confirmation() {
  return (
    <div className="confirmation-content-wrapper">
      <div className="confirmation-content-container">
        <section className="confirmation-header-text">
          <h1>Your Reservation has been Confirmed!</h1>
          <h3>A confirmation message has been sent to your email address.</h3>
          <h4>Thanks for using our service!</h4>
        </section>
      </div>
    </div>
  );
}

export default Confirmation;
