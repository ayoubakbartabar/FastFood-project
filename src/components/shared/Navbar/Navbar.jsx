import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { LuSearch, LuShoppingBasket } from "react-icons/lu";
import { MdArrowRightAlt } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import "./Navbar.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const navbarMenus = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About", href: "/about" },
    { id: 3, title: "Shop", href: "/shop" },
    { id: 4, title: "Blog", href: "/blog" },
    { id: 5, title: "Contact Us", href: "/contact-us" },
  ];

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

  return (
    <div className="navbar-bg">
      <section className="navbar-section">
        <img
          className="navbar-logo"
          src="/image/661caca505c900f7a61a73ce_logo (1).png"
          alt="logo"
        />

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

        <div className="navbar-btn-section">
          <button className="search-btn" aria-label="Search">
            <LuSearch className="search-icon" />
          </button>

          <button className="shop-basket-btn" aria-label="Shopping basket">
            <LuShoppingBasket className="shop-basket-icon" />
          </button>

          <button className="order-now-btn desktop-order-now">
            order now
            <MdArrowRightAlt />
          </button>

          <button
            className="hamburger-btn"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <FaHamburger />
          </button>
        </div>
      </section>

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
          <button className="order-now-btn mobile-order-now">
            order now
            <MdArrowRightAlt />
          </button>
        </section>
      )}
    </div>
  );
}
