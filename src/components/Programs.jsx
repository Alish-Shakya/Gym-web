// import React from "react";

// const Programs = () => {
//   return (
//     <section className="py-16 px-4 bg-gray-50 text-gray-800">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Zumba */}
//           <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
//             <img
//               src="https://images.unsplash.com/photo-1605296867424-35fc25c9212e"
//               alt="Zumba"
//               className="w-full h-48 object-cover rounded-lg mb-4"
//             />
//             <h3 className="text-2xl font-semibold mb-2">Zumba</h3>
//             <p className="text-gray-600 mb-4">
//               Dance your way to fitness with energetic and fun Zumba classes
//               that burn calories while you enjoy.
//             </p>
//             <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition">
//               Join Now
//             </button>
//           </div>

//           {/* Cardio */}
//           <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
//             <img
//               src="https://images.unsplash.com/photo-1605296867818-2f9b6d7ab5a1"
//               alt="Cardio"
//               className="w-full h-48 object-cover rounded-lg mb-4"
//             />
//             <h3 className="text-2xl font-semibold mb-2">Cardio</h3>
//             <p className="text-gray-600 mb-4">
//               Boost your endurance and heart health with high-energy cardio
//               workouts tailored to all fitness levels.
//             </p>
//             <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition">
//               Join Now
//             </button>
//           </div>

//           {/* Gym */}
//           <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
//             <img
//               src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
//               alt="Gym"
//               className="w-full h-48 object-cover rounded-lg mb-4"
//             />
//             <h3 className="text-2xl font-semibold mb-2">Gym</h3>
//             <p className="text-gray-600 mb-4">
//               Access top-of-the-line gym equipment and professional trainers to
//               help you achieve your fitness goals.
//             </p>
//             <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition">
//               Join Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Programs;



import React from "react";
import { motion } from "framer-motion";
import { Music, HeartPulse, Dumbbell } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: <Music size={38} />,
      title: "Zumba",
      text: "Dance your way to fitness with energetic and fun Zumba classes that burn calories while you enjoy.",
      img: "https://images.unsplash.com/photo-1605296867424-35fc25c9212e",
    },
    {
      icon: <HeartPulse size={38} />,
      title: "Cardio",
      text: "Boost your endurance and heart health with high-energy cardio workouts tailored to all fitness levels.",
      img: "https://images.unsplash.com/photo-1605296867818-2f9b6d7ab5a1",
    },
    {
      icon: <Dumbbell size={38} />,
      title: "Gym",
      text: "Access top-of-the-line gym equipment and professional trainers to help you achieve your fitness goals.",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-14 md:py-27 bg-black relative">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide">
          Our <span className="text-yellow-500">Programs</span>
        </h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-sm md:text-base">
          Choose from a variety of programs designed to keep you fit and motivated.
        </p>
      </div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {programs.map((program, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: i * 0.15 + Math.random() * 0.1,
            }}
            className="rounded-2xl overflow-hidden border border-gray-700/70 
                       hover:border-yellow-500/80 
                       hover:shadow-lg hover:shadow-yellow-500/20 
                       transition duration-300 hover:scale-105 hover:-translate-y-2"
          >
            <img
              src={program.img}
              alt={program.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <div className="text-yellow-500 mb-4 flex justify-center">
                {/* {program.icon} */}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {program.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{program.text}</p>
              <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition">
                Join Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Programs;

