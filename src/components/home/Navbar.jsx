import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react or use your own icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-4 border-b border-gray-300 bg-black/70 text-white fixed w-full z-50">
      {/* Logo */}
      <h1 className="text-xl md:text-3xl font-extrabold tracking-wide text-yellow-500">
        The Planet Fitness Gym
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-base">
        {["Home", "Programs", "Trainers", "Pricing", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-yellow-500 transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-yellow-500"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-black/90 text-white flex flex-col items-center space-y-4 py-6 md:hidden">
          {["Home", "Programs", "Trainers", "Pricing", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)} // close after click
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
