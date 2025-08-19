import React, { useState, useEffect, useRef, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { LuSearch, LuShoppingBasket } from "react-icons/lu";
import { FaHamburger } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import "./Navbar.css";
import OrderNowBtn from "../OrderNowBtn/OrderNowBtn";
import ShoppingBasketSection from "../ShoppingBasketCom/ShoppingBasketSection";

// Custom hook to detect clicks outside a given ref element
function useClickOutside(ref, handler, whenActive = true) {
  useEffect(() => {
    if (!whenActive) return;

    const listener = (event) => {
      // Do nothing if clicking ref's element or its descendants
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, whenActive]);
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const mobileMenuRef = useRef(null);
  const basketRef = useRef(null);

  const navbarMenus = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About", href: "/about" },
    { id: 3, title: "Shop", href: "/shop" },
    { id: 4, title: "Service", href: "/service" },
    { id: 5, title: "Blog", href: "/blogs" },
    { id: 6, title: "Menu", href: "/menu" },
    { id: 7, title: "Contact Us", href: "/contact-us" },
  ];

  // Close mobile menu when clicking outside using the custom hook
  useClickOutside(
    mobileMenuRef,
    () => setIsMobileMenuOpen(false),
    isMobileMenuOpen
  );

  // Close basket panel when clicking outside
  useClickOutside(basketRef, () => setIsBasketOpen(false), isBasketOpen);

  // Close search input when clicking outside
  useEffect(() => {
    if (!isSearchOpen) return;

    const handleClickOutside = (event) => {
      if (!event.target.closest(".search-container")) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isSearchOpen]);

  // useCallback for handlers to avoid re-creating functions on each render
  const toggleSearch = useCallback(() => {
    setIsSearchOpen((prev) => !prev);
  }, []);

  const openBasket = useCallback(() => {
    setIsBasketOpen(true);
  }, []);

  const closeBasket = useCallback(() => {
    setIsBasketOpen(false);
  }, []);

  const openMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(true);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

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

        {/* Buttons section (Search, Basket, Order, Mobile Menu) */}
        <div className="navbar-btn-section">
          {/* Search container */}
          <div className={`search-container ${isSearchOpen ? "open" : ""}`}>
            <button
              className="search-btn"
              aria-label="Search"
              onClick={toggleSearch}
            >
              <LuSearch className="nav-search-icon" />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="search-input-box"
              autoFocus
            />
          </div>

          {/* Shopping basket button */}
          <button
            className="shop-basket-btn"
            aria-label="Shopping basket"
            onClick={openBasket}
          >
            <LuShoppingBasket className="shop-basket-icon" />
          </button>

          {/* Order now button (desktop only) */}
          <OrderNowBtn variant="desktop" className="order-now-desktop" />

          {/* Mobile menu open button */}
          <button
            className="hamburger-btn"
            onClick={openMobileMenu}
            aria-label="Open menu"
          >
            <FaHamburger />
          </button>
        </div>
      </section>

      {/* Mobile menu panel */}
      {isMobileMenuOpen && (
        <section className="mobile-menu-section" ref={mobileMenuRef}>
          <div className="mobile-btn-section">
            <button
              className="mobile-close-btn"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <IoCloseCircle />
            </button>
          </div>

          {/* Mobile menu list */}
          <ul className="menu-list mobile-menu">
            {navbarMenus.map((item) => (
              <li key={item.id} className="menu-item">
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive ? "menu-item active" : "menu-item"
                  }
                  onClick={closeMobileMenu}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Order now button (mobile) */}
          <OrderNowBtn variant="mobile" />
        </section>
      )}

      {/* Basket slide-in panel */}
      <div
        className={`basket-panel ${isBasketOpen ? "open" : ""}`}
        ref={basketRef}
      >
        <button
          className="basket-close-btn"
          onClick={closeBasket}
          aria-label="Close basket"
        >
          <IoCloseCircle size={28} />
        </button>
        <ShoppingBasketSection />
      </div>

      {/* Dark overlay behind basket */}
      {isBasketOpen && (
        <div className="basket-overlay" onClick={closeBasket}></div>
      )}
    </div>
  );
}
