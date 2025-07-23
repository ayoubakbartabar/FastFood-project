import React from "react";
import "./ShopPage.css";
import Navbar from "../../shared/Navbar/Navbar.jsx";
import PageHeader from "../../shared/PageHeader/PageHeader.jsx";
import ShopSliderSection from "./ShopPageCom/ShopSliderSection/ShopSliderSection.jsx";
import SocialSection from "../../shared/SocialSection/SocialSection.jsx";
import Footer from "../../shared/Footer/Footer.jsx";
export default function ShopPage() {
  return (
    <>
      <Navbar />
      <PageHeader title={"Shop"} />
      <ShopSliderSection />
      <SocialSection />
      <Footer />
    </>
  );
}
