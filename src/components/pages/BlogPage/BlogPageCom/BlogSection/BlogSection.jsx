import React from "react";
import "./BlogSection.css";
import BlogAsideSection from "../BlogAsideSection/BlogAsideSection";
import Navbar from "../../../../shared/Navbar/Navbar";
import PageHeader from "../../../../shared/PageHeader/PageHeader";
import SocialSection from "../../../../shared/SocialSection/SocialSection";
import Footer from "../../../../shared/Footer/Footer";

export default function BlogSection() {
  return (
    <section className="blog-section">
      <Navbar />
      <PageHeader title={"blog"} />
      <div className="blog-section-main-wrapper">
        <div className="blog-aside-section">
          <BlogAsideSection />
        </div>

        <div className="blog-section-content"></div>
      </div>
      <SocialSection />
      <Footer />
    </section>
  );
}
