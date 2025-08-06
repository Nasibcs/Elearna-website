import React from "react";
import { motion } from "framer-motion";
import instructorImage from "./images/imgage.webp"; // Replace with your actual image

export default function BecameInstructor() {
  return (
    <div className="w-full bg-white py-16 px-6 flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto gap-10">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center lg:text-left max-w-xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#0f1c22] mb-6">
          Became an instructor
        </h2>
        <p className="text-gray-500 mb-8">
          Lorem ipsum dolor sit amet consectetur. Sed ultricies fames scelerisque
          urna quis semper amet. Nisl tincidunt tortor nullam est nec commodo orci
          dictum in. Lorem consectetur donec purus sagittis.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#0f1c22] text-white px-6 py-3 rounded hover:bg-[#1c2f34] transition"
        >
          Start Teaching Today
        </motion.button>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-sm lg:max-w-md"
      >
        {/* Yellow Background Circle */}
        <div className="absolute -top-5 -left-5 w-80 h-80 bg-yellow-400 rounded-full -z-10"></div>

        {/* Instructor Image */}
        <img
          src={instructorImage}
          alt="Instructor"
          className="w-full rounded-xl relative z-10 object-cover"
        />

        {/* Floating Review Box */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="absolute -top-6 left-1/2 -translate-x-1/2 lg:left-auto lg:-left-20 lg:top-1/2 lg:-translate-y-1/2 bg-white shadow-lg rounded-full px-5 py-2 flex items-center gap-3 z-20 cursor-pointer"
          title="Student reviews"
        >
          {/* Profile Images */}
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((id, i) => (
              <img
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white"
                src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${id}.jpg`}
                alt={`User ${id}`}
              />
            ))}
          </div>
          {/* Rating */}
          <div className="text-sm text-gray-700 flex items-center gap-1 select-none">
            <span className="text-yellow-400">★★★★★</span>
            <span className="font-medium ml-1">4.94</span>
            <span className="text-gray-400">(625)</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
