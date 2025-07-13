import React from "react";
import "./HomePageBlogSection.css";
import HomePageBlogData from "./HomePageBlogData.js";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function HomePageBlogSection() {
  return (
    <div className="home-page-blog-bg">
      <section className="home-page-blog-section">
        <div className="home-page-blog-top">
          <h1 className="home-page-blog-title">Fastfood TNC Blog</h1>
          <p className="home-page-blog-paragraph">
            Delve into Our Culinary Stories, Tips, and Behind-the-Scenes
            Delights.
          </p>
        </div>

        <div className="home-page-blog-grid">
          {HomePageBlogData.map((item) => (
            <div className="blog-card" key={item.id}>
              <img src={item.image} alt={item.title} className="blog-image" />
              <div className="blog-content">
                <span className="blog-category">{item.category}</span>
                <h3 className="blog-title">{item.title}</h3>
                <p className="blog-paragraph">{item.paragraph}</p>
                <a href="#" className="read-more">
                  Read more <MdOutlineArrowRightAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
