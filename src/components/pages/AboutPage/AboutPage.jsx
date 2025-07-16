import React from "react";
import "./AboutPage.css";
import Navbar from "../../shared/Navbar/Navbar";
import PageHeader from "../../shared/PageHeader/PageHeader";
import BrandIntroSection from "./AboutPageCom/BrandIntroSection/BrandIntroSection";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHeader title={"About us"} />
      <BrandIntroSection />
    </>
  );
}
