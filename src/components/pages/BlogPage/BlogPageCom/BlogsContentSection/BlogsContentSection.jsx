import React from "react";
import "./BlogsContentSection.css";
import PopularPost from "../BlogAsideSection/BlogAsideData";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function BlogsContentSection() {
  return (
    <section className="blog-content-section">
      <div className="blog-content-grid">
        {PopularPost.map((item) => (
          <div className="blog-content-card" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="blog-content-image"
            />
            <div className="blog-content-content">
              <span className="blog-content-category">{item.categories}</span>
              <h3 className="blog-content-title">{item.title}</h3>
              <a href="#" className="read-more">
                Read more <MdOutlineArrowRightAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
