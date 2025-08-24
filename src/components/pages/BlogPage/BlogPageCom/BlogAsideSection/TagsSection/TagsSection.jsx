import React, { useRef } from "react";
import "./TagsSection.css";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../../../../../shared/BlogContext/BlogContext";
import { useRevealOnScroll } from "../../../../../shared/useRevealOnScroll/useRevealOnScroll";

export default function TagsSection() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const { tags } = useBlog(); // Get unique tags from context

  // Handle tag click -> navigate to tags page
  const handleTagsBlog = (tag) => {
    navigate(`/blog/tags/${tag}`, { state: { tag } });
  };

  // Apply reveal-on-scroll animation
  useRevealOnScroll(sectionRef, ".tag-item", 150);

  return (
    <aside className="tags-aside" ref={sectionRef}>
      <h3 className="tags-title">Tags</h3>
      <div className="tags-container">
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => handleTagsBlog(tag)}
            className="tag-item"
          >
            {tag}
          </button>
        ))}
      </div>
    </aside>
  );
}
