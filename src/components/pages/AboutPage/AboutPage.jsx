import React from "react";
import "./AboutPage.css";
import Navbar from "../../shared/Navbar/Navbar";
import PageHeader from "../../shared/PageHeader/PageHeader";
import BrandIntroSection from "./AboutPageCom/BrandIntroSection/BrandIntroSection";
import VideoSection from "./AboutPageCom/VideoSection/VideoSection";
import OurCommitmentsSection from "./AboutPageCom/OurCommitmentsSection/OurCommitmentsSection";
import QuickStatsSection from "./AboutPageCom/QuickStatsSection/QuickStatsSection";
import OurChefSection from "./AboutPageCom/OurChefSection/OurChefSection";
import FAQSection from "./AboutPageCom/FAQSection/FAQSection";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHeader title={"About us"} />
      <BrandIntroSection />
      <VideoSection />
      <OurCommitmentsSection />
      <QuickStatsSection />
      <OurChefSection />
      <FAQSection />
    </>
  );
}
