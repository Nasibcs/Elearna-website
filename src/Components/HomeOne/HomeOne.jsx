import React from "react";
import homeone from "./image/homeoneImage.webp";
import { MdOutlineMessage } from "react-icons/md";
import { motion } from "framer-motion";

export default function HomeOne() {
  return (
    <div className="bg-homeOnebanner bg-[#0f252a] xl:h-[50rem]" >
    <div className="flex flex-col flex-col-reverse lg:flex-row items-center justify-between w-full min-h-[55rem] sm:min-h-[45rem] md:h-[83rem] lg:h-[45rem]  text-white px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 gap-3 xs:gap-4 sm:gap-5 lg:gap-10 xl:h-[60rem] xl:gap-24 2xl:w-[50%] 2xl:m-auto">
      
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full lg:w-[33rem] xl:w-[55rem] flex justify-center items-center top-4 xs:top-4 
         xs:right-10 md:-top-[1rem] lg:top-5 xl:left-8 xl:-top-6 mobileS:-top-5 "
      >
        <img
          src={homeone}
          alt="Online Learning"
          className="w-[100%] h-auto"
        />
{/* Floating Card - Only shown on lg screens and larger */}
<motion.div
  className="lg:block text-center absolute top-[17rem] xl:bottom-[-5rem] right-[1rem] xl:right-6 bg-[#02222c] shadow-xl p-5 rounded-3xl w-[40%] h-[9rem] xl:w-[40%]
       md:top-[36rem] md:h-[11rem] md:right-10 lg:left-[220px] lg:top-[22rem] lg:h-[9rem] lg:w-[48%] xl:left-[19rem] xl:top-[27rem]
       2xl:top-[32rem] 2xl:left-[20rem] mobileS:h-[5rem] mobileS:top-[14rem] mobileS:p-1
       mobileM:top-[18rem] mobileL:top-[19rem] mobileL:h-[7rem]"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  viewport={{ once: true }}
>
  <motion.p className="text-gray-400 font-medium text-[10px] md:text-xl lg:text-sm xl:text-xl
  mobileS:text-[7px] ">
    Trusted By
  </motion.p>
  <motion.h2 className="text-gray-300 text-[10px] font-bold mt-1 md:mt-2 md:text-xl lg:text-xs xl:text-sm 
  mobileS:text-[5px]">
    15000+ enrolled students
  </motion.h2>
  <motion.div className="flex justify-center -space-x-4 mt-3 w-full text-center mobileL:mt-5">
    {[1, 2, 3, 4].map((n, i) => (
      <motion.img
        key={i}
        className="w-7 h-7 md:h-10 md:w-10 lg:w-5 lg:h-6 rounded-full border border-white mobileS:w-5 mobileS:h-5"
        src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${n}.jpg`}
        alt={`User ${n}`}
      />
    ))}
  </motion.div>
  <motion.div className="flex items-center justify-center space-x-1 text-yellow-400 text-sm md:mt-2 mobileS:text-[5px] mobileL:mt-4 ">
    {[...Array(5)].map((_, i) => (
      <span key={i}>★</span>
    ))}
    <span className="text-white ml-2 text-sm font-semibold mobileS:text-[10px]">4.94</span>
    <span className="text-gray-300 text-xs mobileS:text-[10px]">(625)</span>
  </motion.div>
</motion.div>

        {/* Achievements Box */}
{/* Achievement Awards Card - Only shown on lg screens and larger */}
<div className=" lg:flex absolute left-[5px] bottom-[7rem] bg-white text-black w-[12rem] h-16 rounded-md shadow-xl
flex md:bottom-[15rem] md:w-[18rem] md:h-[6rem] md:p-3 lg:top-[17rem] lg:w-[12rem] lg:h-[4rem]
xl:top-[22rem] xl:w-[17rem] xl:h-[5rem] xl:-left-5 mobileS:w-[8rem] mobileS:h-[45px] mobileS:top-[13rem] mobileL:top-[17rem] md:top-[28rem]">
  <div className="w-14 flex items-center justify-center">
    <MdOutlineMessage className="text-black text-3xl md:text-5xl lg:text-3xl xl:text-6xl" />
  </div>
  <div className="flex flex-col justify-center px-2">
    <h1 className="text-sm font-bold md:text-3xl lg:text-xl xl:text-4xl mobileS:text-xs">125+</h1>
    <p className="text-xs text-gray-500 md:text-xl lg:text-xs xl:text-sm mobileS:text-[10px]">Achievement Awards</p>
  </div>
</div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full lg:w-[55%] xl:w-[76%] text-center lg:text-left space-y-3 xs:space-y-4 sm:space-y-5 relative -bottom-20 xs:-bottom-10 sm:-bottom-12
        md:top-24 lg:top-8 xl:left-5 xl:-top-1"
      >
        <p className="text-xs xs:text-sm mobileS:text-[15px] text-gray-300 md:text-[17px]">ONLINE LEARNING</p>
        <h1 className="text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
         <span className="mobileS:text-3xl">More than{" "}<br className="xl:hidden lg:hidden md:hidden mobileL:hidden 
         mobileM:hidden 2xl:hidden"/></span> 
          <span className="text-yellow-500">25,000+</span> <br className="md:hidden lg:hidden 2xl:hidden xl:hidden"/> education 
           <br className="xl:hidden lg:hidden md:hidden mobileL:hidden 
         mobileM:hidden 2xl:hidden"/>courses
          online
        </h1>

        <p className=" xs:text-sm sm:text-base max-w-xs xs:max-w-sm sm:max-w-md mx-auto lg:mx-0 
        text-sm text-gray-400 mobileS:text-gray-300 mobileS:mt-2">
          Learn from industry experts anytime, anywhere. Build your career with
          high-quality, affordable online courses.
        </p>

        <button className="border border-gray-400 text-white font-semibold px-4 xs:px-6 py-2 xs:py-3 rounded
        relative top-5 bg-[#0f252a] shadow-lg transition-all duration-300 hover:bg-white hover:text-black active:scale-95 text-sm xs:text-base 
        w-[8rem] h-[3rem] md:h-[50px] md:w-[9rem] lg:bg-[#0f252a] lg:w-[10rem]">
          Get Started
        </button>

       
      </motion.div>
    </div>
    
</div>
  );
}