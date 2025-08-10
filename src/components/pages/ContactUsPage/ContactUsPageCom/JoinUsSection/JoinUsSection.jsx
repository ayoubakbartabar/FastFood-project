import React, { useEffect, useRef } from "react";
import "./JoinUsSection.css";
import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaHome className="join-us-icon" />,
    title: "Visit our Restaurant",
    lines: ["93X Hilgard Ave, Los Angeles, CA", "900XX, United States."],
  },
  {
    icon: <FaPhoneAlt className="join-us-icon" />,
    title: "Contact number",
    lines: ["+123 456 7XX 000", "+2XX 000 111 00"],
  },
  {
    icon: <FaEnvelope className="join-us-icon" />,
    title: "Mail Us",
    lines: ["example@gmail.com", "tnc@contact-us.com"],
  },
];

export default function JoinUsSection() {
  const topRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    const topObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-top");
        }
      });
    }, observerOptions);

    if (topRef.current) topObserver.observe(topRef.current);

    const cardsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-card");
          }, index * 200);
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) cardsObserver.observe(card);
    });

    return () => {
      topObserver.disconnect();
      cardsObserver.disconnect();
    };
  }, []);

  return (
    <div className="join-us-bg">
      <section className="join-us-section">
        <div className="join-us-top hidden-top" ref={topRef}>
          <h1 className="join-us-title">
            Let's Connect and Create <br />
            <span className="highlight-text">
              Memorable Experiences Together
            </span>
          </h1>
          <p className="join-us-paragraph">
            Reach Out for Reservations, Inquiries, or Just to Say Hello – We're
            Here to Serve You.
          </p>
        </div>

        <div className="join-us-cards">
          {contactInfo.map((item, index) => (
            <div
              className="join-us-card hidden-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              {item.icon}
              <h3>{item.title}</h3>
              {item.lines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
