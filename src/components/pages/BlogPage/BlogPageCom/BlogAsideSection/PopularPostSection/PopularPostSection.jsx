import React, { useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import "./PopularPostSection.css";
import PopularPost from "../BlogAsideData";
import { useNavigate } from "react-router-dom";

export default function PopularPostSection() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const handleReadMore = (post) => {
    navigate(`/blog/${post.id}`, { state: { post } });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const items =
            sectionRef.current.querySelectorAll(".popular-post-item");
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("show");
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
    <aside className="blog-aside" ref={sectionRef}>
      <div className="search-box">
        <input type="text" placeholder="Search…" />
        <span className="search-icon">
          <IoSearch />
        </span>
      </div>

      <div className="popular-posts">
        <h3>Popular Post</h3>
        <div className="underline"></div>
        {PopularPost.map((post) => (
          <div key={post.id} className="popular-post-item">
            <img src={post.image} alt={post.title} />
            <p onClick={() => handleReadMore(post)}>{post.title}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}
