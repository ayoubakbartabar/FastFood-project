import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../../../shared/Navbar/Navbar";
import PageHeader from "../../../../shared/PageHeader/PageHeader";
import SocialSection from "../../../../shared/SocialSection/SocialSection";
import Footer from "../../../../shared/Footer/Footer";
import "./BlogSection.css";
import BlogAsideSection from "../BlogAsideSection/BlogAsideSection";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

export default function BlogSection() {
  const location = useLocation();
  const post = location.state?.post;

  if (!post) return <p>Post not found</p>;

  return (
    <section className="blog-section">
      <Navbar />
      <PageHeader title={post.title} />

      <div className="blog-section-main-wrapper">
        {/* Aside Section */}
        <div className="blog-aside-section">
          <BlogAsideSection />
        </div>

        {/* Blog Content */}
        <div className="blog-section-content">
          <img src={post.image} alt={post.title} className="blog-main-image" />
          <h2 className="blog-section-title">{post.title}</h2>

          {post.content.map((block, index) => {
            if (block.type === "paragraph") {
              return (
                <p key={index} className="blog-paragraph">
                  {block.text}
                </p>
              );
            } else if (block.type === "title") {
              return (
                <h2 key={index} className="blog-subtitle">
                  {block.text}
                </h2>
              );
            } else if (block.type === "image") {
              return (
                <img
                  key={index}
                  src="/image/661cabff491ead7e40ea57ec_image.png"
                  alt="blog related"
                  className="blog-image"
                />
              );
            }
            return null;
          })}

          {/* Footer Content */}
          <div className="blog-section-content-footer">
            <div className="blog-section-content-tags">
              <h3>Tags:</h3>
              <div className="blog-tags-wrapper">
                {post.tags.map((tag, i) => (
                  <span key={i} className="blog-tag-item">
                    {tag} ,
                  </span>
                ))}
              </div>
            </div>

            <div
              className="blog-section-content-social"
              aria-label="Social media links"
            >
              <h3>SHARE: </h3>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Pinterest">
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>
      </div>

      <SocialSection />
      <Footer />
    </section>
  );
}
