import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Apple, Users, Trophy } from "lucide-react";
import GymImage from "../assets/images/gym.png";

export default function GymLandingPage() {
  return (
    <div className="bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="flex flex-wrap justify-between items-center px-4 md:px-8 py-4 border-b border-gray-300">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide text-yellow-600">
          BeastMode
        </h1>
        <nav className="mt-2 md:mt-0 space-x-4 md:space-x-6 text-sm md:text-base">
          {["Home", "Programs", "Trainers", "Pricing", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-600 transition-colors duration-300 block md:inline-block"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-4 md:px-20 py-10 md:py-20 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Transform Your <span className="text-yellow-600">Body</span>,{" "}
            <br className="hidden md:block" /> Transform Your{" "}
            <span className="text-yellow-600">Life</span>
          </h2>
          <p className="mt-4 text-gray-700 text-sm md:text-base">
            Join our state-of-the-art fitness center and achieve your goals with
            expert guidance and world-class equipment.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-yellow-600 text-white font-bold rounded-full hover:bg-yellow-700 transition text-sm md:text-base">
              Get Started
            </button>
            <button className="px-6 py-3 border border-yellow-600 rounded-full hover:bg-yellow-600 hover:text-white transition text-sm md:text-base">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <img
            src={GymImage}
            alt="Gym workout"
            className="rounded-2xl shadow-lg w-full h-100"
          />
        </motion.div>
      </section>

      {/* Features */}
      <section className="px-4 md:px-20 py-10 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
        {[
          {
            icon: <Dumbbell size={40} />,
            title: "Modern Equipment",
            text: "Latest machines for maximum results",
          },
          {
            icon: <HeartPulse size={40} />,
            title: "Health Tracking",
            text: "Monitor your progress easily",
          },
          {
            icon: <Apple size={40} />,
            title: "Nutrition Plans",
            text: "Custom diet plans for you",
          },
          {
            icon: <Users size={40} />,
            title: "Expert Trainers",
            text: "Certified professionals to guide you",
          },
          {
            icon: <Trophy size={40} />,
            title: "Guaranteed Results",
            text: "Achieve your goals faster",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border border-gray-300 hover:shadow-lg hover:shadow-yellow-200 transition"
          >
            <div className="text-yellow-600 mb-4">{feature.icon}</div>
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-300 py-6 text-center text-gray-500 text-xs md:text-sm">
        © {new Date().getFullYear()} BeastMode Gym. All rights reserved.
      </footer>
    </div>
  );
}
