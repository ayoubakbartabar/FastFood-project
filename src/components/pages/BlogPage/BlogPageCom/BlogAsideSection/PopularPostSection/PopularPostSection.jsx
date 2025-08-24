import React, { useRef } from "react";
import { IoSearch } from "react-icons/io5";
import "./PopularPostSection.css";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../../../../../shared/BlogContext/BlogContext";
import { useRevealOnScroll } from "../../../../../shared/useRevealOnScroll/useRevealOnScroll";

export default function PopularPostSection() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const { posts } = useBlog(); // Get posts from context

  // Handle click on post -> navigate to blog detail page
  const handleReadMore = (post) => {
    navigate(`/blog/${post.id}`, { state: { post } });
  };

  // Apply reveal-on-scroll animation
  useRevealOnScroll(sectionRef, ".popular-post-item", 200);

  return (
    <aside className="blog-aside" ref={sectionRef}>
      {/* Search box */}
      <div className="search-box">
        <input type="text" placeholder="Search…" />
        <span className="search-icon">
          <IoSearch />
        </span>
      </div>

      {/* Popular posts list */}
      <div className="popular-posts">
        <h3>Popular Post</h3>
        <div className="underline"></div>
        {posts.map((post) => (
          <div key={post.id} className="popular-post-item">
            <img src={post.image} alt={post.title} />
            <p onClick={() => handleReadMore(post)}>{post.title}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}
