import React from "react";
import { IoSearch } from "react-icons/io5";
import "./PopularPostSection.css";
import PopularPost from '../BlogAsideData';

export default function PopularPostSection() {
  return (
    <>
      <aside className="blog-aside">
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
              <p>{post.title}</p>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
