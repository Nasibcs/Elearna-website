import React from "react";
import boxImage from "./images/boxImage.avif";

export default function Testimonial() {
  return (
    <div className="w-full bg-[#171f17] px-4 py-10 md:px-10 lg:px-20">
      
      {/* Header section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h3 className="text-sm md:text-base font-semibold text-white">
            Our Testimonials
          </h3>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-2 leading-snug">
            Trusted by our<br className="hidden sm:block" />
            successful students
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 text-white">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold">70M</h2>
            <div className="border-l-2 h-10 border-gray-600 mx-2" />
            <div className="text-xs text-gray-400 leading-tight">
              <p>SUCCESSFUL</p>
              <p>STUDENTS</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold">25k</h2>
            <div className="border-l-2 h-10 border-gray-600 mx-2" />
            <div className="text-xs text-gray-400 leading-tight">
              <p>GLOBAL JOB</p>
              <p>PLACEMENTS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start gap-10">
        
        {/* Image */}
        <div className="w-full sm:w-80 lg:w-[28rem]">
          <img
            src={boxImage}
            alt="Testimonial"
            className="w-full h-full rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Text Box */}
        <div className="w-full lg:w-[30rem] text-white">
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            "Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis 
            scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. 
            Morbi placerat eleifend malesuada sed semper quis."
          </p>

          <h3 className="mt-6 text-lg font-semibold">Linda Grady</h3>
          <p className="text-sm text-gray-400">Co-assistant manager</p>

          {/* Arrows */}
          <div className="flex gap-4 mt-6">
            <button className="w-10 h-10 border border-white rounded-full hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 flex items-center justify-center">
              ←
            </button>
            <button className="w-10 h-10 border border-white rounded-full hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 flex items-center justify-center">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
