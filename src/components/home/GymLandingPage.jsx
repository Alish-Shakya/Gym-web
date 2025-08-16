import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";

export default function GymLandingPage() {
  return (
    <div className="bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900 min-h-screen">
     
     <Navbar />
<Hero />
    <Features />

     
      {/* Footer */}
      {/* <footer className="border-t border-gray-300 py-6 text-center text-gray-500 text-xs md:text-sm">
        © {new Date().getFullYear()} BeastMode Gym. All rights reserved.
      </footer> */}
    </div>
  );
}
