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
    <div className="px-4 py-12 max-w-7xl mx-auto overflow-x-hidden">
      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentCards.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition duration-300 max-w-full group"
          >
            {/* Image Zoom Effect */}
            <div className="overflow-hidden">
              <motion.img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover block transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="text-sm font-semibold text-gray-500 uppercase mb-1 break-words">
                {course.category}
              </p>
              <h2 className="text-lg font-bold text-gray-800 break-words">
                {course.title}
              </h2>
              <p className="text-gray-400 text-sm mt-2">{course.date}</p>
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
