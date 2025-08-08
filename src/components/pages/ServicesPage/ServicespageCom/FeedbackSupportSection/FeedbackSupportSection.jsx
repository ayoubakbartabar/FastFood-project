import React, { useEffect, useRef } from "react";
import "./FeedbackSupportSection.css";

export default function FeedbackSupportSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
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
    <div ref={sectionRef} className="feedback-section-container">
      <div className="feedback-images">
        <div className="top-images">
          <img
            src="/image/6620ae10f9fb43094b9427e9_image 1-p-500.png"
            alt="img1"
            className="image image-1"
          />
          <img
            src="/image/6620ae1075f767e21dad441e_image 2-p-500.png"
            alt="img2"
            className="image image-2"
          />
        </div>
        <img
          src="/image/6620ae10531cab63f6d441d6_image 3-p-500.png"
          alt="img3"
          className="image image-3"
        />
      </div>

      <div className="feedback-text">
        <h2>Online Feedback and Support</h2>
        <p>
          Our satisfaction matters. Use our online platform to provide feedback,
          share your experiences, and seek support. We value your insights and
          are here to ensure your Fastfood TNC experience exceeds expectations.
          Explore our services and discover the convenience, quality, and
          community connection that make Fastfood TNC more than just a
          restaurant. Join us in celebrating food, flavors, and the joy of
          exceptional dining!
        </p>
      </div>
    </div>
  );
}
