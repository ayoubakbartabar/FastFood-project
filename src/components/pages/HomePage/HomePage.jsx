import React from "react";
import "./HomePage.css";
import Navbar from "../../shared/Navbar/Navbar.jsx";
import HomeHeaderSection from "./HomePageCom/HomeHeaderSection/HomeHeaderSection.jsx";
import SwiperSliderSection from "../../shared/SwiperSliderSection/SwiperSliderSection.jsx";
import BestSellingSection from "./HomePageCom/BestSellingSection/BestSellingSection.jsx";
import HomeBannerSection from "./HomePageCom/HomeBannerSection/HomeBannerSection.jsx";
import PopularItemsSection from "./HomePageCom/PopularItemsSection/PopularItemsSection.jsx";
import RequestReservationSection from "./HomePageCom/RequestReservationSection/RequestReservationSection.jsx";
import WhyChooseUsSection from "./HomePageCom/WhyChooseUsSection/WhyChooseUsSection.jsx";
import TestimonialCarouselSection from "../../shared/TestimonialCarouselSection/TestimonialCarouselSection.jsx";
import HomePageBlogSection from "./HomePageCom/HomePageBlogSection/HomePageBlogSection.jsx";
import LocationSection from "./HomePageCom/LocationSection/LocationSection.jsx";
import SocialSection from "../../shared/SocialSection/SocialSection.jsx";
import Footer from "../../shared/Footer/Footer.jsx";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HomeHeaderSection />
      <SwiperSliderSection />
      <BestSellingSection />
      <HomeBannerSection />
      <PopularItemsSection />
      <RequestReservationSection />
      <WhyChooseUsSection />
      <TestimonialCarouselSection />
      <HomePageBlogSection />
      <LocationSection />
      <SocialSection />
      <Footer />
    </>
  );
}
