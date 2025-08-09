import React, { useEffect, useRef } from "react";
import "./TagsSection.css";
import PopularPost from "../BlogAsideData";

const uniqueTags = [
  ...new Set(PopularPost.flatMap((post) => post.tags.map((tag) => tag.trim()))),
];

export default function TagsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const buttons = sectionRef.current.querySelectorAll(".tag-item");
          buttons.forEach((btn, index) => {
            setTimeout(() => {
              btn.classList.add("show");
            }, index * 150);
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
    <aside className="tags-aside" ref={sectionRef}>
      <h3 className="tags-title">Tags</h3>
      <div className="tags-container">
        {uniqueTags.map((tag, index) => (
          <button key={index} className="tag-item">
            {tag}
          </button>
        ))}
      </div>
    </aside>
  );
}
