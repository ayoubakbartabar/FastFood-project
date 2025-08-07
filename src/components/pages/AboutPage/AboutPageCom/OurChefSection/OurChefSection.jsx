import React, { useState, useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import OurChefData from "./OurChefData";
import "./OurChefSection.css";

export default function OurChefSection() {
  // State to track the starting index of visible chefs
  const [startIndex, setStartIndex] = useState(0);
  // State to manage the current animation class for sliding effect
  const [animationClass, setAnimationClass] = useState("");

  const ITEMS_PER_PAGE = 3;
  const totalItems = OurChefData.length;

  // Calculate the chefs that are currently visible based on startIndex
  const visibleChefs = OurChefData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Function to handle slide animation and update visible chefs
  const handleSlide = (direction) => {
    // 1. Add slide-out animation class based on direction
    setAnimationClass(`slide-out-${direction}`);

    setTimeout(() => {
      // 2. Calculate new start index based on slide direction and wrap around
      const newIndex =
        direction === "left"
          ? startIndex - ITEMS_PER_PAGE < 0
            ? totalItems - ITEMS_PER_PAGE
            : startIndex - ITEMS_PER_PAGE
          : startIndex + ITEMS_PER_PAGE >= totalItems
          ? 0
          : startIndex + ITEMS_PER_PAGE;

      // Update the start index state to show new set of chefs
      setStartIndex(newIndex);

      // 3. Add slide-in animation class from opposite direction
      setAnimationClass(`slide-in-${direction}`);
    }, 300);

    // 4. Clear animation class after animation completes to reset styles
    setTimeout(() => {
      setAnimationClass("");
    }, 600);
  };
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <div className="our-chef-bg">
      <section
        ref={sectionRef}
        className={`our-chef-section ${isVisible ? "visible" : ""}`}
      >
        <div className="our-chef-top">
          <h1 className="our-chef-title">Our expert chef</h1>
          <p className="our-chef-paragraph">
            Invite edit component vertical rectangle component follower asset
            share. Main select community connection opacity share device.
          </p>
        </div>
        <div className="carousel-container">
          {/* Left arrow button triggers slide to previous chefs */}
          <button
            className="arrow-btn left"
            onClick={() => handleSlide("left")}
          >
            <IoIosArrowBack />
          </button>

          {/* Container for chef cards with animation classes applied */}
          <div className={`chef-cards ${animationClass}`}>
            {/* Map over visible chefs and render individual cards */}
            {visibleChefs.map((chef) => (
              <div key={chef.id} className="chef-card">
                <div className="chef-image-container">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="chef-image"
                  />
                </div>
                <div className="chef-info">
                  <h3>{chef.name}</h3>
                  <p>{chef.role}</p>

                  {/* Social media icons with specific color classes */}
                  <div className="social-icons">
                    <FaFacebookF className="facebook" />
                    <FaInstagram className="instagram" />
                    <FaPinterestP className="pinterest" />
                    <FaTwitter className="twitter" />
                    <FaYoutube className="youtube" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow button triggers slide to next chefs */}
          <button
            className="arrow-btn right"
            onClick={() => handleSlide("right")}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </section>
    </div>
  );
}
