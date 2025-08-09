import React from "react";
import { motion } from "framer-motion";
import demoVideo from "./video/video.mp4";
import img1 from "./image/img1.svg";


export default function OnlineCourses() {
  return (
    <div className=" w-full flex flex-col lg:flex-row justify-between gap-5 px-4 sm:px-6 lg:px-12 py-10">
      {/* Left Banner Section */}
      <motion.div
        className="w-full lg:w-1/2 h-80 sm:h-96 rounded bg-boxbanner bg-cover bg-center flex items-center justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-whiteOverlay flex h-full items-end w-full">
          <div className="mb-10 sm:mb-14 md:mb-20 px-4 sm:px-6 md:px-10 text-black">
            <h1 className="text-xl sm:text-2xl font-semibold leading-snug">
              Quick access to the <br /> popular courses
            </h1>
            <button className="bg-yellow-500 w-36 h-10 rounded font-bold mt-4 hover:bg-yellow-400 transition">
              View Courses
            </button>
          </div>
        </div>
      </motion.div>

      {/* Right Video Section */}
      <motion.div
        className="w-full h-[24rem] lg:w-1/2 rounded flex flex-col md:flex-row bg-[#F8EFBA] items-center justify-between p-6 gap-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full md:w-1/3 flex flex-col justify-between items-center text-center">
          <h1 className="font-bold text-xl sm:text-2xl mb-4 leading-snug">
            Develop Your <br /> Skill Online!
          </h1>
          <button className="w-40 h-12 bg-black text-white rounded hover:bg-gray-800 transition">
            Apply Now
          </button>
        </div>

        <div className="w-full md:w-2/3">
          <video
            controls
            className="w-full h-56 sm:h-60 md:h-52 lg:h-64 object-cover rounded"
          >
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <span className="relative bottom-24 left-24">
            <img src={img1} alt="" />
          </span>
        </div>
      </motion.div>
    </div>
  );
}
