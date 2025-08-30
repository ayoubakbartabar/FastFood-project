import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../../../shared/Navbar/Navbar.jsx";
import PageHeader from "../../../../shared/PageHeader/PageHeader.jsx";
import FeedbackSupportSection from "../FeedbackSupportSection/FeedbackSupportSection.jsx";
import SocialSection from "../../../../shared/SocialSection/SocialSection.jsx";
import Footer from "../../../../shared/Footer/Footer.jsx";
import ServiceFormSection from "../ServiceFormSection/ServiceFormSection.jsx";
import ServiceSectionData from "../ServiceSection/ServiceSectionData";
import "./ServiceCard.css";

export default function ServiceCard() {
  const { id } = useParams(); // get service id from URL
  const navigate = useNavigate();

  // Find the service by ID
  const service = ServiceSectionData.find((item) => String(item.id) === id);

  // Redirect if service not found
  if (!service) {
    navigate("/service");
    return null;
  }

  return (
    <>
      <Navbar />
      <PageHeader title={service.title} />

      <section className="service-card-section">
        <div className="service-card-content">
          {/* Render service content dynamically */}
          {service.content.map((item, index) => {
            if (item.type === "title") {
              return (
                <h2 className="service-card-content-title" key={index}>
                  {item.value}
                </h2>
              );
            } else if (item.type === "paragraph") {
              return (
                <p className="service-card-content-paragraph" key={index}>
                  {item.value}
                </p>
              );
            }
            return null;
          })}
        </div>

        {/* Dynamic form section */}
        <ServiceFormSection service={service} />
      </section>

      <FeedbackSupportSection />
      <SocialSection />
      <Footer />
    </>
  );
}
