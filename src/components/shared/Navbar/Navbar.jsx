import React from "react";
import { NavLink } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { LuShoppingBasket } from "react-icons/lu";
import { MdArrowRightAlt } from "react-icons/md";
import "./Navbar.css";

export default function Navbar() {
  const navbarMenus = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About", href: "/about" },
    { id: 3, title: "Shop", href: "/shop" },
    { id: 4, title: "Blog", href: "/blog" },
    { id: 5, title: "Contact Us", href: "/contact-us" },
  ];

  return (
    <div className="navbar-bg">
      <section className="navbar-section">
        <img src="/image/661caca505c900f7a61a73ce_logo (1).png" alt="logo" />

        <ul className="menu-list">
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
            <LuSearch />
          </button>

          <button className="shop-basket-btn" aria-label="Shopping basket">
            <LuShoppingBasket />
          </button>

          <button className="order-now-btn">
            order now
            <MdArrowRightAlt />
          </button>
        </div>
      </section>
    </div>
  );
}
