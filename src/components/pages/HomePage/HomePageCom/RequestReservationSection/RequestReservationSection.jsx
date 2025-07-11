import React from "react";
import RequestReservationForm from "./RequestReservationForm";
import "./RequestReservationSection.css";

export default function RequestReservationSection() {
  return (
    <div className="request-reservation-bg">
      <section className="request-reservation">
        <div className="reservation-container">
          <div className="reservation-form">
            <RequestReservationForm />
          </div>
          <div className="reservation-info">
            <span className="reservation-subtitle">Reserve your table</span>
            <h2 className="reservation-title">
              Elevate Your Dining <br />
              Experience with a Reserved <br />
              Table at FastFood TNC
            </h2>
            <p className="reservation-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="reservation-image-wrapper">
              <img
                className="reservation-image"
                src="/image/661ccbf8ce5a04ced085a82f_image.png"
                alt="Restaurant table"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
