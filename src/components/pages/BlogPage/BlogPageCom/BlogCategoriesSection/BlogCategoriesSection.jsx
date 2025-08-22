import React from "react";
import "./BlogCategoriesSection.css";
import Navbar from "../../../../shared/Navbar/Navbar";
import PageHeader from "../../../../shared/PageHeader/PageHeader";
import SocialSection from "../../../../shared/SocialSection/SocialSection";
import Footer from "../../../../shared/Footer/Footer";
import { useLocation } from "react-router-dom";
import PopularPost from "../BlogAsideSection/BlogAsideData";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function BlogCategoriesSection() {
  const navigate = useNavigate();

  const handleReadMore = (post) => {
    navigate(`/blog/${post.id}`, { state: { post } });
  };
  
  // Get the current location object from react-router
  const location = useLocation();
  // Retrieve the category passed through state from navigation
  const category = location.state?.category;

  // If no category is found, display a message
  if (!category) return <p>Category not found</p>;

  // Filter posts to show only those that belong to the selected category
  const filteredPosts = PopularPost.filter(
    (post) => post.categories.trim() === category
  );

  return (
    <>
      <Navbar />
      <PageHeader title={category} />
      <div className="blog-categories-bg">
        <section className="blog-categories-section">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => {
              // Get the first paragraph from the content array
              const firstParagraph = post.content.find(
                (item) => item.type === "paragraph"
              )?.text;

              return (
                <div className="blog-categories-card" key={post.id}>
                  {/* Blog post image */}
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
            // Message if no posts are found for this category
            <p>No posts found for this category.</p>
          )}
        </section>
      </div>
      <SocialSection />
      <Footer />
    </>
  );
}
