import React from "react";
import "./ContactUsPage.css";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import PageHeader from "../../shared/PageHeader/PageHeader";
import SocialSection from "../../shared/SocialSection/SocialSection";
import LocationSection from "../../shared/LocationSection/LocationSection";
import JoinUsSection from "./ContactUsPageCom/JoinUsSection/JoinUsSection";

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <PageHeader title={"Contact Us"} />
      <JoinUsSection />
      <LocationSection />
      <SocialSection />
      <Footer />
    </>
  );
}
