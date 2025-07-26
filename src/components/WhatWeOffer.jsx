import React from 'react';
import { FaChalkboardTeacher, FaLaptop, FaUserClock, FaUserTie } from 'react-icons/fa';

const WhatWeOffer = () => {
  const offerings = [
    {
      icon: <FaChalkboardTeacher size={28} className="text-black" />,
      title: 'Classroom',
      description: 'SAT Coaching',
    },
    {
      icon: <FaLaptop size={28} className="text-black" />,
      title: 'Live Online',
      description: 'SAT Prep',
    },
    {
      icon: <FaUserClock size={28} className="text-black" />,
      title: 'Self-Paced',
      description: 'SAT Course',
    },
    {
      icon: <FaUserTie size={28} className="text-black" />,
      title: 'Private',
      description: 'SAT Tutor',
    },
  ];

  return (
    <section className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap md:flex-nowrap space-y-6 md:space-y-0">
        <div className="md:w-1/5 text-left">
          <h2 className="text-2xl font-semibold text-gray-800">What we offer</h2>
        </div>
        <div className="md:w-4/5 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {offerings.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-2">
              {item.icon}
              <h3 className="text-green-600 font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
