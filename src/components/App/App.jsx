import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage/HomePage.jsx";
import AboutPage from "../pages/AboutPage/AboutPage.jsx";
import ShopPage from "../pages/ShopPage/ShopPage.jsx";
import ServicesPage from "../pages/ServicesPage/ServicesPage.jsx";
import BlogPage from "../pages/BlogPage/BlogPage.jsx";
import MenuPage from "../pages/MenuPage/MenuPage.jsx";
import ContactUsPage from "../pages/ContactUsPage/ContactUsPage.jsx";
import ProductPage from "../pages/ProductPage/ProductPage.jsx";
import { CartProvider } from "../shared/CartContext/CartContext.jsx";
import BlogSection from "../pages/BlogPage/BlogPageCom/BlogSection/BlogSection.jsx";
import BlogCategoriesSection from "../pages/BlogPage/BlogPageCom/BlogCategoriesSection/BlogCategoriesSection.jsx";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />

        <Route path="/blog/:id" element={<BlogSection />} />

        <Route
          path="/blog/category/:category"
          element={<BlogCategoriesSection />}
        />
      </Routes>
    </CartProvider>
  );
}

export default App;
