import React from "react";
import "./ProductPage.css";
import Navbar from "../../shared/Navbar/Navbar";
import PageHeader from "../../shared/PageHeader/PageHeader";
import SocialSection from "../../shared/SocialSection/SocialSection";
import Footer from "../../shared/Footer/Footer";

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <PageHeader title={"Shop Details"} />
      <SocialSection />
      <Footer />
    </>
  );
}
