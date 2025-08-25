import React, { useEffect, useRef, useState } from "react";
import "./HomePageBlogSection.css";
import HomePageBlogData from "./HomePageBlogData.js";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function HomePageBlogSection() {
  const [visible, setVisible] = useState(false);
  const topRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!topRef.current) return;
      const rect = topRef.current.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.85) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="home-page-blog-bg">
      <section
        className={`home-page-blog-section ${visible ? "slide-up" : ""} `}
        ref={topRef}
      >
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
                <a href="/blogs" className="read-more">
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
