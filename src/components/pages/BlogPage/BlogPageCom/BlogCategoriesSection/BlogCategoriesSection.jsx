import React, { useRef } from "react";
import "./BlogCategoriesSection.css";
import Navbar from "../../../../shared/Navbar/Navbar";
import PageHeader from "../../../../shared/PageHeader/PageHeader";
import SocialSection from "../../../../shared/SocialSection/SocialSection";
import Footer from "../../../../shared/Footer/Footer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PopularPost from "../BlogAsideSection/BlogAsideData";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useRevealOnScroll } from "../../../../shared/useRevealOnScroll/useRevealOnScroll";

export default function BlogCategoriesSection() {
  const navigate = useNavigate();
  const location = useLocation();
  const { type, value } = useParams();

  // Ref for observing the section container
  const sectionRef = useRef(null);

  // Custom Hook: Reveal animation on scroll for each blog card
  useRevealOnScroll(sectionRef, ".blog-categories-card", 200);

  // Navigate to single blog page
  const handleReadMore = (post) => {
    navigate(`/blog/${post.id}`, { state: { post } });
  };

  // Determine whether we are filtering by category or tag
  const category =
    location.state?.category || (type === "category" ? value : null);
  const tag = location.state?.tag || (type === "tags" ? value : null);

  const pageType = category ? "category" : tag ? "tag" : null;
  if (!pageType) return <p>No category or tag provided.</p>;

  // Filter posts based on category or tag
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
        {/* Section container with ref for scroll observer */}
        <section className="blog-categories-section" ref={sectionRef}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => {
              // Extract the first paragraph of the post
              const firstParagraph = post.content.find(
                (item) => item.type === "paragraph"
              )?.text;

              return (
                <div className="blog-categories-card" key={post.id}>
                  {/* Post Image */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-categories-image"
                  />

                  {/* Post Content */}
                  <div className="blog-categories-content">
                    <span className="blog-categories-category">
                      {post.categories}
                    </span>
                    <h3 className="blog-categories-title">{post.title}</h3>

                    {/* Post Preview Text */}
                    {firstParagraph && (
                      <p className="blog-categories-paragraph">
                        {firstParagraph}
                      </p>
                    )}

                    {/* Read More Button */}
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
