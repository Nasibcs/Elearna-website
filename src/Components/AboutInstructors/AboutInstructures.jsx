import React from "react";
import { motion } from "framer-motion";

export default function AboutInstructures() {
  return (
    <div className="relative bg-bannerImg bg-cover bg-center min-h-[14rem] sm:min-h-[16rem] md:min-h-[18rem] lg:min-h-[20rem] xl:min-h-[24rem] flex items-center justify-center">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-white py-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-6"
      >
        {/* Title */}
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono leading-tight text-center md:text-left max-w-full md:max-w-2xl">
          Are you ready to start <br className="hidden sm:block" /> your journey?
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center md:items-end justify-center md:justify-end">
          <button className="w-full sm:w-auto border-2 border-white rounded font-mono px-6 py-2 text-sm sm:text-base hover:bg-white hover:text-black transition-colors duration-300">
            Browse Courses
          </button>
          <button className="w-full sm:w-auto rounded font-mono px-6 py-2 text-sm sm:text-base bg-yellow-500 text-black hover:bg-yellow-600 transition-colors duration-300">
            Become An Instructor
          </button>
        </div>
      </motion.div>
    </div>
  );
}
