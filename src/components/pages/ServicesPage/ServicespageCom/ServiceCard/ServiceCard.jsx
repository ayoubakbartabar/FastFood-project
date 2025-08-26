import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../../../shared/Navbar/Navbar.jsx";
import PageHeader from "../../../../shared/PageHeader/PageHeader.jsx";
import FeedbackSupportSection from "../FeedbackSupportSection/FeedbackSupportSection.jsx";
import SocialSection from "../../../../shared/SocialSection/SocialSection.jsx";
import Footer from "../../../../shared/Footer/Footer.jsx";
import ServiceFormSection from "../ServiceFormSection/ServiceFormSection.jsx";
import "./ServiceCard.css";

export default function ServiceCard() {
  const location = useLocation();
  const { service } = location.state || {};

  if (!service) {
    return <p>No service data available.</p>;
  }

  return (
    <>
      <Navbar />
      <PageHeader title={service.title} />
      <section className="service-card-section">
        <div className="service-card-content">
          {service.content.map((item, idx) => {
            if (item.type === "title") {
              return (
                <h2 className="service-card-content-title" key={idx}>
                  {item.value}
                </h2>
              );
            } else if (item.type === "paragraph") {
              return (
                <p className="service-card-content-paragraph" key={idx}>
                  {item.value}
                </p>
              );
            }
            return null;
          })}
        </div>
        <ServiceFormSection service={service} />
      </section>
      <FeedbackSupportSection />
      <SocialSection />
      <Footer />
    </>
  );
}
