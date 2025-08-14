import React from "react";
import GymLandingPage from "./components/GymLandingPage";
import Programs from "./components/Programs";
import Trainers from "./components/Trainers";

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
