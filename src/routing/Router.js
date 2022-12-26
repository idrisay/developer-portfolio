import Home from "../pages/Home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import Admin from "../pages/Admin";


const Router = () => {
  return (
    <BrowserRouter>
    <div style={{ minHeight: "10vh" }}>

      <Navbar />
    </div>
      <div style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
