import React from "react";
import "./ServiceCard.css";
import Navbar from "../../../../shared/Navbar/Navbar.jsx";
import PageHeader from "../../../../shared/PageHeader/PageHeader.jsx";
import FeedbackSupportSection from "../../../../shared/FeedbackSupportSection/FeedbackSupportSection.jsx";
import SocialSection from "../../../../shared/SocialSection/SocialSection.jsx";
import Footer from "../../../../shared/Footer/Footer.jsx";

export default function ServiceCard() {
  return (
    <>
      <Navbar />
      <PageHeader title={"ABCD"} />
      <section className="service-card-section">

      </section>
      <FeedbackSupportSection />
      <SocialSection />
      <Footer />
    </>
  );
}
