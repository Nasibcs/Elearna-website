import React from 'react';
import { motion } from 'framer-motion';

export default function AboutCard() {
  const data = [
    {
      number: "01",
      title: "Flexibility and convenience",
      des: "Learn anytime, anywhere with flexible and convenient online learning options."
    },
    {
      number: "02",
      title: "Course accessibility",
      des: "Access a wide range of courses and materials from any device at your fingertips."
    },
    {
      number: "03",
      title: "Personalized learning",
      des: "Customize your learning experience to match your pace, goals, and interests."
    },
    {
      number: "04",
      title: "Career advancement",
      des: "Develop professional skills and boost your career with targeted learning paths."
    }
  ];

  return (
    <div className="w-full py-12 md:py-20 bg-gray-50 overflow-hidden ">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center px-5 sm:px-6 lg:px-8 relative lg:bottom-36 bottom-10 mt-10 lg:mt-24 "
      >
        <h1 className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-widest">
          Why we are
        </h1>
        <p className="text-lg sm:text-xl md:text-4xl font-bold mt-2 sm:mt-4 text-gray-800 leading-snug">
          We believe in our good education and development system and we know how to work together to reach greater success.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="relative lg:bottom-28 bottom-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto sm:mt-14 md:mt-20 px-4 sm:px-6 lg:px-8">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group bg-white p-6 w-full sm:w-[18rem] md:w-full rounded-lg transition-all duration-300 h-full flex flex-col justify-between gap-10 hover:h-[350px] hover:shadow-xl"
          >
            <div>
              <h1 className="text-blue-600 text-2xl sm:text-3xl md:text-4xl font-bold">{item.number}</h1>
              <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">{item.title}</h2>
              <p className="text-gray-600 mt-3 text-base sm:text-lg leading-relaxed">{item.des}</p>
            </div>

            {/* Button hidden until hover */}
            <button className="bg-black text-white px-7 sm:px-6 py-3 sm:py-3 rounded transition-all duration-300 text-xs sm:text-sm md:text-base self-start opacity-100 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 ">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
