import React from "react";

import Hero from "./Hero";
import Features from "./Features";
import Programs from "./Programs";
import Trainers from "./Trainers";

export default function GymLandingPage() {
  return (
    <div className="bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900 min-h-screen">
     

    <Hero />
    <Features />
    <Programs />
    <Trainers />

     

    </div>
  );
}
