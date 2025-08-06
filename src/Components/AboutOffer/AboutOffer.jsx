import React from "react";
import LearnGalary from "../learn/LearnGalary";
import img from "./image/img.webp";
import vid from "./video/video.mp4";
import { motion } from "framer-motion";

export default function WhatWeOffer() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-24 py-8 sm:py-12 md:py-16 gap-8 lg:gap-12 bg-white">
        {/* Image + Video Section */}
        <motion.div
          className="flex gap-4 sm:gap-6 items-center justify-center w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 w-16 sm:w-20 h-16 sm:h-20 bg-yellow-400 rounded-full -z-10" />
            <img
              src={img}
              alt="Teacher explaining a concept"
              className="w-40 sm:w-48 md:w-52 h-60 sm:h-64 md:h-72 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Video */}
          <video
            src={vid}
            className="w-48 sm:w-56 md:w-64 h-60 sm:h-64 md:h-72 object-cover rounded-lg shadow-md"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>

        {/* Text Content Section */}
        <motion.div
          className="max-w-xl w-full text-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-xs sm:text-sm font-semibold text-gray-500 mb-2">
            What we offer
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f1c22] mb-3 sm:mb-4 leading-snug">
            Personalized learning for your ambitions
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6">
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
            mus. Vitae diam dolor lacus amet integer ut.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 text-sm sm:text-base text-[#0f1c22] font-medium list-disc ml-4 sm:ml-5">
            <li>Skill-based instruction</li>
            <li>Analytics and insights</li>
            <li>Global certification</li>
            <li>Customizable courses</li>
          </ul>

          {/* CTA Box */}
          <div className="bg-[#f1f7f9] p-4 sm:p-5 md:p-6 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-base sm:text-lg text-[#0f1c22]">
                Still have questions?
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.
              </p>
            </div>
            <button className="w-full sm:w-auto bg-[#0f1c22] hover:bg-[#1e2e33] text-white px-4 sm:px-5 py-2 rounded transition-all text-sm sm:text-base">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>

      {/* Gallery Component */}
      <LearnGalary />
    </>
  );
}
