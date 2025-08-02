import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function LindaGrady() {
  return (
    <div className="w-full min-h-screen bg-[#f3f8f9] flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl text-center">
        {/* Quotation Icon */}
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 text-gray-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.17 6C5.53 6 4.19 7.34 4.19 8.98c0 1.64 1.34 2.98 2.98 2.98.15 0 .3-.01.45-.03-.31 2.57-2.21 4.5-4.55 4.5v1.5c4.01 0 7.25-3.24 7.25-7.25S11.18 6 7.17 6zM16.83 6c-1.64 0-2.98 1.34-2.98 2.98 0 1.64 1.34 2.98 2.98 2.98.15 0 .3-.01.45-.03-.31 2.57-2.21 4.5-4.55 4.5v1.5c4.01 0 7.25-3.24 7.25-7.25S20.84 6 16.83 6z" />
          </svg>
        </div>

        {/* Quote Text */}
        <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed mb-8 px-4">
          “Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.”
        </p>

        {/* Name and Role */}
        <h3 className="text-lg font-semibold text-gray-900">Linda Grady</h3>
        <p className="text-sm text-gray-500 mb-6 tracking-wide uppercase">Co-Assistant Manager</p>

        {/* Arrows */}
        <div className="flex justify-center space-x-4">
          <button className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition">
            <FaArrowLeft className="text-gray-600" />
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition">
            <FaArrowRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
