import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { LuSearch, LuShoppingBasket } from "react-icons/lu";
import { FaHamburger } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import "./Navbar.css";
import OrderNowBtn from "../OrderNowBtn/OrderNowBtn";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const navbarMenus = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About", href: "/about" },
    { id: 3, title: "Shop", href: "/shop" },
    { id: 4, title: "Service", href: "/service" },
    { id: 5, title: "Blog", href: "/blog" },
    { id: 6, title: "Contact Us", href: "/contact-us" },
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMobileMenuOpen]);

  // Close search input when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSearchOpen && !event.target.closest(".search-container")) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen]);

  return (
    <div className="navbar-bg">
      <section className="navbar-section">
        {/* Logo */}
        <img
          className="navbar-logo"
          src="/image/661caca505c900f7a61a73ce_logo (1).png"
          alt="logo"
        />

        {/* Desktop navigation menu */}
        <ul className="menu-list desktop-menu">
          {navbarMenus.map((item) => (
            <li key={item.id} className="menu-item">
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive ? "menu-item active" : "menu-item"
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Buttons section */}
        <div className="navbar-btn-section">
          {/* Search icon with expanding input */}
          <div className={`search-container ${isSearchOpen ? "open" : ""}`}>
            <button
              className="search-btn"
              aria-label="Search"
              onClick={() => setIsSearchOpen((prev) => !prev)}
            >
              <LuSearch className="search-icon" />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="search-input-box"
              autoFocus
            />
          </div>

          {/* Shopping basket */}
          <button className="shop-basket-btn" aria-label="Shopping basket">
            <LuShoppingBasket className="shop-basket-icon" />
          </button>

          {/* Order now button */}
          <OrderNowBtn variant="desktop" />

          {/* Mobile menu button */}
          <button
            className="hamburger-btn"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <FaHamburger />
          </button>
        </div>
      </section>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <section className="mobile-menu-section" ref={mobileMenuRef}>
          <div className="mobile-btn-section">
            <button
              className="mobile-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <IoCloseCircle />
            </button>
            <button
              className="mobile-shop-basket-btn"
              aria-label="Shopping basket"
            >
              <LuShoppingBasket className="mobile-shop-basket-icon" />
            </button>
          </div>

          <ul className="menu-list mobile-menu">
            {navbarMenus.map((item) => (
              <li key={item.id} className="menu-item">
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive ? "menu-item active" : "menu-item"
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <OrderNowBtn variant="mobile" />
        </section>
      )}
    </div>
  );
}
