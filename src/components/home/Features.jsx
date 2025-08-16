import React from 'react'
import { Dumbbell, HeartPulse, Apple, Users, Trophy } from "lucide-react";
import { motion } from "framer-motion";


const Features = () => {
  return (
    <div>
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

    </div>
  )
}

export default Features
