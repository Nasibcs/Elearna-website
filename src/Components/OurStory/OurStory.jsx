import React from "react";
import story from "./images/story.webp";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ico from "./images/ico.svg";
import ico2 from "./images/ico2.svg";
import ico3 from "./images/ico3.svg";

export default function OurStory() {
  function Counter({ to, duration = 2 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      let end = parseFloat(to.replace(/[^0-9.]/g, ""));
      let suffix = to.replace(/[0-9.]/g, "");
      let startTime;

      function updateCounter(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const value = start + (end - start) * progress;

        setCount(
          suffix === "K" ? value.toFixed(1) + "K" :
          suffix === "%" ? Math.round(value) + "%" :
          suffix ? value.toFixed(0) + suffix : 
          Math.round(value)
        );

        if (progress < 1) requestAnimationFrame(updateCounter);
      }

      requestAnimationFrame(updateCounter);
    }, [to, duration]);

    return <span>{count}</span>;
  }

  return (
    <>
      {/* Main Section */}
      <div className="w-full min-h-[30rem] sm:min-h-[36rem] md:min-h-[40rem] lg:min-h-[48rem] xl:min-h-[52rem] flex flex-col lg:flex-row items-center px-3 xs:px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 bg-white relative overflow-hidden ">
        
        {/* Image Section */}
        <motion.div
          className="relative z-20 lg:bottom-36 xl:bottom-44 lg:left-[-3rem] xl:left-[-4rem] w-full lg:w-[50%] xl:w-[50rem] flex justify-center items-center mb-6 xs:mb-8 sm:mb-10 lg:mb-0  "
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={story}
            alt="Study"
            className="w-full h-auto max-h-[28rem] xs:max-h-[32rem] sm:max-h-[36rem] md:max-h-[40rem] lg:max-h-[45rem] object-cover rounded-md shadow-b shadow-2xl"
          />

          {/* Floating Card */}
          <motion.div
            className="text-center absolute bottom-[1rem] xs:bottom-[-5.5rem] sm:bottom-[-5rem] md:bottom-[1rem] right-0 xs:right-2 sm:right-4 md:right-6 lg:right-[-1rem] xl:right-6 bg-white shadow-xl p-3 xs:p-4 sm:p-5 rounded-3xl w-[50%] xs:w-[80%] sm:w-[70%] md:w-[60%] lg:w-[45%] xl:w-[40%] max-w-xs 
             "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.p className="text-gray-400 font-medium text-[10px] xs:text-xs sm:text-sm">
              Trusted By
            </motion.p>
            <motion.h2 className="text-black text-xs xs:text-sm sm:text-base font-bold mt-1">
              15000+ enrolled students
            </motion.h2>
            <motion.div className="flex justify-center -space-x-2 xs:-space-x-3 sm:-space-x-4 mt-2 xs:mt-3">
              {[1, 2, 3, 4].map((n, i) => (
                <motion.img
                  key={i}
                  className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white"
                  src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${n}.jpg`}
                  alt={`User ${n}`}
                />
              ))}
            </motion.div>
            <motion.div className="flex items-center justify-center mt-2 xs:mt-3 sm:mt-4 space-x-1 text-yellow-400 text-xs xs:text-sm sm:text-lg">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span className="text-black ml-1 xs:ml-2 text-[10px] xs:text-xs sm:text-sm font-semibold">4.94</span>
              <span className="text-gray-400 text-[10px] xs:text-xs">(625)</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full lg:w-[45%] xl:w-[45rem] relative lg:bottom-28 xl:bottom-32 px-1 xs:px-2 sm:px-0
           lg:-top-10"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-base xs:text-lg sm:text-xl font-semibold text-center lg:text-start">Our Story</h1>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold mt-1 xs:mt-2 sm:mt-3 md:mt-4 text-[#0f1c22] leading-snug sm:leading-tight text-center lg:text-start">
            Limitless learning and get more possibilities
          </h2>
          <p className="text-gray-500 mt-3 xs:mt-4 sm:mt-5 md:mt-6 text-[11px] xs:text-xs sm:text-sm md:text-base leading-relaxed text-center lg:text-start">
            Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in maecenas scelerisque imperdiet nec. Pellentesque mauris amet ligula eget malesuada ullamcorper nibh. Etiam suspendisse pretium est elementum elementum rhoncus.
          </p>

          {/* Stats Box */}
          <motion.div
            className="mt-4 xs:mt-5 sm:mt-8 md:mt-10 rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 bg-white w-full 
             "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-3 sm:flex-row justify-around items-center gap-3 xs:gap-4 sm:gap-5 md:gap-6 text-[#0f1c22]">
              {[
                { stat: "1.5K", label: "FINISH SEASONS" },
                { stat: "7.8K", label: "ENROLLED" },
                { stat: "100%", label: "JOB PLACEMENT" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center ${
                    idx !== 2 ? "sm:border-r border-gray-300 sm:pr-4 md:pr-8 lg:pr-12" : ""
                  }`}
                >
                  <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold lg:text-2xl">
                    <Counter to={item.stat} duration={2} />
                  </h2>
                  <p className="text-[10px] xs:text-xs sm:text-sm mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Highlight Section */}
      <motion.div
        className="bg-[#0f252a] w-[92%] xs:w-[94%] sm:w-[96%] md:w-[98%] mx-auto rounded relative lg:bottom-28 xl:bottom-36 grid grid-cols-1 md:grid-cols-3 text-white text-center py-6 xs:py-8 sm:py-10 md:py-12 lg:py-14 gap-3 xs:gap-4 sm:gap-5 md:gap-6 px-3 xs:px-4 sm:px-5 md:px-6 gap-y-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {[
          { title: "150+ online courses", desc: "Lorem ipsum dolor sit amet", icon: ico },
          { title: "Personalized learning", desc: "Lorem ipsum dolor sit amet", icon: ico2 },
          { title: "Lifetime update", desc: "Lorem ipsum dolor sit amet", icon: ico3 },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-3 xs:gap-4 text-gray-300">
            <img src={item.icon} alt="" className="w-8 xs:w-9 sm:w-10 h-8 xs:h-9 sm:h-10" />
            <div>
              <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold">{item.title}</h1>
              <p className="text-gray-300 text-[10px] xs:text-xs sm:text-sm mt-1 sm:mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}