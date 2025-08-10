import React, { useEffect, useRef, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import SocialData from "./SocialData";
import "./SocialSection.css";

export default function SocialSection() {
  
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="social-bg">
      <section
        ref={sectionRef}
        className={`social-section${animate ? " animate" : ""}`}
      >
        {SocialData.map(({ id, image, alt }) => (
          <figure key={id} className="social-image">
            <img src={image} alt={alt} loading="lazy" />
          </figure>
        ))}

        <a
          href="#"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </section>
    </div>
  );
}
