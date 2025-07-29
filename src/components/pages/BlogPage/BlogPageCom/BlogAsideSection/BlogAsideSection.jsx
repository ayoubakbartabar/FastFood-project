import React from "react";
import "./BlogAsideSection.css";
import PopularPostSection from "./PopularPostSection/PopularPostSection";

export default function BlogAsideSection() {
  return (
    <div className="blog-layout-container">
      <PopularPostSection />
    </div>
  );
}
