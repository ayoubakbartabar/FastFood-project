import React from "react";
import "./BlogSection.css";
import BlogAsideSection from "../BlogAsideSection/BlogAsideSection";

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="blog-section-main-wrapper">
        <div className="blog-aside-section">
          <BlogAsideSection />
        </div>

        <div className="blog-section-content"></div>
      </div>
    </section>
  );
}
