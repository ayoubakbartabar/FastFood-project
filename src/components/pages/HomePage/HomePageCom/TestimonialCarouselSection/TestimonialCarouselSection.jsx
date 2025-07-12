import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./TestimonialCarouselSection.css";
import TestimonialCarouselData from "./TestimonialCarouselData.js";

export default function TestimonialCarouselSection() {
  // Index of the first visible card
  const [startIndex, setStartIndex] = useState(0);

  // How many cards should be visible at the current viewport?
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const intervalRef = useRef(null);

  const TOTAL = TestimonialCarouselData.length;

  // helpers
  function getCardsPerView() {
    const width = window.innerWidth;
    if (width < 768) return 1; // mobile
    if (width < 1024) return 2; // tablet
    return 3; // desktop
  }

  const buildVisible = () =>
    Array.from({ length: cardsPerView }, (_, i) => {
      const idx = (startIndex + i) % TOTAL;
      return TestimonialCarouselData[idx];
    });

  const goNext = () => setStartIndex((p) => (p + cardsPerView) % TOTAL);

  const goPrev = () => setStartIndex((p) => (p - cardsPerView + TOTAL) % TOTAL);

  //effects
  // Auto‑scroll
  useEffect(() => {
    intervalRef.current = setInterval(goNext, 3000);
    return () => clearInterval(intervalRef.current);
  }, [cardsPerView]); // restart timer if cardsPerView changes

  // Update cardsPerView on resize
  useEffect(() => {
    const onResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="testimonial-carousel-bg">
      <section className="testimonial-carousel-section">
        <div className="testimonial-top">
          <h1 className="testimonial-title">Testimonials</h1>
          <p className="testimonial-paragraph">
            Elevating Your Dining Experience
          </p>
        </div>

        {/* Prev ▸ Carousel ▸ Next */}
        <div className="testimonial-carousel-wrapper">
          <button
            className="carousel-btn prev"
            aria-label="Previous"
            onClick={goPrev}
          >
            <FaArrowRight />
          </button>

          <div
            className="testimonial-carousel"
            style={{ "--cards": cardsPerView }}
          >
            {buildVisible().map((item) => (
              <div className="testimonial-box" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="testimonial-img"
                />
                <h3 className="testimonial-name">{item.name}</h3>
                <p className="testimonial-job">{item.job}</p>
                <p className="testimonial-text">{item.paragraph}</p>
              </div>
            ))}
          </div>

          <button
            className="carousel-btn next"
            aria-label="Next"
            onClick={goNext}
          >
            <FaArrowLeft />
          </button>
        </div>
      </section>
    </div>
  );
}
