/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Navbar } from "./components/header/Navbar";
import { Footer } from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Home />}></Route>
        <Route path="/contact" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/logout" element={<Login />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
