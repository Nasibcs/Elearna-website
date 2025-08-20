import { useState } from "react";
import { motion } from "framer-motion";
import { coursesData } from "./coursesdata";

export default function CoursesCards() {
  const cardsPerPage = 6; // څو کارتونه هر Page کې وي
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(coursesData.length / cardsPerPage);

  const startIndex = currentPage * cardsPerPage;
  const currentCards = coursesData.slice(startIndex, startIndex + cardsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="px-4 py-12 max-w-7xl mx-auto overflow-x-hidden w-full">
      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
     {currentCards.map((course, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="bg-white border-gray-300 rounded h-[28rem] flex flex-col justify-between overflow-hidden duration-300 max-w-sm border border-gray-200 group"
  >
    {/* Image */}
    <div className="overflow-hidden h-[90%]">
      <motion.img
        src={course.image}
        alt={course.title}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="p-5">
      {/* Category */}
      <p className="text-xs font-semibold text-gray-500 uppercase mb-2 tracking-wide">
        {course.category}
      </p>

      {/* Title */}
      <h2 className="text-xl mt-4 font-semibold text-gray-900 leading-snug hover:underline cursor-pointer">
        {course.title}
      </h2>

      {/* Date */}
      <p className="text-gray-500 text-sm mt-3">{course.date}</p>
    </div>
  </motion.div>
))}

      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-8 text-sm text-gray-500">
        {currentPage > 0 && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={handlePrev}
            className="underline cursor-pointer"
          >
           ← Previous
          </motion.button>
        )}

        <span>
          {currentPage + 1} / {totalPages}
        </span>

        {currentPage < totalPages - 1 && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={handleNext}
            className="underline cursor-pointer"
          >
            Next ➜
          </motion.button>
        )}
      </div>
    </div>
  );
}
