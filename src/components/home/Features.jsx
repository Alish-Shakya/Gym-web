import React from "react";
import { Dumbbell, HeartPulse, Apple, Users, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: <Dumbbell size={38} />,
      title: "Modern Equipment",
      text: "Latest machines for maximum results",
    },
    {
      icon: <HeartPulse size={38} />,
      title: "Health Tracking",
      text: "Track your health and performance with ease",
    },
    {
      icon: <Apple size={38} />,
      title: "Nutrition Plans",
      text: "Personalized meal plans tailored for you",
    },
    {
      icon: <Users size={38} />,
      title: "Expert Trainers",
      text: "Certified pros to guide and motivate you",
    },
    {
      icon: <Trophy size={38} />,
      title: "Guaranteed Results",
      text: "Consistency + effort = results",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-14 md:py-20 bg-black relative">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide">
          Why <span className="text-yellow-500">Choose Us?</span>
        </h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-sm md:text-base">
          We focus on your body, mind, and lifestyle — not just the reps.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: i * 0.15 + Math.random() * 0.1, // irregular delay
            }}
            className={`rounded-2xl p-6 flex flex-col items-center text-center 
                       bg-gradient-to-br from-gray-900/90 to-gray-800/70 
                       border border-gray-700/70 
                       hover:border-yellow-500/80 
                       hover:shadow-lg hover:shadow-yellow-500/20 
                       transition duration-300 
                       ${
                         i % 2 === 0 ? "rotate-0.5" : "-rotate-0.5"
                       }`} // tiny imperfect tilt
          >
            <div className="text-yellow-500 mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg text-white mb-2 leading-snug">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm">{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
