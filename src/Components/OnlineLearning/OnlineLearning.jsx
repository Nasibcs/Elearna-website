import React from "react";
import { FaStar, FaBookOpen, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import one from './images/one.webp';
import tow from "./images/tow.webp";
import three from "./images/three.webp";
import four from "./images/four.webp";
import five from "./images/five.webp";
import six from "./images/six.webp";

export default function OnlineLearning() {
  const CoursesData = [
    {
      price:"$200",
      name: "Management",
      image: one,
      desc: "Crisis management and problem-solving strategies",
      review: "⭐⭐⭐⭐⭐ 4.88",
      reviews: "210",
      lessons: "6 Lessons",
      enroll: "8k Enrolled",
    },
    {
      price:"$200",
      name: "Management",
      image: one,
      desc: "Crisis management and problem-solving strategies",
      review: "⭐⭐⭐⭐⭐ 4.88",
      reviews: "210",
      lessons: "6 Lessons",
      enroll: "8k Enrolled",
    },
    {
      name: "Design",
      image: tow,
      desc: "Advanced Photoshop techniques for designers",
      review: "⭐⭐⭐⭐⭐ 5.00",
      reviews: "1.2k",
      lessons: "8 Lessons",
      enroll: "25k Enrolled",
       price:"$220",
    },
    {
      name: "Finance",
      image: three,
      desc: "Operations management and process improvement",
      review: "⭐⭐⭐⭐⭐ 5.00",
      reviews: "812",
      lessons: "12 Lessons",
      enroll: "28k Enrolled",
       price:"$120",
    },
    {
      name: "Development",
      image: four,
      desc: "Database integration with MongoDB and SQL",
      review: "⭐⭐⭐⭐⭐ 5.20",
      reviews: "12",
      lessons: "12 Lessons",
      enroll: "18k Enrolled",
       price:"$300",
    },
    {
      name: "Management",
      image: five,
      desc: "Risk management and business continuity",
      review: "⭐⭐⭐⭐⭐ 3.20",
      reviews: "130",
      lessons: "15 Lessons",
      enroll: "10k Enrolled",
       price:"$310",
    },
    {
      name: "Development",
      image: six,
      desc: "Full-stack development with the MERN stack",
      review: "⭐⭐⭐⭐⭐ 3.20",
      reviews: "2.1k",
      lessons: "15 Lessons",
      enroll: "10k Enrolled",
       price:"$110",
    },
        {
      name: "Design",
      image: tow,
      desc: "Advanced Photoshop techniques for designers",
      review: "⭐⭐⭐⭐⭐ 5.00",
      reviews: "1.2k",
      lessons: "8 Lessons",
      enroll: "25k Enrolled",
       price:"$220",
    },
      {
      price:"$200",
      name: "Management",
      image: one,
      desc: "Crisis management and problem-solving strategies",
      review: "⭐⭐⭐⭐⭐ 4.88",
      reviews: "210",
      lessons: "6 Lessons",
      enroll: "8k Enrolled",
    },
        {
      name: "Management",
      image: five,
      desc: "Risk management and business continuity with Digital Market",
      review: "⭐⭐⭐⭐⭐ 3.20",
      reviews: "130",
      lessons: "15 Lessons",
      enroll: "10k Enrolled",
       price:"$310",
    },
        {
      name: "Design",
      image: tow,
      desc: "Advanced Photoshop techniques for designers",
      review: "⭐⭐⭐⭐⭐ 5.00",
      reviews: "1.2k",
      lessons: "8 Lessons",
      enroll: "25k Enrolled",
       price:"$220",
    },
       {
      name: "Development",
      image: four,
      desc: "Database integration with MongoDB and SQL",
      review: "⭐⭐⭐⭐⭐ 5.20",
      reviews: "12",
      lessons: "12 Lessons",
      enroll: "18k Enrolled",
       price:"$300",
    },
  ];

  
  return (
    <div className="w-full p-4 bg-white lg:p-5 md:mt-10 2xl:m-auto 2xl:w-[50%]
    ">
      <div className="mb-10">
        <h1 className="text-xl text-gray-800">Online Learning</h1>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center 
         lg:justify-between lg:h-[5rem]">
          <h2 className="text-3xl font-semibold mt-4 lg:text-5xl">Top Online Courses</h2>
          <ul className="flex flex-wrap mt-5 gap-3 font-semibold text-gray-500
         w-[80%] lg:justify-around lg:w-[50%] lg:mt-12">
            <li className="cursor-pointer hover:text-black">All Courses</li>
            <li className="cursor-pointer hover:text-black">Design</li>
            <li className="cursor-pointer hover:text-black">Development</li>
            <li className="cursor-pointer hover:text-black">Management</li>
            <li className="cursor-pointer hover:text-black">Finance</li>
          </ul>
        </div>
      </div>

      <div className="grid h-full w-full gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {CoursesData.map((course, index) => (
<motion.div
  key={index}
  className="group h-[32rem] bg-white border border-gray-300 shadow-md overflow-hidden transition-all duration-300 relative mobileL:border-none mobileM:border-none mobileS:border-none
   lg:h-[28rem] "
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1, duration: 0.5 }}
  whileHover={{ scale: 1.05 }}
>
<div className="relative overflow-hidden">
  <div className="transform transition-transform duration-500 ease-out group-hover:scale-105">
    <img
      src={course.image}
      alt={course.name}
      className="w-full h-52 object-cover"
    />
  </div>

</div>

  <span className="absolute top-44 right-4 w-16 h-16 flex justify-center items-center font-bold text-xl bg-blue-600 text-white px-3 py-1 rounded-full transform transition-transform duration-500 ease-out group-hover:scale-110 ">
    {course.price}
  </span>
  <div className="p-5 pb-14">
    <p className="text-sm text-gray-500 font-medium mb-1 uppercase">
      {course.name}
    </p>
    <h2 className="text-lg font-bold text-gray-800 mb-2">{course.desc}</h2>

    <div className="flex items-center gap-2 text-yellow-500 text-sm mb-4">
      
      <span className="text-gray-700 font-medium">{course.review}</span>
      <span className="text-gray-400">({course.reviews})</span>
    </div>


    <div className="flex relative top-[30px] justify-between text-sm h-[50px] text-gray-600 font-medium border-t ">
      <div className="flex items-center justify-center gap-2 w-1/2 border-gray-400 md:border-r md:border-gray-300">
        <FaBookOpen />
        <span>{course.lessons}</span>
      </div>
      <div className="flex items-center justify-center gap-2 w-1/2 p-3">
        <FaUser />
        <span>{course.enroll}</span>
      </div>
    </div>
  </div>

  {/* Hover Button */}
<div className="
  absolute w-[80%] h-14 bottom-3 left-1/2 -translate-x-1/2 
  transition-all duration-300
  opacity-100 translate-y-0
  sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:translate-y-0
  md:opacity-100 md:group-hover:opacity-100
  md:left-[160px]
  lg:opacity-0 lg:group-hover:opacity-100
  lg:left-[138px] lg:top-[383px]
  xl:left-[170px] xl:top-[380px]
  2xl:top-[380px] 2xl:left-[175px]
">
  <button className="bg-[#ffb606] w-[20rem] h-[50px] text-white px-5 py-2 rounded shadow-lg transition mobileS:w-[15rem] mobileM:w-[18rem] absolute mobileM:-left-2 mobileL:w-[20rem]
  md:left-1 lg:w-[18rem] lg:h-[57px] xl:w-[23rem] xl:h-[60px] 2xl:w-[23rem]">
    Course Details
  </button>
</div>

</motion.div>

        ))}
      </div>

      {/* Bottom Banner */}
      <div className="mt-10 md:invisible w-full max-w-xl mx-auto bg-[#0f252a] rounded  px-4 py-4 text-white text-center text-sm sm:text-base">
        <p>
          We assist you in finding the ideal tutor at no<br className=""/> cost.
          <a href="#" className="underline ml-1">
            Browse all available courses
          </a>
        </p>
      </div>
    </div>
  );
}

