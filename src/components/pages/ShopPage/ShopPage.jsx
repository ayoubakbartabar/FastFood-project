import React from "react";
import "./ShopPage.css";
import Navbar from "../../shared/Navbar/Navbar.jsx";
import PageHeader from "../../shared/PageHeader/PageHeader.jsx";
import ShopAsideSection from "./ShopPageCom/ShopAsideSection/ShopAsideSection.jsx";
import ShopProductSection from "./ShopPageCom/ShopProductSection/ShopProductSection.jsx";
import SocialSection from "../../shared/SocialSection/SocialSection.jsx";
import Footer from "../../shared/Footer/Footer.jsx";

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <PageHeader title={"Shop"} />

      {/* WRAPPER FLEX: Aside + Product */}
      <div className="shop-main-wrapper">
        <ShopAsideSection />
        <ShopProductSection />
      </div>
      <SocialSection />
      <Footer />
    </>
  );
}
