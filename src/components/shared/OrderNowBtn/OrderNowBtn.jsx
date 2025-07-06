import React from "react";
import "./OrderNowBtn.css";
import { MdArrowRightAlt } from "react-icons/md";

export default function OrderNowBtn({ variant = "desktop" }) {
  const className = `order-now-btn ${
    variant === "mobile" ? "mobile-order-now" : "desktop-order-now"
  }`;

  return (
    <button className={className}>
      order now
      <MdArrowRightAlt />
    </button>
  );
}
