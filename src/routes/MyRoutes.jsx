import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import GymLandingPage from "../components/home/GymLandingPage";
import Navbar from "../components/home/Navbar";

const MyRoute = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<GymLandingPage />} />
        </Routes>
    </Router>
  );
};

export default MyRoute;
