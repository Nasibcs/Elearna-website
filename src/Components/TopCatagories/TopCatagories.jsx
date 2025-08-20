import React from "react";
import { motion } from "framer-motion";
import {
  FaPencilAlt,
  FaCalculator,
  FaLaptopCode,
  FaBullhorn,
  FaCode,
  FaPenFancy,
} from "react-icons/fa";

const COURSES = [
  { title: "Creative Web Design", icon: FaPencilAlt, count: "8 Courses" },
  { title: "Finance Accounting", icon: FaCalculator, count: "10 Courses" },
  { title: "IT and Software", icon: FaLaptopCode, count: "5 Courses" },
  { title: "Digital Marketing", icon: FaBullhorn, count: "4 Courses" },
  { title: "Web Development", icon: FaCode, count: "8 Courses" },
  { title: "Content Writing", icon: FaPenFancy, count: "8 Courses" },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.5, 
      delay: i * 0.1, 
      ease: [0.25, 0.1, 0.25, 1]  // More natural ease curve
    },
  }),
  hover: {
    y: -3,
    scale: 1.015,
    boxShadow: `
      0 2px 8px rgba(0, 149, 255, 0.2),
      0 4px 16px rgba(0, 149, 255, 0.15),
      0 8px 24px rgba(0, 149, 255, 0.1)
    `,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    },
  },
};


export default function TopCategories() {
  return (
    <section className="flex flex-col w-full py-10 px-4 md:px-8 lg:px-20 bg-white  2xl:w-[50%] 2xl:m-auto">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-base sm:text-lg font-mono mb-2">
          Top Categories
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
          Discover leading categories to
          <br className="hidden sm:block" /> elevate your journey
        </h2>
      </header>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {COURSES.map(({ title, icon: Icon, count }, index) => (
          <motion.div
            key={title}
            className="border border-gray-300 h-52 flex flex-col items-center justify-center rounded p-4 bg-white cursor-pointer"
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            <div className="bg-[#eef9fb] text-4xl mb-3 text-gray-400 rounded-full w-16 h-16 flex justify-center items-center">
              <Icon />
            </div>
            <h3 className="font-semibold text-center text-sm sm:text-base text-gray-800">
              {title}
            </h3>
            <p className="mt-1 text-gray-400 text-xs">{count}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
