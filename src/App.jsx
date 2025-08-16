import React from "react";
import Programs from "./components/Programs";
import Trainers from "./components/Trainers";
import GymLandingPage from "./components/home/GymLandingPage";

const App = () => {
  return (
    <div>

      <GymLandingPage />
      <Programs />
      <Trainers />
    </div>
  );
};

export default App;
