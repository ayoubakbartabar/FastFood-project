import React, { useRef } from "react";
import "./BlogsContentSection.css";
import PopularPost from "../BlogAsideSection/BlogAsideData";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useRevealOnScroll } from "../../../../shared/useRevealOnScroll/useRevealOnScroll"; 

export default function BlogsContentSection() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const handleReadMore = (post) => {
    navigate(`/blog/${post.id}`, { state: { post } });
  };

  // Reveal cards from right to left with stagger animation
  useRevealOnScroll(sectionRef, ".blog-content-card", {
    delay: 200,
    direction: "right",
    threshold: 0.2,
  });

  return (
    <section className="blog-content-section" ref={sectionRef}>
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
              <button
                className="read-more"
                onClick={() => handleReadMore(item)}
              >
                Read more <MdOutlineArrowRightAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
