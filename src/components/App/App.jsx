import { React } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage/HomePage.jsx";
import AboutPage from "../pages/AboutPage/AboutPage.jsx";
import ShopPage from "../pages/ShopPage/ShopPage.jsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
}

export default App;
