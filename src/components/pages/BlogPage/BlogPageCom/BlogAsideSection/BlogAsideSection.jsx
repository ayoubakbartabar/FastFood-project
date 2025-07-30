import React from "react";
import "./BlogAsideSection.css";
import PopularPostSection from "./PopularPostSection/PopularPostSection";
import CategoriesSection from "./CategoriesSection/CategoriesSection";

export default function BlogAsideSection() {
  return (
    <div className="blog-layout-container">
      <PopularPostSection />
      <CategoriesSection />
    </div>
  );
}
