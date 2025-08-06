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

export default function TopCategories() {
  const CoursesData = [
    {
      title: "Creative Web Design",
      icon: FaPencilAlt,
      count: "8 Courses",
    },
    {
      title: "Finance Accounting",
      icon: FaCalculator,
      count: "10 Courses",
    },
    {
      title: "IT and Software",
      icon: FaLaptopCode,
      count: "5 Courses",
    },
    {
      title: "Digital Marketing",
      icon: FaBullhorn,
      count: "4 Courses",
    },
    {
      title: "Web Development",
      icon: FaCode,
      count: "8 Courses",
    },
    {
      title: "Content Writing",
      icon: FaPenFancy,
      count: "8 Courses",
    },
  ];

  // Variants for card animation
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.15, type: "spring", stiffness: 100 },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 20px rgba(56, 189, 248, 0.4)", // light blue shadow on hover
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <div className="flex flex-col w-full py-10 px-4 md:px-8 lg:px-20 bg-white">
      {/* Header */}
      <div className="flex justify-center items-center flex-col text-center mb-10">
        <h1 className="text-base sm:text-lg font-mono text-blue-500 mb-2">
          Top Categories
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
          Discover leading categories to
          <br className="hidden sm:block" /> elevate your journey
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {CoursesData.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className="w-full sm:w-auto h-52 flex flex-col items-center justify-center rounded-xl p-4 bg-white cursor-pointer"
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="text-4xl mb-3 text-blue-500">
                <Icon />
              </div>
              <h1 className="font-semibold text-center text-sm sm:text-base text-gray-800">
                {item.title}
              </h1>
              <h2 className="mt-1 text-gray-400 text-xs">{item.count}</h2>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
