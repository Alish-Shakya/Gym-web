import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-4 border-b border-gray-300 bg-black/70 text-white fixed w-full z-50">
      <h1 className="text-xl md:text-3xl font-extrabold tracking-wide text-yellow-500">
        Planet Fitness
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-base">
        {navItems.map((item) =>
          item.path.startsWith("#") ? (
            <a
              key={item.name}
              href={item.path}
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              {item.name}
            </a>
          ) : (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              {item.name}
            </Link>
          )
        )}
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
          {navItems.map((item) =>
            item.path.startsWith("#") ? (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
