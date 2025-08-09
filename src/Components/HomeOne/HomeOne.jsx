import React from "react";
import homeone from "./image/homeoneImage.webp";
import { MdOutlineMessage } from "react-icons/md";
import { motion } from "framer-motion";

export default function HomeOne() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full min-h-screen bg-[#243631] text-white px-5 sm:px-8 md:px-12 lg:px-20 py-10 gap-10">
      
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full lg:w-1/2 flex justify-center items-center"
      >
        <img
          src={homeone}
          alt="Online Learning"
          className="w-full max-w-[320px] sm:max-w-md lg:max-w-xl rounded-3xl shadow-2xl"
        />

        {/* Achievements Box */}
        <div className="absolute -bottom-8 sm:-bottom-10 bg-white text-black w-48 sm:w-56 h-20 rounded-xl flex shadow-xl border border-gray-200">
          <div className="w-14 flex items-center justify-center">
            <MdOutlineMessage className="text-black text-4xl" />
          </div>
          <div className="flex flex-col justify-center px-2">
            <h1 className="text-xl font-bold">125+</h1>
            <p className="text-xs text-gray-500">Achievement Awards</p>
          </div>
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full lg:w-[45%] text-center lg:text-left space-y-5"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
          More than{" "}
          <span className="text-yellow-500">25,000+</span> education courses
          online
        </h1>

        <p className="text-sm sm:text-base text-gray-300 max-w-md mx-auto lg:mx-0">
          Learn from industry experts anytime, anywhere. Build your career with
          high-quality, affordable online courses.
        </p>

        <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:bg-white hover:text-black active:scale-95">
          Get Started
        </button>

        {/* Mobile trust indicators */}
        <div className="lg:hidden flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-6 mt-6 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((id) => (
                <img
                  key={id}
                  className="w-8 h-8 rounded-full border-2 border-green-900"
                  src={`https://randomuser.me/api/portraits/${
                    id % 2 ? "women" : "men"
                  }/${id}.jpg`}
                  alt={`User ${id}`}
                />
              ))}
            </div>
            <span className="text-sm font-medium">15K+ Students</span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-sm">★</span>
              ))}
            </div>
            <span className="text-sm font-medium">4.94 (625 reviews)</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
