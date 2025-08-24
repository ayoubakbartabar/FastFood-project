import React from "react";
import "./BlogPage.css";
import Navbar from "../../shared/Navbar/Navbar";
import PageHeader from "../../shared/PageHeader/PageHeader";
import BlogAsideSection from "./BlogPageCom/BlogAsideSection/BlogAsideSection";
import SocialSection from "../../shared/SocialSection/SocialSection";
import Footer from "../../shared/Footer/Footer";
import BlogsContentSection from "./BlogPageCom/BlogsContentSection/BlogsContentSection";
import { BlogProvider } from "../../shared/BlogContext/BlogContext";

export default function BlogPage() {
  return (
    <BlogProvider>
      <Navbar />
      <PageHeader title={"Blog"} />
      <div className="blog-main-wrapper">
        <div className="blog-aside-section">
          <BlogAsideSection />
        </div>

        <div className="blogs-content-section">
          <BlogsContentSection />
        </div>
      </div>

      <SocialSection />
      <Footer />
    </BlogProvider>
  );
}
