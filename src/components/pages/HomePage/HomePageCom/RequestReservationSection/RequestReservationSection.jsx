import React, { useEffect, useRef, useState } from "react";
import RequestReservationForm from "./RequestReservationForm";
import "./RequestReservationSection.css";

export default function RequestReservationSection() {
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const [visible, setVisible] = useState({ form: false, info: false });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === formRef.current && entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, form: true }));
          }
          if (entry.target === infoRef.current && entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, info: true }));
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
      if (infoRef.current) observer.unobserve(infoRef.current);
    };
  }, []);

  return (
    <div className="request-reservation-bg">
      <section className="request-reservation">
        <div className="reservation-container">
          <div
            ref={formRef}
            className={`reservation-form animate-slide-in-left ${
              visible.form ? "show" : ""
            }`}
          >
            <RequestReservationForm />
          </div>
          <div
            ref={infoRef}
            className={`reservation-info animate-slide-in-right ${
              visible.info ? "show" : ""
            }`}
          >
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
