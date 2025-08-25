import React from "react";
import "./OrderNowBtn.css";
import { MdArrowRightAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function OrderNowBtn({ variant = "desktop" }) {
  const navigate = useNavigate();

  const className = `order-now-btn ${
    variant === "mobile" ? "mobile-order-now" : "desktop-order-now"
  }`;

  return (
    <button className={className} onClick={() => navigate("/menu")}>
      order now
      <MdArrowRightAlt />
    </button>
  );
}
