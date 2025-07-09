import React from "react";
import "./HomePage.css";
import Navbar from "../../shared/Navbar/Navbar.jsx";
import Footer from "../../shared/Footer/Footer.jsx";
import HomeHeaderSection from "./HomePageCom/HomeHeaderSection/HomeHeaderSection.jsx";
import SwiperSliderSection from "./HomePageCom/SwiperSliderSection/SwiperSliderSection.jsx";
import BestSellingSection from "./HomePageCom/BestSellingSection/BestSellingSection.jsx";
import HomeBannerSection from "./HomePageCom/HomeBannerSection/HomeBannerSection.jsx";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HomeHeaderSection />
      <SwiperSliderSection />
      <BestSellingSection />
      <HomeBannerSection />
      <Footer />
    </>
  );
}
