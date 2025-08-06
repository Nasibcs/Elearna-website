import React from "react";
import homeone from "./image/homeoneImage.webp";
import { MdOutlineMessage } from "react-icons/md";
import { motion } from "framer-motion";

export default function HomeOne() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full min-h-screen bg-[#243631] text-white px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 gap-6 sm:gap-10">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full lg:w-1/2 flex justify-center items-center mt-6 sm:mt-10 lg:mt-28"
      >
        <img
          src={homeone}
          alt="Online Learning"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-xl"
        />

        {/* Achievements Box - Responsive positioning */}
        <div className="absolute bottom-[-15px] sm:bottom-[-20px] left-1/2 transform -translate-x-1/2 lg:left-auto lg:top-[400px] lg:right-32 bg-white text-black w-44 sm:w-52 h-16 sm:h-20 rounded flex shadow-lg">
          <div className="w-12 sm:w-16 flex items-center justify-center">
            <MdOutlineMessage className="text-black text-4xl sm:text-5xl" />
          </div>
          <div className="flex flex-col w-full p-1 sm:p-2 justify-center">
            <h1 className="text-xl sm:text-2xl font-bold">125+</h1>
            <p className="text-xs sm:text-sm">Achievement awards</p>
          </div>
        </div>

        {/* Students Info Box - Desktop only */}
        <div className="hidden lg:block absolute top-[200px] left-[-80px] bg-green-950 text-white p-6 rounded-2xl w-fit mx-auto text-center shadow-lg">
          <p className="text-gray-400 font-semibold text-sm">Trusted By</p>
          <h2 className="text-sm font-bold mt-1">15000+ enrolled students</h2>
          <div className="flex justify-center -space-x-4 mt-2">
            {[1, 2, 3, 4].map((id) => (
              <img
                key={id}
                className="w-10 h-10 rounded-full border-2 border-white"
                src={`https://randomuser.me/api/portraits/${id % 2 ? 'women' : 'men'}/${id}.jpg`}
                alt={`User ${id}`}
              />
            ))}
          </div>
          <div className="flex justify-center items-center mt-4 space-x-1 text-yellow-400 text-lg">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
            <span className="text-white ml-2 text-base font-semibold">4.94</span>
            <span className="text-gray-400 text-sm">(625)</span>
          </div>
        </div>
      </motion.div>

      {/* Text Section - Mobile optimized */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-[45%] text-center lg:text-left space-y-4 sm:space-y-6 mt-32 sm:mt-40 lg:mt-56"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          More than <span className="text-yellow-500">25000+</span> education courses online
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-md mx-auto lg:mx-0">
          Lorem ipsum dolor sit amet consectetur. Gravida enim risus sollicitudin 
          mauris tincidunt commodo ornare.
        </p>

        <button className="mt-2 sm:mt-4 border-2 border-white text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md transition duration-300 hover:bg-white hover:text-black active:scale-95">
          Get Started
        </button>

        {/* Mobile-only trust indicators */}
        <div className="lg:hidden flex flex-col items-center mt-6 space-y-4">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((id) => (
                <img
                  key={id}
                  className="w-8 h-8 rounded-full border-2 border-green-800"
                  src={`https://randomuser.me/api/portraits/${id % 2 ? 'women' : 'men'}/${id}.jpg`}
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