import { motion } from "framer-motion";
import demoVideo from "./video/video.mp4";
import manager from "./image/manager.jpg";

export default function OnlineCourses() {
  return (
    <div className="w-full flex flex-col p-4 gap-5 bg-white 
      md:flex-row md:h-auto lg:flex-row lg:h-auto xl:px-10 
      2xl:max-w-[1800px] 2xl:mx-auto">
      
      {/* First Card */}
      <motion.div
        className="w-full bg-[#eafafc] rounded-lg overflow-hidden
          md:h-[27rem] lg:h-[18rem] lg:flex lg:relative flex flex-col flex-col-reverse p-4 "
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
          <div className="bg-whiteOverlay flex lg:justify-center items-center w-full">
        </div>
        
        {/* Image Section - Visible on mobile, hidden on lg screens */}
        <div className="w-full h-[14rem] md:h-[16rem] lg:hidden">
          <img 
            src={manager} 
            alt="Manager" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Background Image - Visible on lg screens and up */}
        <div className="hidden lg:block lg:absolute lg:inset-0 lg:bg-boxbanner lg:bg-cover lg:bg-center lg:bg-no-repeat"></div>

        {/* Content Section */}
        <div className="p-4 lg:p-0 lg:absolute lg:bottom-16 lg:left-4 lg:z-20">
          <h1 className="text-xl font-semibold text-center lg:text-left lg:text-2xl">
            Quick access to the <br className="hidden"/> popular courses
          </h1>
          <button className="bg-[#efb70e] py-3 px-6 rounded-lg mt-4 block mx-auto lg:mx-0 lg:mt-6">
            View Courses
          </button>
        </div>
      </motion.div>

      {/* Second Card */}
      <motion.div
        className="w-full rounded-lg bg-[#f4f1e3] p-4 flex flex-col
          md:h-[27rem] lg:h-[18rem] lg:flex-row lg:items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Text Section */}
        <div className="lg:flex-1 lg:pl-4">
          <h1 className="font-semibold text-xl text-center lg:text-left lg:text-2xl mb-4">
            Develop Your <br className="hidden"/> Skill Online!
          </h1>
          <button className="py-3 px-6 bg-gray-800 text-white rounded-lg mt-4 block mx-auto lg:mx-0">
            Apply Now
          </button>
        </div>

        {/* Video Section */}
        <div className="mt-4 lg:mt-0 lg:flex-1 lg:flex lg:justify-center">
          <video
            controls
            className="w-full max-w-[25rem] h-auto rounded-lg"
          >
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        
      </motion.div>
    </div>
  );
}