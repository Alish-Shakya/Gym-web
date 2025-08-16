import React from "react";
import TrainerImg from "../assets/images/trainer.jpg";

const trainersData = [
  {
    name: "Alex Johnson",
    title: "Zumba Expert",
    description:
      "Alex brings the energy with dynamic Zumba sessions that make fitness feel like a party.",
    image: TrainerImg,
  },
  {
    name: "Samantha Lee",
    title: "Cardio Coach",
    description:
      "Samantha specializes in high-energy cardio workouts designed to boost stamina and heart health.",
    image: "https://images.unsplash.com/photo-1594737625785-c84c6a5fa2d5",
  },
  {
    name: "Michael Brown",
    title: "Strength Trainer",
    description:
      "Michael offers personalized strength training programs to help you achieve peak performance.",
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
  },
];

const Trainers = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Meet Our Trainers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {trainersData.map((trainer, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition transform hover:scale-105"
            >
              <div className="w-48 h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={trainer.image}
                  alt={`${trainer.name} - ${trainer.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-1">{trainer.name}</h3>
              <p className="text-yellow-500 font-medium mb-2">{trainer.title}</p>
              <p className="text-gray-600">{trainer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
