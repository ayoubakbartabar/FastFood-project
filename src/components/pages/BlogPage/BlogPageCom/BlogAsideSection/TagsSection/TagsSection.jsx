import React from "react";
import "./TagsSection.css";
import PopularPost from "../BlogAsideData";

const uniqueTags = [
  ...new Set(PopularPost.flatMap((post) => post.tags.map((tag) => tag.trim()))),
];

export default function TagsSection() {
  return (
    <aside className="tags-aside">
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
