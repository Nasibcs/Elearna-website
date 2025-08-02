import React from "react";
import study from "./images/study1.jpg";

export default function OurStory() {
  return (
    <>
      {/* Main Section */}
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center px-6 lg:px-20 py-16 gap-10 bg-white">

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-xl font-semibold text-blue-600">Our Story</h1>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#0f1c22] leading-tight">
            Limitless learning and get more possibilities
          </h2>
          <p className="text-gray-500 mt-6">
            Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in
            maecenas scelerisque imperdiet nec. Pellentesque mauris amet ligula
            eget malesuada ullamcorper nibh. Etiam suspendisse pretium est
            elementum elementum rhoncus.
          </p>

          {/* Stats Box */}
          <div className="mt-10 border rounded-xl p-6 bg-white">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-16 text-[#0f1c22]">
              <div className="flex flex-col items-center text-center border-b sm:border-b-0 sm:border-r border-gray-300 pb-4 sm:pb-0 sm:pr-12">
                <h2 className="text-3xl font-bold">1.5K</h2>
                <p className="text-sm font-semibold mt-1">FINISH SEASONS</p>
              </div>
              <div className="flex flex-col items-center text-center border-b sm:border-b-0 sm:border-r border-gray-300 pb-4 sm:pb-0 sm:pr-12">
                <h2 className="text-3xl font-bold">7.8K</h2>
                <p className="text-sm font-semibold mt-1">ENROLLED</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold">100%</h2>
                <p className="text-sm font-semibold mt-1">JOB PLACEMENT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <img src={study} alt="Study" className="w-full h-[30rem] object-cover rounded-2xl shadow-lg" />

          {/* Floating Card */}
          <div className="absolute bottom-[-30px] left-6 sm:left-16 bg-white shadow-lg p-4 rounded-xl w-[90%] max-w-xs">
            <p className="text-gray-400 font-medium text-sm">Trusted By</p>
            <h2 className="text-black text-base font-bold mt-1">
              15000+ enrolled students
            </h2>

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

            <div className="flex items-center mt-4 space-x-1 text-yellow-400 text-lg">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span className="text-black ml-2 text-sm font-semibold">4.94</span>
              <span className="text-gray-400 text-xs">(625)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Highlight Section */}
      <div className="bg-[#243631] w-[90%] mx-auto rounded-xl mb-10 grid grid-cols-1 md:grid-cols-3 text-white text-center py-10 gap-6 px-6">
        <div>
          <h1 className="text-xl font-bold">150+ online courses</h1>
          <p className="text-gray-300">Lorem ipsum dolor sit amet</p>
        </div>
        <div>
          <h1 className="text-xl font-bold">Personalized learning</h1>
          <p className="text-gray-300">Lorem ipsum dolor sit amet</p>
        </div>
        <div>
          <h1 className="text-xl font-bold">Lifetime update</h1>
          <p className="text-gray-300">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </>
  );
}
