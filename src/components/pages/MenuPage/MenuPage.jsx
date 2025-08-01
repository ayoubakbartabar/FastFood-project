import React from "react";
import "./MenuPage.css";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import PageHeader from "../../shared/PageHeader/PageHeader";
import SocialSection from "../../shared/SocialSection/SocialSection";
import SwiperSliderSection from "../../shared/SwiperSliderSection/SwiperSliderSection";

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <PageHeader title={"Menu"} />
      <SwiperSliderSection />
      <SocialSection />
      <Footer />
    </>
  );
}
