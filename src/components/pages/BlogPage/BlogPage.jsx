import React from "react";
import "./BlogPage.css";
import Navbar from "../../shared/Navbar/Navbar";
import PageHeader from "../../shared/PageHeader/PageHeader";
import BlogAsideSection from "./BlogPageCom/BlogAsideSection/BlogAsideSection";
import SocialSection from "../../shared/SocialSection/SocialSection";
import Footer from "../../shared/Footer/Footer";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <PageHeader title={"Blog"} />

      <div className="blog-main-wrapper">
        <BlogAsideSection />
      </div>

      <SocialSection />
      <Footer />
    </>
  );
}
