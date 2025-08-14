import React from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import "./ProductListSection.css";

export default function ProductListSection({ product }) {
  // images array
  const imagesArr = [
    { id: 1, src: "/image/661cbeea84a87bb38b64302e_image 2.png" },
    { id: 2, src: "/image/661cbeeaefc1a1ed7fef7c08_default image-p-800.png" },
    { id: 3, src: "/image/661cbee88858c3a3e86734a1_image 1.png" },
    { id: 4, src: "/image/661cbefcf5f19d80c4e02f48_image 3.png" },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="star full" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star half" />);
    }
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="star empty" />);
    }

    return stars;
  };

  return (
    <div className="product-list-bg">
      <section className="product-list-section">
        {product ? (
          <div className="product-detail-container">
            {/* Left: Product Image & Thumbnails */}
            <div className="left-column">
              <div className="product-main-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="another-product-images-container">
                {imagesArr.map((item) => (
                  <img
                    key={item.id}
                    src={item.src}
                    alt={`thumb-${item.id}`}
                    className="another-product-image"
                  />
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="product-info">
              <h2 className="price">${product.price.toFixed(2)} USD</h2>
              <div className="rating">
                {renderStars(product.star)}
                <span className="review-count">({product.count})</span>
              </div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-paragraph">{product.paragraph}</p>

              {/* Quantity and Add to Cart */}
              <div className="cart-actions">
                <input type="number" defaultValue={1} min={1} />
                <button className="add-to-cart">Add to Cart</button>
              </div>

              <div className="product-meta">
                <p>
                  <strong>Categories:</strong> {product.category}
                </p>
                <p>
                  <strong>SKU:</strong> {product.sku}
                </p>
                <p className="share-icons">
                  <strong>Share:</strong>{" "}
                  <a href="#" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" aria-label="Pinterest">
                    <FaPinterestP />
                  </a>
                  <a href="#" aria-label="YouTube">
                    <FaYoutube />
                  </a>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>No product data available.</p>
        )}
      </section>
    </div>
  );
}
