import React from "react";
import { motion } from "framer-motion";
import study from "./images/study1.jpg";

export default function OurStory() {
  return (
    <>
      {/* Main Section */}
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center px-6 lg:px-20 py-16 gap-10 bg-white">
        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-xl font-semibold text-blue-600">Our Story</h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-[#0f1c22] leading-tight">
            Limitless learning and get more possibilities
          </h2>
          <p className="text-gray-500 mt-6 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in maecenas scelerisque imperdiet nec. Pellentesque mauris amet ligula eget malesuada ullamcorper nibh. Etiam suspendisse pretium est elementum elementum rhoncus.
          </p>

          {/* Stats Box */}
          <motion.div
            className="mt-10 border rounded-xl p-6 bg-white w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row justify-around items-center gap-6 text-[#0f1c22]">
              {[
                { stat: "1.5K", label: "FINISH SEASONS" },
                { stat: "7.8K", label: "ENROLLED" },
                { stat: "100%", label: "JOB PLACEMENT" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center ${
                    idx !== 2 ? "sm:border-r border-gray-300 sm:pr-12" : ""
                  }`}
                >
                  <h2 className="text-3xl font-bold">{item.stat}</h2>
                  <p className="text-sm font-semibold mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative w-full lg:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={study}
            alt="Study"
            className="w-full h-[25rem] sm:h-[30rem] object-cover rounded-2xl shadow-lg"
          />

          {/* Floating Card */}
          <motion.div
            className="absolute bottom-[-30px] left-4 sm:left-10 bg-white shadow-xl p-5 rounded-xl w-[90%] max-w-xs"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 font-medium text-sm">Trusted By</p>
            <h2 className="text-black text-base font-bold mt-1">
              15000+ enrolled students
            </h2>

            {/* Profile images */}
            <div className="flex justify-start -space-x-4 mt-3">
              {[1, 2, 3, 4].map((n, i) => (
                <img
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${n}.jpg`}
                  alt={`User ${n}`}
                />
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center mt-4 space-x-1 text-yellow-400 text-lg">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span className="text-black ml-2 text-sm font-semibold">4.94</span>
              <span className="text-gray-400 text-xs">(625)</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Highlight Section */}
      <motion.div
        className="bg-[#243631] w-[90%] mx-auto rounded-xl mb-10 grid grid-cols-1 md:grid-cols-3 text-white text-center py-10 gap-6 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {[
          { title: "150+ online courses", desc: "Lorem ipsum dolor sit amet" },
          { title: "Personalized learning", desc: "Lorem ipsum dolor sit amet" },
          { title: "Lifetime update", desc: "Lorem ipsum dolor sit amet" },
        ].map((item, idx) => (
          <div key={idx}>
            <h1 className="text-xl font-bold">{item.title}</h1>
            <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </>
  );
}
