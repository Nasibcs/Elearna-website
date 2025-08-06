import React from "react";
import study1 from "./images/study1.jpg";
import study2 from "./images/study2.jpg";

export default function Offering() {
  return (
    <div className="w-full max-w-[1440px] mx-auto mt-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* 🔸 Left Image Section */}
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-6 relative">
          {/* Image 1 */}
          <div className="w-full sm:w-1/2 h-80 sm:h-96 relative rounded-lg overflow-hidden shadow-xl mt-10 sm:mt-0 transition-transform duration-300 hover:scale-105">
            <img
              src={study1}
              alt="study"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Image 2 */}
          <div className="w-full sm:w-1/2 h-80 relative rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
            <img
              src={study2}
              alt="study"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* 🔹 Floating Badge */}
          <div className="absolute -bottom-6 left-4 sm:left-16 bg-[#0a1a26] text-white p-4 sm:p-5 rounded-xl shadow-lg flex gap-4 items-center w-[260px] sm:w-[280px]">
            <div className="text-yellow-500 text-4xl font-extrabold">50+</div>
            <div className="text-sm">
              <h1 className="font-semibold">Free courses</h1>
              <p className="text-xs text-gray-300">listed online ✨</p>
            </div>
          </div>
        </div>

        {/* 🔸 Right Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Headings */}
          <div>
            <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
              What we offer
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-3 text-gray-900">
              Personalized learning <br className="hidden md:block" />
              for your ambitions
            </h2>
            <p className="text-gray-600 mt-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
              mauris mus. Vitae diam dolor lacus amet integer ut.
            </p>
          </div>

          {/* Bullet Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 text-sm font-medium text-gray-700">
            <ul className="list-disc list-inside space-y-1">
              <li>Skill-based instruction</li>
              <li>Global certification</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Analytics and insights</li>
              <li>Customizable courses</li>
            </ul>
          </div>

          {/* Bottom CTA Box */}
          <div className="bg-[#d6e7f0] rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 mt-4 shadow-md">
            <div className="text-center sm:text-left">
              <h1 className="font-bold text-lg text-gray-800">
                Still have questions?
              </h1>
              <p className="text-gray-700 text-sm mt-1">
                Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.
              </p>
            </div>
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition text-sm sm:text-base w-full sm:w-auto">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
