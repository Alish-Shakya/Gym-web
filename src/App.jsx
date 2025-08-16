import React from "react";
import Programs from "./components/Programs";
import Trainers from "./components/Trainers";
import GymLandingPage from "./components/home/GymLandingPage";
import PricingDuration from "./components/Pricing";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>

      <GymLandingPage />
      <Programs />
      <Trainers />
      <PricingDuration />
      <Contact />
    </div>
  );
};

export default App;
