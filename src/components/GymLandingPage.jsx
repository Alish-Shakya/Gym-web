import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Apple, Users, Trophy } from "lucide-react";

export default function GymLandingPage() {
  return (
    <div className="bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-300">
        <h1 className="text-3xl font-extrabold tracking-wide text-yellow-600">
          BeastMode
        </h1>
        <nav className="space-x-6">
          {["Home", "Programs", "Trainers", "Pricing", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-600 transition-colors duration-300"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-8 md:px-20 py-20 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h2 className="text-5xl font-extrabold leading-tight">
            Transform Your <span className="text-yellow-600">Body</span>, <br />{" "}
            Transform Your <span className="text-yellow-600">Life</span>
          </h2>
          <p className="mt-4 text-gray-700">
            Join our state-of-the-art fitness center and achieve your goals with
            expert guidance and world-class equipment.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-yellow-600 text-white font-bold rounded-full hover:bg-yellow-700 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-yellow-600 rounded-full hover:bg-yellow-600 hover:text-white transition">
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
            src="https://images.unsplash.com/photo-1594737625785-cd0a1f4d5a56"
            alt="Gym workout"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Features */}
      <section className="px-8 md:px-20 py-16 grid md:grid-cols-5 gap-8">
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
      <footer className="border-t border-gray-300 py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} BeastMode Gym. All rights reserved.
      </footer>
    </div>
  );
}
