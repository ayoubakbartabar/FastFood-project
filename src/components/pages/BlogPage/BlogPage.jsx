import React from "react";
import "./BlogPage.css";
import Navbar from "../../shared/Navbar/Navbar";
import PageHeader from "../../shared/PageHeader/PageHeader";
import SocialSection from "../../shared/SocialSection/SocialSection";
import Footer from "../../shared/Footer/Footer";
import BlogAsideSection from "./BlogPageCom/BlogAsideSection/BlogAsideSection";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <PageHeader title={"Blog"} />
      <BlogAsideSection />
      <SocialSection />
      <Footer />
    </>
  );
}
