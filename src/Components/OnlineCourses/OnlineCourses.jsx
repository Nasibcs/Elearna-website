import React from "react";
import { motion } from "framer-motion";
import demoVideo from "./video/video.mp4";
import img1 from "./image/img1.svg";

export default function OnlineCourses() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between gap-6 px-4 sm:px-6 lg:px-12 py-10 overflow-x-hidden">
      {/* Left Banner Section */}
      <motion.div
        className="w-full lg:w-1/2 min-h-[20rem] sm:min-h-[24rem] rounded bg-boxbanner bg-cover bg-center flex items-center justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-whiteOverlay flex h-full items-end w-full">
          <div className="mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6 md:px-10 text-black max-w-full">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug break-words">
              Quick access to the <br /> popular courses
            </h1>
            <button className="bg-yellow-500 w-32 sm:w-36 h-10 rounded font-bold mt-4 hover:bg-yellow-400 transition">
              View Courses
            </button>
          </div>
        </div>
      </motion.div>

      {/* Right Video Section */}
      <motion.div
        className="w-full lg:w-1/2 rounded flex flex-col md:flex-row bg-[#F8EFBA] items-center justify-between p-4 sm:p-6 gap-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side Content */}
        <div className="w-full md:w-1/3 flex flex-col justify-between items-center text-center">
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl mb-4 leading-snug break-words">
            Develop Your <br /> Skill Online!
          </h1>
          <button className="w-36 sm:w-40 h-10 sm:h-12 bg-black text-white rounded hover:bg-gray-800 transition">
            Apply Now
          </button>
        </div>

        {/* Video */}
        <div className="w-full md:w-2/3 relative">
          <video
            controls
            className="w-full h-52 sm:h-56 md:h-52 lg:h-64 object-cover rounded"
          >
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Floating Image */}
          <span className="absolute -bottom-8 left-8 w-16 sm:w-20 md:w-24">
            <img src={img1} alt="icon" className="w-full h-auto" />
          </span>
        </div>
      </motion.div>
    </div>
  );
}
