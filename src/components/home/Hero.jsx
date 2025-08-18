// import React from 'react'
// import { motion } from "framer-motion";
// import GymImage from "../../assets/images/photo.jpg";


// const Hero = () => {
//   return (
//     <div>
//         <section className="flex flex-col md:flex-row items-center px-4 md:px-20 py-10 md:py-20 gap-10">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="flex-1 text-center md:text-left"
//         >
//           <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
//             Transform Your <span className="text-yellow-600">Body</span>,{" "}
//             <br className="hidden md:block" /> Transform Your{" "}
//             <span className="text-yellow-600">Life</span>
//           </h2>
//           <p className="mt-4 text-gray-700 text-sm md:text-base">
//             Join our state-of-the-art fitness center and achieve your goals with
//             expert guidance and world-class equipment.
//           </p>
//           <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <button className="px-6 py-3 bg-yellow-600 text-white font-bold rounded-full hover:bg-yellow-700 transition text-sm md:text-base">
//               Get Started
//             </button>
//             <button className="px-6 py-3 border border-yellow-600 rounded-full hover:bg-yellow-600 hover:text-white transition text-sm md:text-base">
//               Learn More
//             </button>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="flex-1"
//         >
//           <img


//     src={GymImage}
//             alt="Gym workout"
//             className="rounded-2xl shadow-lg w-full h-100"
//           />
//         </motion.div>
//       </section>
//     </div>
//   )
// }

// export default Hero


import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Gymbg from "../../assets/images/photo.jpg"
// import Background from "../../assets/images/hello.jpg"

const Hero = () => {
  return (
    <section
      className="relative h-screen text-white"
      style={{
        backgroundImage: `url(${Gymbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar fixed on top */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70">
      
      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center mt-10 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          Transform Your{" "}
          <span className="text-yellow-500">Body</span>, <br className="hidden sm:block" />
          Transform Your <span className="text-yellow-500">Life</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm sm:text-base md:text-xl mb-8 max-w-2xl text-gray-200"
        >
          Join our state-of-the-art fitness center and achieve your goals with expert guidance and world-class equipment.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <button className="bg-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition text-sm sm:text-base">
            Get Started
          </button>
          <button className="border border-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-white transition text-sm sm:text-base">
            Learn More
          </button>
        </motion.div>
      </div>
      
      </div>

      
    </section>
  );
};

export default Hero;
