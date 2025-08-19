import React, { useEffect, useRef } from "react";
import "./BlogsContentSection.css";
import PopularPost from "../BlogAsideSection/BlogAsideData";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function BlogsContentSection() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const handleReadMore = (post) => {
    navigate(`/blog/${post.id}`, { state: { post } });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const cards =
            sectionRef.current.querySelectorAll(".blog-content-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("show");
            }, index * 200);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
