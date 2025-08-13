import React from "react";
import { useLocation } from "react-router-dom";
import "./ProductPage.css";
import Navbar from "../../shared/Navbar/Navbar";
import PageHeader from "../../shared/PageHeader/PageHeader";
import SocialSection from "../../shared/SocialSection/SocialSection";
import Footer from "../../shared/Footer/Footer";
import ProductListSection from "./ProductCom/ProductListSection/ProductListSection";

export default function ProductPage() {
  const location = useLocation();
  const productData = location.state;

  return (
    <>
      <Navbar />
      <PageHeader title={"Shop Details"} />
      <ProductListSection product={productData} />
      <SocialSection />
      <Footer />
    </>
  );
}
