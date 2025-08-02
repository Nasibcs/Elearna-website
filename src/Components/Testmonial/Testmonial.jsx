import React from "react";
import boxImage from "./images/boxImage.avif";
export default function Testmonial() {
  return (
    <div className="w-full h-screen bg-[#171f17] flex flex-col p-5">
      <div className="flex w-full h-40 p-5 justify-between">
        <div>
          <h1 className="font-bold text-white">Our testimonials</h1>
          <p className="text-4xl text-white mt-4">
            Trusted by our
            <br /> successful students
          </p>
        </div>
        <div className=" w-[30rem] h-24 mt-16 mr-44 flex justify-between ">
          <div className="text-white flex ">
            <h1 className="text-4xl text-center mt-[10px]">70M</h1>
            <span className="text-6xl ">|</span>
            <span className="text-gray-400 ml-2 mt-2">
              <h1>SUCCESSFUL </h1>
              <h1>STUDENTS</h1>
            </span>
          </div>
          <div className="text-white flex ">
            <h1 className="text-4xl text-center mt-[10px]">25k</h1>
            <span className="text-6xl ">|</span>
            <span className="text-gray-400 ml-2 mt-2">
              <h1>Global job</h1>
              <h1>placements</h1>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-80 flex p-4 justify-around">
        <div className=" h-full">
        <img src={boxImage} alt="" className="w-96 rounded mb-5" />
        </div>
        <div className=" w-96 h-full relative right-40">
        <p className="text-gray-400 mt-6">“Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis.”</p>
        
        <h1 className="text-white mt-14">Linda Grady</h1>
        <p className="text-gray-400 text-sm mt-3">Co-assistant manager</p>
        <div className="flex w-32 ml-3 mt-5 justify-between text-white">
            <button className="border-2 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 w-10 h-10 rounded-full text-center ">→</button>
            <button className=" hover:bg-yellow-500 hover:text-black hover:border-yellow-500 border-2 w-10 h-10 rounded-full text-center">←</button>
        </div>
        </div>
      </div>
    </div>
  );
}
