import React, { useEffect, useRef, useState } from "react";
import "./ShopAsideSection.css";
import ShopProductData from "../ShopProductData/ShopProductData";
import { FaSearch } from "react-icons/fa";

export default function ShopAsideSection({
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = [
    "all",
    ...new Set(
      ShopProductData.map((item) => item.category.trim().toLowerCase())
    ),
  ];

  const asideRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 }
    );

    if (asideRef.current) {
      observer.observe(asideRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <aside ref={asideRef} className={`shop-aside ${isVisible ? "show" : ""}`}>
      <div className="shop-search-box">
        <input type="text" placeholder="Search" className="shop-search-input" />
        <button className="shop-search-btn">
          <FaSearch />
        </button>
      </div>

      <div className="shop-categories-box">
        <h3 className="shop-categories-title">Categories</h3>
        <ul className="shop-categories-list">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`shop-category-item ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
