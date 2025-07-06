import React from "react";
import "./HomePage.css";
import Navbar from "../../shared/Navbar/Navbar.jsx";
import Footer from "../../shared/Footer/Footer.jsx";
import HomeHeaderSection from "./HomePageCom/HomeHeaderSection/HomeHeaderSection.jsx";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HomeHeaderSection />
      <Footer />
    </>
  );
}
