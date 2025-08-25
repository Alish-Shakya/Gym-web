import React from "react";

const PricingDuration = () => {
  const plans = [
    {
      duration: '1 Month',
      prices: [
        { name: 'Admission', price: 5 },
        { name: 'Gym', price: 1500 },
        { name: 'Cardio', price: 500 },
        { name: 'Cardio + Gym', price: 2000 },
        { name: 'Zumba', price: 1000 },
      ],
    },
    {
      duration: '3 Months',
      prices: [
        { name: 'Admission', price: 5 },
        { name: 'Gym', price: 4000 },
        { name: 'Cardio', price: 1500 },
        { name: 'Cardio + Gym', price: 5000 },
        { name: 'Zumba', price: 3000 },
      ],
    },
    {
      duration: '6 Months',
      prices: [
        { name: 'Admission', price: 5 },
        { name: 'Gym', price: 7500 },
        { name: 'Cardio', price: 2500 },
        { name: 'Cardio + Gym', price: 10000 },
        { name: 'Zumba', price: 5000 },
      ],
    },
    {
      duration: '1 Year',
      prices: [
        { name: 'Admission', price: 5 },
        { name: 'Gym', price: 14000 },
        { name: 'Cardio', price: 5000 },
        { name: 'Cardio + Gym', price: 20000 },
        { name: 'Zumba', price: 10000 },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-30 px-4 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Membership Plans by Duration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold mb-4">{plan.duration}</h3>
              <ul className="text-gray-600 mb-6 space-y-2 w-full">
                {plan.prices.map((item, idx) => (
                  <li key={idx} className="flex justify-between border-b py-2">
                    <span>{item.name}</span>
                    <span>Rs. {item.price}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingDuration;
