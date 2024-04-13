import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar";

import Home from "./Home";
import Payments from "./components/Payments";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>

    </>
  )
}

export default App;
