import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HomeHeaderSection.css";
import HomeHeaderSectionData from "./HomeHeaderSectionData";
import OrderNowBtn from "../../../../shared/OrderNowBtn/OrderNowBtn.jsx";
import {
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function HomeHeaderSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Prevent re-selecting the same slide
  const handleSelectItem = (newIndex) => {
    if (newIndex === currentIndex) return;
    setCurrentIndex(newIndex);
  };

  const { header, title, description, image } =
    HomeHeaderSectionData[currentIndex];

  // Fade + slide animation variants for slide transition
  const fadeSlideVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } },
  };

  return (
    <div className="home-header-bg">
      <div className="home-header-container">
        <section className="home-header-section">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="home-header-section-box"
              variants={fadeSlideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* Left side with text content */}
              <div className="header-left-side">
                <h3 className="header-left-sub-title">{header}</h3>
                <h1 className="header-left-title">{title}</h1>
                <p className="header-left-paragraph">{description}</p>
                <OrderNowBtn />
              </div>

              {/* Right side wrapper: image + pagination buttons */}
              <div className="header-right-wrapper">
                {/* Pagination on top in mobile, right side middle in desktop */}
                <div className="header-pagination-buttons">
                  {HomeHeaderSectionData.map((_, index) => (
                    <button
                      key={index}
                      className={`header-pagination-btn ${
                        currentIndex === index ? "active" : ""
                      }`}
                      onClick={() => handleSelectItem(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <motion.img
                  src={image}
                  alt="fastfood"
                  className="header-img"
                  initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: currentIndex === 0 ? -6 : 0,
                  }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
        {/* Social Icons INSIDE Section */}
        <div className="home-header-social-local">
          <a href="#" aria-label="Facebook" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Pinterest" className="social-icon">
            <FaPinterestP />
          </a>
          <a href="#" aria-label="Twitter" className="social-icon">
            <FaTwitter />
          </a>
          <a href="#" aria-label="YouTube" className="social-icon">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
}
