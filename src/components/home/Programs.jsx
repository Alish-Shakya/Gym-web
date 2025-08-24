// import React from "react";
// import { Dumbbell, HeartPulse, Music } from "lucide-react";
// import { motion } from "framer-motion";
// import TrainerImg from "../../assets/images/trainer.jpg";


// const Programs = () => {
//   const programs = [
//     {
//       icon: <Music size={38} />,
//       title: "Zumba",
//       text: "Dance your way to fitness with energetic and fun Zumba classes that burn calories while you enjoy.",
//       img: TrainerImg,
      
//     },
//     {
//       icon: <HeartPulse size={38} />,
//       title: "Cardio",
//       text: "Boost your endurance and heart health with high-energy cardio workouts tailored to all fitness levels.",
//       img: TrainerImg,
//     },
//     {
//       icon: <Dumbbell size={38} />,
//       title: "Gym",
//       text: "Access top-of-the-line gym equipment and professional trainers to help you achieve your fitness goals.",
//       img:TrainerImg,
      
//     },
//   ];

//   return (
//     <section className="px-6 md:px-20 py-14 bg-white relative">
//       {/* Section Heading */}
//       <div className="text-center mb-15">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
//           Our <span className="text-yellow-600">Programs</span>
//         </h2>
//         <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
//         <p className="text-gray-600 mt-4 text-sm md:text-base">
//           Choose from a variety of programs designed to keep you fit and motivated.
//         </p>
//       </div>

//       {/* Program Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
//         {programs.map((program, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.7,
//               delay: i * 0.15 + Math.random() * 0.1,
//             }}
//             className={`rounded-2xl border border-gray-200 
//                        hover:border-yellow-500/80 
//                        hover:shadow-lg hover:shadow-yellow-500/30 
//                        transition duration-300 
//                        hover:scale-105 hover:-translate-y-2 hover:z-10
//                        flex flex-col items-center text-center p-6`}
//           >
//             {/* Square Image */}
//             <div className="w-48 h-48 mb-4 overflow-hidden rounded-lg">
//               <img
//                 src={program.img}
//                 alt={program.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Text + Icon */}
//             <div className="text-yellow-600 mb-4 flex justify-center">
//               {program.icon}
//             </div>
//             <h3 className="font-semibold text-xl text-gray-900 mb-2 leading-snug">
//               {program.title}
//             </h3>
//             <p className="text-gray-600 text-sm mb-4">{program.text}</p>
//             <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition">
//               Join Now
//             </button>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Programs;




import React, { useState, useEffect } from "react";
import { Dumbbell, HeartPulse, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TrainerImg from "../../assets/images/trainer.jpg";

const Programs = () => {
  const programs = [
    {
      icon: <Music size={38} />,
      title: "Zumba",
      text: "Dance your way to fitness with energetic and fun Zumba classes that burn calories while you enjoy.",
      img: TrainerImg,
    },
    {
      icon: <HeartPulse size={38} />,
      title: "Cardio",
      text: "Boost your endurance and heart health with high-energy cardio workouts tailored to all fitness levels.",
      img: TrainerImg,
    },
    {
      icon: <Dumbbell size={38} />,
      title: "Gym",
      text: "Access top-of-the-line gym equipment and professional trainers to help you achieve your fitness goals.",
      img: TrainerImg,
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide (mobile only)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % programs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [programs.length]);

  return (
    <section className="px-6 md:px-20 py-14 bg-white relative">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
          Our <span className="text-yellow-600">Programs</span>
        </h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Choose from a variety of programs designed to keep you fit and motivated.
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 gap-8 md:gap-12">
        {programs.map((program, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: i * 0.15 + Math.random() * 0.1,
            }}
            className="rounded-2xl border border-gray-200 
                       hover:border-yellow-500/80 
                       hover:shadow-lg hover:shadow-yellow-500/30 
                       transition duration-300 
                       hover:scale-105 hover:-translate-y-2 hover:z-10
                       flex flex-col items-center text-center p-6"
          >
            {/* Square Image */}
            <div className="w-48 h-48 mb-4 overflow-hidden rounded-lg">
              <img
                src={program.img}
                alt={program.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text + Icon */}
            <div className="text-yellow-600 mb-4 flex justify-center">
              {program.icon}
            </div>
            <h3 className="font-semibold text-xl text-gray-900 mb-2 leading-snug">
              {program.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{program.text}</p>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition">
              Join Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="block md:hidden relative overflow-hidden h-[480px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 bg-white"
          >
            <div className="w-40 h-40 mb-4 overflow-hidden rounded-lg mx-auto">
              <img
                src={programs[index].img}
                alt={programs[index].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-yellow-600 mb-4 flex justify-center">
              {programs[index].icon}
            </div>
            <h3 className="font-semibold text-xl text-gray-900 mb-2 leading-snug">
              {programs[index].title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{programs[index].text}</p>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition">
              Join Now
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2 z-20">
          {programs.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-yellow-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
