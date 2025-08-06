import React, { useEffect, useRef } from "react";
import "./BrandIntroSection.css";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function BrandIntroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll(".scroll-fade");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="brand-intro-bg">
      <section className="brand-intro-section container" ref={sectionRef}>
        <div className="brand-intro-images-wrapper scroll-fade">
          <img
            src="/image/661e02d69d8c67c1854e7950_Rectangle 52.png"
            alt="Background shape"
            className="brand-bg-image"
          />
          <div className="brand-intro-images">
            <img
              src="/image/661e02d6b08a6673bc5127ad_Rectangle 50-p-500.png"
              alt="Happy man with pizza"
              className="brand-image"
            />
            <img
              src="/image/661e02d62401c65334b8f23c_Rectangle 51-p-500.png"
              alt="Happy woman with pizza"
              className="brand-image"
            />
          </div>
        </div>

        <div className="brand-intro-content scroll-fade">
          <p className="brand-subtitle">Discover Fastfood TNC</p>
          <h2 className="brand-title">
            Where Flavor Meets <br /> Community Excellence
          </h2>
          <p className="brand-description">
            Plugin bullet scale duplicate horizontal arrange. Ipsum stroke
            scrolling polygon blur. Background overflow italic invite selection
            underline auto strikethrough shadow. List line main layer create
            inspect line. Plugin layer move content object blur rectangle pen.
            Main overflow selection.
          </p>
          <button className="brand-contact-btn">
            Contact us <FaLongArrowAltRight />
          </button>
        </div>
      </section>
    </div>
  );
}
