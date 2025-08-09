import React, { useEffect, useRef } from "react";
import "./MenuListSection.css";
import BestSellingData from "../../../HomePage/HomePageCom/BestSellingSection/BestSellingData";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function MenuListSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="menu-list-bg">
      <section className="menu-list-section">
        <div className="menu-list-grid">
          {BestSellingData.map((item, index) => (
            <div
              className="menu-card hidden"
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="menu-card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="menu-card-content">
                <div className="menu-stars">
                  {Array.from({ length: 5 }, (_, i) => {
                    const rating = item.star;
                    if (i < Math.floor(rating)) {
                      return <FaStar key={i} color="orange" />;
                    } else if (i < rating) {
                      return <FaStarHalfAlt key={i} color="orange" />;
                    } else {
                      return <FaRegStar key={i} color="#ccc" />;
                    }
                  })}
                  <span>({item.count})</span>
                </div>

                <h3>{item.title}</h3>
                <p>
                  Pizza ipsum dolor meat lovers buffalo. Sausage large wing bell
                  NY olives pan. Spinach pan string pan
                </p>
                <div className="menu-card-footer">
                  <span className="price">$ {item.price.toFixed(2)} USD</span>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
