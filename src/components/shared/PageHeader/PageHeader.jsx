import React from "react";
import "./PageHeader.css";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function PageHeader({title}) {
  return (
    <div className="page-header-bg">
      <section className="page-header-section">
        <h1 className="page-header-title">{title}</h1>
        <span className="page-header-menu">
          <a href="/" className="page-header-link">
            HOME
          </a>
          <FaLongArrowAltRight />
          <p className="page-header-paragraph">{title}</p>
        </span>
      </section>
    </div>
  );
}
