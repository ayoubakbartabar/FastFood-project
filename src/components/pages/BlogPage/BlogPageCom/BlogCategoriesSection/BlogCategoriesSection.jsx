import React from "react";
import "./BlogCategoriesSection.css ";
import Navbar from "../../../../shared/Navbar/Navbar";
import PageHeader from "../../../../shared/PageHeader/PageHeader";
import SocialSection from "../../../../shared/SocialSection/SocialSection";
import Footer from "../../../../shared/Footer/Footer";

export default function BlogCategoriesSection() {
  return (
    <div className="blog-categories-bg">
      <Navbar />
      <PageHeader title={"enter categories name "} />
      <section className="blog-categories-section"></section>
      <SocialSection />
      <Footer />
    </div>
  );
}
