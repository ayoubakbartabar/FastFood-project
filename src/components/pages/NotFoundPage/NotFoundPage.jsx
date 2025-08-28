import React from "react";
import "./NotFoundPage.css";
import Navbar from "../../shared/Navbar/Navbar";
import PageHeader from "../../shared/PageHeader/PageHeader";
import SocialSection from "../../shared/SocialSection/SocialSection";
import Footer from "../../shared/Footer/Footer";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <PageHeader title={"404"} />
      <SocialSection />
      <Footer />
    </>
  );
}
