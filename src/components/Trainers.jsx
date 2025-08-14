import React from "react";

const Trainers = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Meet Our Trainers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Trainer 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0642"
              alt="Trainer 1"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-1">Alex Johnson</h3>
            <p className="text-yellow-500 font-medium mb-2">Zumba Expert</p>
            <p className="text-gray-600 mb-4">
              Alex brings the energy with dynamic Zumba sessions that make
              fitness feel like a party.
            </p>
          </div>

          {/* Trainer 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1594737625785-c84c6a5fa2d5"
              alt="Trainer 2"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-1">Samantha Lee</h3>
            <p className="text-yellow-500 font-medium mb-2">Cardio Coach</p>
            <p className="text-gray-600 mb-4">
              Samantha specializes in high-energy cardio workouts designed to
              boost stamina and heart health.
            </p>
          </div>

          {/* Trainer 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1"
              alt="Trainer 3"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-1">Michael Brown</h3>
            <p className="text-yellow-500 font-medium mb-2">Strength Trainer</p>
            <p className="text-gray-600 mb-4">
              Michael offers personalized strength training programs to help you
              achieve peak performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
