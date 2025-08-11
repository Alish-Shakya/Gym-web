import React from "react";

const Programs = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Zumba */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1605296867424-35fc25c9212e"
              alt="Zumba"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Zumba</h3>
            <p className="text-gray-600 mb-4">
              Dance your way to fitness with energetic and fun Zumba classes
              that burn calories while you enjoy.
            </p>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition">
              Join Now
            </button>
          </div>

          {/* Cardio */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1605296867818-2f9b6d7ab5a1"
              alt="Cardio"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Cardio</h3>
            <p className="text-gray-600 mb-4">
              Boost your endurance and heart health with high-energy cardio
              workouts tailored to all fitness levels.
            </p>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition">
              Join Now
            </button>
          </div>

          {/* Gym */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
              alt="Gym"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Gym</h3>
            <p className="text-gray-600 mb-4">
              Access top-of-the-line gym equipment and professional trainers to
              help you achieve your fitness goals.
            </p>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
