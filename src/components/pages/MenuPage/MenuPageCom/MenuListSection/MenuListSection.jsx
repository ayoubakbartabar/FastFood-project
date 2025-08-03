import React from "react";
import "./MenuListSection.css";
import BestSellingData from "../../../HomePage/HomePageCom/BestSellingSection/BestSellingData";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function MenuListSection() {
  return (
    <div className="menu-list-bg">
      <section className="menu-list-section">
        <div className="menu-list-grid">
          {BestSellingData.map((item) => (
            <div className="menu-card" key={item.id}>
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
