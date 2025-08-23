import React from "react";
import "./BlogCategoriesSection.css";
import Navbar from "../../../../shared/Navbar/Navbar";
import PageHeader from "../../../../shared/PageHeader/PageHeader";
import SocialSection from "../../../../shared/SocialSection/SocialSection";
import Footer from "../../../../shared/Footer/Footer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PopularPost from "../BlogAsideSection/BlogAsideData";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function BlogCategoriesSection() {
  const navigate = useNavigate();
  const location = useLocation();
  const { type, value } = useParams();

  // Handle navigation to single blog post
  const handleReadMore = (post) => {
    navigate(`/blog/${post.id}`, { state: { post } });
  };

  /**
   * Detect if this page is showing category or tag.
   * Priority: state > URL params
   */
  const category =
    location.state?.category || (type === "category" ? value : null);
  const tag = location.state?.tag || (type === "tags" ? value : null);

  const pageType = category ? "category" : tag ? "tag" : null;

  // If no type detected, show error
  if (!pageType) return <p>No category or tag provided.</p>;

  // Filter posts
  let filteredPosts = [];
  if (pageType === "category") {
    filteredPosts = PopularPost.filter(
      (post) => post.categories.trim() === category
    );
  } else if (pageType === "tag") {
    filteredPosts = PopularPost.filter((post) =>
      post.tags.some((t) => t.trim() === tag)
    );
  }

  return (
    <>
      <Navbar />
      <PageHeader
        title={
          pageType === "category" ? `Category: ${category}` : `Tag: ${tag}`
        }
      />

      <div className="blog-categories-bg">
        <section className="blog-categories-section">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => {
              // Extract first paragraph of post
              const firstParagraph = post.content.find(
                (item) => item.type === "paragraph"
              )?.text;

              return (
                <div className="blog-categories-card" key={post.id}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-categories-image"
                  />
                  <div className="blog-categories-content">
                    <span className="blog-categories-category">
                      {post.categories}
                    </span>
                    <h3 className="blog-categories-title">{post.title}</h3>
                    {firstParagraph && (
                      <p className="blog-categories-paragraph">
                        {firstParagraph}
                      </p>
                    )}
                    <button
                      className="blog-categories-read-more"
                      onClick={() => handleReadMore(post)}
                    >
                      Read more <MdOutlineArrowRightAlt />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p>
              No posts found for this{" "}
              {pageType === "category" ? "category" : "tag"}.
            </p>
          )}
        </section>
      </div>
      <SocialSection />
      <Footer />
    </>
  );
}
