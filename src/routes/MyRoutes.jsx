import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GymLandingPage from "../components/home/GymLandingPage";
import Navbar from "../components/Navbar";
import PricingDuration from "../components/price/Pricing";
import Contact from "../components/contact/Contact";

const MyRoute = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<GymLandingPage />} />
        <Route path="/pricing" element={<PricingDuration />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default MyRoute;
