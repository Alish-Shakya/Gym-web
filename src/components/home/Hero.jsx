import React from 'react'
import { motion } from "framer-motion";
import GymImage from "../../assets/images/photo.jpg";


const Hero = () => {
  return (
    <div>
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
    </div>
  )
}

export default Hero
