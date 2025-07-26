import React, { useState } from "react";
import "./ShopPage.css";
import Navbar from "../../shared/Navbar/Navbar.jsx";
import PageHeader from "../../shared/PageHeader/PageHeader.jsx";
import ShopAsideSection from "./ShopPageCom/ShopAsideSection/ShopAsideSection.jsx";
import ShopProductSection from "./ShopPageCom/ShopProductSection/ShopProductSection.jsx";
import SocialSection from "../../shared/SocialSection/SocialSection.jsx";
import Footer from "../../shared/Footer/Footer.jsx";

export default function ShopPage() {
  // state for selected category
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <>
      <Navbar />
      <PageHeader title={"Shop"} />

      <div className="shop-main-wrapper">
        <ShopAsideSection
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <ShopProductSection selectedCategory={selectedCategory} />
      </div>

      <SocialSection />
      <Footer />
    </>
  );
}
