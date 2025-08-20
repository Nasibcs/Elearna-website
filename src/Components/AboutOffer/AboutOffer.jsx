import React from "react";
import LearnGalary from "../learn/LearnGalary";
import img from "./image/img.webp";
import vid from "./video/video.mp4";
import { motion } from "framer-motion";

export default function WhatWeOffer() {
  const offerings = [
    "Skill-based instruction",
    "Analytics and insights",
    "Global certification",
    "Customizable courses"
  ];

  return (
    <section className="bg-white">
      <div className="flex relative bottom-20 md:bottom-28 flex-col lg:flex-row items-center justify-center px-3 xs:px-4 sm:px-6 md:px-8 lg:px-24 py-6 xs:py-8 sm:py-12 md:py-16 gap-6 xs:gap-8 sm:gap-10 lg:gap-16 max-w-7xl mx-auto overflow-hidden mt-10">
        {/* Media Section */}
        <motion.div
          className="flex gap-3 xs:gap-4 items-center justify-center w-full lg:w-1/2 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Mobile S: -top-6 -left-6 w-32 h-32 */}
          {/* Mobile M: -top-7 -left-7 w-36 h-36 */}
          {/* Mobile L: -top-8 -left-8 w-40 h-40 */}
          <div className="absolute -top-6 -left-6 xs:-top-7 xs:-left-7 sm:-top-8 sm:-left-8 w-32 xs:w-36 sm:w-40 h-32 xs:h-36 sm:h-40 bg-yellow-400 rounded-full -z-10"></div>
          <div className="absolute bottom-0 left-0 w-[180%] xs:w-[190%] sm:w-[200%] h-[180%] xs:h-[190%] sm:h-[200%] border border-gray-200 rounded-full -z-20"></div>

          {/* Video sizing for different devices */}
          {/* Mobile S: w-36 h-48 */}
          {/* Mobile M: w-40 h-56 */}
          {/* Mobile L: w-44 h-64 */}
          {/* Tablet: w-48 h-72 */}
          {/* Laptop: w-56 h-80 */}
          <video
            src={vid}
            className="w-36 xs:w-40 sm:w-44 md:w-48 lg:w-56 h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-tl-[40px] xs:rounded-tl-[45px] sm:rounded-tl-[50px] shadow-md"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Demo of our learning platform"
            title="Platform demo"
          />

          {/* Image sizing for different devices */}
          {/* Mobile S: w-48 h-64 */}
          {/* Mobile M: w-52 h-68 */}
          {/* Mobile L: w-56 h-72 */}
          {/* Tablet: w-64 h-80 */}
          {/* Laptop: w-[25rem] h-[30rem] */}
          <img
            src={img}
            alt="Student working on laptop"
            className="w-48 xs:w-52 sm:w-56 md:w-64 lg:w-[25rem] h-64 xs:h-68 sm:h-72 md:h-80 lg:h-[30rem] object-cover shadow-md rounded"
            loading="lazy"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="relative lg:-right-20 max-w-xl w-full text-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Text sizes for different devices */}
          <p className="uppercase text-[11px] xs:text-xs sm:text-sm font-semibold text-gray-500 mb-1 xs:mb-2
           lg:text-sm">
            What we offer
          </p>
          
          {/* Heading sizes */}
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-primary-dark mb-2 xs:mb-3 sm:mb-4 leading-snug ">
            Personalized learning for <br /> your ambitions
          </h2>
          
          {/* Paragraph sizes */}
          <p className="text-gray-500 text-xs xs:text-[13px] sm:text-base mb-3 xs:mb-4 sm:mb-6">
            Our platform adapts to your learning style and pace to help you achieve your goals faster.
          </p>

          {/* List items */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4 mb-4 xs:mb-6 sm:mb-8 text-xs xs:text-[13px] sm:text-base text-primary-dark font-medium list-disc ml-3 xs:ml-4 sm:ml-5">
            {offerings.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Bottom card */}
          <div className="bg-[#f1f7f9] w-full p-3 xs:p-4 sm:p-5 md:p-6 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 xs:gap-3 sm:gap-4 md:gap-6">
            {/* Text Section */}
            <div className="text-center sm:text-left flex-1">
              <p className="font-semibold text-sm xs:text-[15px] sm:text-lg md:text-xl text-[#0f1c22]">
                Still have questions?
              </p>
              <p className="text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-500 mt-1 leading-snug">
                Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.
              </p>
            </div>

            {/* Button Section */}
            <div className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#0f1c22] hover:bg-[#1e2e33] text-white px-3 xs:px-4 sm:px-5 md:px-6 py-1 xs:py-2 sm:py-2.5 rounded transition-all text-xs xs:text-sm sm:text-base md:text-lg">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <LearnGalary />
    </section>
  );
}