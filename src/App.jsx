import React from "react";
import MyRoute from "./routes/MyRoutes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div>
      <MyRoute />

      {/* Footer */}
      {/* <footer className="border-t border-gray-300 py-6 text-center text-gray-500 text-xs md:text-sm">
        © {new Date().getFullYear()} Planet Fitness Gym. All rights reserved.
      </footer> */}
    </div>
  );
};

export default App;
