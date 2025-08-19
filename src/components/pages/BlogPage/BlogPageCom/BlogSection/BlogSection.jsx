import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../../../shared/Navbar/Navbar";
import PageHeader from "../../../../shared/PageHeader/PageHeader";
import SocialSection from "../../../../shared/SocialSection/SocialSection";
import Footer from "../../../../shared/Footer/Footer";
import "./BlogSection.css";
import BlogAsideSection from "../BlogAsideSection/BlogAsideSection";
export default function BlogSection() {
  const location = useLocation();
  const post = location.state?.post;

  if (!post) return <p>Post not found</p>;

  return (
    <section className="blog-section">
      <Navbar />
      <PageHeader title={post.title} />
      <div className="blog-section-main-wrapper">
        <div className="blog-aside-section">
          <BlogAsideSection />
        </div>
        <div className="blog-section-content">
          <img src={post.image} alt={post.title} className="blog-main-image" />
          <span className="blog-category">{post.categories}</span>

          {post.content.map((block, index) => {
            if (block.type === "paragraph") {
              return <p key={index}>{block.text}</p>;
            } else if (block.type === "title") {
              return <h2 key={index}>{block.text}</h2>;
            }
            return null;
          })}
        </div>
      </div>
      <SocialSection />
      <Footer />
    </section>
  );
}
