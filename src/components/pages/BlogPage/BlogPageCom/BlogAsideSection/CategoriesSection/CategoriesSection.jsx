import React, { useEffect, useRef } from "react";
import { FiChevronRight } from "react-icons/fi";
import "./CategoriesSection.css";
import PopularPost from "../BlogAsideData";
import { useNavigate } from "react-router-dom";

// Extract unique categories
const uniqueCategories = [
  ...new Set(PopularPost.map((post) => post.categories.trim())),
];

export default function CategoriesSection() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const handleCategoriesBlog = (category) => {
    navigate(`/blog/category/${category}`, { state: { category } });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const items = sectionRef.current.querySelectorAll(".category-item");
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("show");
            }, index * 200);
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
    <aside className="categories-aside" ref={sectionRef}>
      <h3 className="categories-title">Categories</h3>
      <div className="categories-underline"></div>
      <ul className="categories-list">
        {uniqueCategories.map((category, index) => (
          <li
            onClick={() => handleCategoriesBlog(category)}
            key={index}
            className="category-item"
          >
            <FiChevronRight className="category-icon" />
            <span>{category}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
