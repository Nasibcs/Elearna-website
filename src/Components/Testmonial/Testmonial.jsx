import React from "react";
import boxImage from "./images/boxImage.avif";

export default function Testimonial() {
  return (
    <div className="w-full bg-[#20383e] px-4 py-10 md:px-10 lg:px-20  2xl:w-[50%] 2xl:m-auto">
      
      {/* Header section */}
      <div className="flex flex-col md:flex-col justify-between items-start gap-6
       md:items-start">
        <div>
          <h3 className="text-sm md:text-start font-semibold text-white mobileS:text-center">
            Our Testimonials
          </h3>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-2 leading-snug mobileS:text-center md:mt-5">
            Trusted by our<br className="hidden sm:block md:hidden" />
            successful students
          </h1>
        </div>

<div className="flex flex-col sm:flex-row md:flex-row justify-between items-center gap-6 text-white md:justify-start md:gap-12">
  {/* First Block */}
  <div className="flex flex-col items-center md:flex-row md:items-center">
    <h2 className="text-3xl font-bold md:pr-4 md:border-r-2 border-gray-600 md:text-4xl">70M</h2>
    <div className="text-xs text-gray-400 leading-tight mt-2 md:mt-0 md:pl-4 flex flex-col md:flex-row md:gap-2 md:text-xl">
      <p>SUCCESSFUL</p>
      <p>STUDENTS</p>
    </div>
  </div>

  {/* Second Block */}
  <div className="flex flex-col items-center md:flex-row md:items-center">
    <h2 className="text-3xl font-bold md:pr-4 md:border-r-2 border-gray-600 md:text-4xl">25k</h2>
    <div className="text-xs text-gray-400 leading-tight mt-2 md:mt-0 md:pl-4 flex flex-col md:flex-row md:gap-2 md:text-sm">
      <p>GLOBAL JOB</p>
      <p>PLACEMENTS</p>
    </div>
  </div>
</div>

      </div>

      {/* Testimonial section */}
      <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start gap-10 md:flex-row">
        
        {/* Image */}
        <div className="w-full sm:w-80 lg:w-[28rem] md:w-[35rem] md:h-[17rem]">
          <img
            src={boxImage}
            alt="Testimonial"
            className="w-full h-full rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Text Box */}
        <div className="w-full lg:w-[30rem] text-white xl:w-[60%] xl:h-[20rem]
         flex xl:flex-col xl:justify-between md:flex-col mobileS:flex-col mobileL:flex-col mobileM:flex-col">
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed xl:text-2xl xl:text-gray-400">
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
