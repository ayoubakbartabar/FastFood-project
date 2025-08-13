import React, { useState, useEffect } from "react";
import BestSellingData from "./BestSellingData";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./BestSellingSection.css";

export default function BestSellingSection() {
  // State for current carousel index
  const [index, setIndex] = useState(0);

  // State to check if screen size is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  // Total number of products
  const total = BestSellingData.length;

  // Number of cards visible at a time (all on mobile, 4 on desktop)
  const visibleCards = isMobile ? total : 4;

  // React Router navigation hook
  const navigate = useNavigate();

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      setIndex(0); // Reset carousel index when resizing
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Go to next carousel slide (desktop only)
  const next = () => {
    if (isMobile) return;
    setIndex((prev) =>
      prev + visibleCards >= total ? 0 : prev + visibleCards
    );
  };

  // Go to previous carousel slide (desktop only)
  const prev = () => {
    if (isMobile) return;
    setIndex((prev) =>
      prev - visibleCards < 0 ? total - visibleCards : prev - visibleCards
    );
  };

  // Get visible product cards based on carousel index
  const getVisibleData = () => {
    if (isMobile) {
      // Show all cards in grid on mobile
      return BestSellingData;
    }
    // Loop back to start if reaching the end
    if (index + visibleCards > total) {
      return [
        ...BestSellingData.slice(index),
        ...BestSellingData.slice(0, visibleCards - (total - index)),
      ];
    }
    return BestSellingData.slice(index, index + visibleCards);
  };

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="star full" />);
      } else if (i === Math.ceil(rating) && rating % 1 >= 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="star half" />);
      } else {
        stars.push(<FaRegStar key={i} className="star empty" />);
      }
    }
    return stars;
  };

  // Animation effect: show product card when visible in viewport
  useEffect(() => {
    const cards = document.querySelectorAll(".product-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [index, isMobile]);

  // Navigate to product detail page with product data
  const goToProductPage = (item) => {
    navigate(`/product/${item.id}`, { state: item });
  };

  return (
    <div className="best-selling-bg">
      <section className="best-selling-section">
        {/* Section Title */}
        <div className="best-selling-top">
          <h1 className="best-selling-title">Best Selling Items</h1>
          <p className="best-selling-paragraph">
            Inspect background group content align export move. Background
            prototype arrange team inspect clip.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="carousel-wrapper">
          {/* Left navigation button (desktop only) */}
          {!isMobile && (
            <button className="carousel-button left" onClick={prev}>
              <IoChevronBack />
            </button>
          )}

          {/* Product Cards */}
          <div
            className={`carousel-track ${
              isMobile ? "grid-view" : "carousel-view"
            }`}
          >
            {getVisibleData().map((item) => (
              <div key={item.id} className="product-card animate-entry">
                {/* Clickable product image */}
                <div
                  className="product-image"
                  style={{ cursor: "pointer" }}
                  onClick={() => goToProductPage(item)}
                >
                  <img src={item.image} alt={item.title} />
                </div>

                {/* Clickable product title */}
                <h3
                  className="product-title"
                  style={{ cursor: "pointer" }}
                  onClick={() => goToProductPage(item)}
                >
                  {item.title}
                </h3>

                {/* Star Rating */}
                <div className="product-stars">{renderStars(item.star)}</div>

                {/* Price */}
                <p className="product-price">${item.price.toFixed(2)} USD</p>
              </div>
            ))}
          </div>

          {/* Right navigation button (desktop only) */}
          {!isMobile && (
            <button className="carousel-button right" onClick={next}>
              <IoChevronForward />
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
