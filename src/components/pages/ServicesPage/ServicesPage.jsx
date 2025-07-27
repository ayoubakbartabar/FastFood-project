import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import SocialSection from "../../shared/SocialSection/SocialSection";
import Footer from "../../shared/Footer/Footer";
import PageHeader from "../../shared/PageHeader/PageHeader";
import ServiceSection from "./ServicespageCom/ServiceSection/ServiceSection";

export default function ServicesPage() {
  return (
    <>
      <PageHeader title={"Service"} />
      <Navbar />
      <ServiceSection />
      <SocialSection />
      <Footer />
    </>
  );
}
