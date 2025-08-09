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
      review: "4.88",
      reviews: "210",
      lessons: "6 Lessons",
      enroll: "8k Enrolled",
    },
    {
      price:"$200",
      name: "Management",
      image: one,
      desc: "Crisis management and problem-solving strategies",
      review: "4.88",
      reviews: "210",
      lessons: "6 Lessons",
      enroll: "8k Enrolled",
    },
    {
      name: "Design",
      image: tow,
      desc: "Advanced Photoshop techniques for designers",
      review: "5.00",
      reviews: "1.2k",
      lessons: "8 Lessons",
      enroll: "25k Enrolled",
       price:"$220",
    },
    {
      name: "Finance",
      image: three,
      desc: "Operations management and process improvement",
      review: "5.00",
      reviews: "812",
      lessons: "12 Lessons",
      enroll: "28k Enrolled",
       price:"$120",
    },
    {
      name: "Development",
      image: four,
      desc: "Database integration with MongoDB and SQL Databases",
      review: "5.20",
      reviews: "12",
      lessons: "12 Lessons",
      enroll: "18k Enrolled",
       price:"$300",
    },
    {
      name: "Management",
      image: five,
      desc: "Risk management and business continuity",
      review: "3.20",
      reviews: "130",
      lessons: "15 Lessons",
      enroll: "10k Enrolled",
       price:"$310",
    },
    {
      name: "Development",
      image: six,
      desc: "Full-stack development with the MERN stack",
      review: "3.20",
      reviews: "2.1k",
      lessons: "15 Lessons",
      enroll: "10k Enrolled",
       price:"$110",
    },
        {
      name: "Design",
      image: tow,
      desc: "Advanced Photoshop techniques for designers",
      review: "5.00",
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
      review: "4.88",
      reviews: "210",
      lessons: "6 Lessons",
      enroll: "8k Enrolled",
    },
  ];

  
  return (
    <div className="w-full min-h-screen px-4 sm:px-6 lg:px-12 py-10 bg-[#e5f7f9]">
      {/* Top Section */}
      <div className="mb-10">
        <h1 className="text-2xl font-light mb-2">Online Learning</h1>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h2 className="text-3xl font-bold mb-4 lg:mb-0">Top Online Courses</h2>
          <ul className="flex flex-wrap gap-4 text-sm sm:text-base font-semibold text-gray-500">
            <li className="cursor-pointer hover:text-black">All Courses</li>
            <li className="cursor-pointer hover:text-black">Design</li>
            <li className="cursor-pointer hover:text-black">Development</li>
            <li className="cursor-pointer hover:text-black">Management</li>
            <li className="cursor-pointer hover:text-black">Finance</li>
          </ul>
        </div>
      </div>

      {/* Course Cards with motion */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {CoursesData.map((course, index) => (
<motion.div
  key={index}
  className="group bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-xl transition-all duration-300 relative"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1, duration: 0.5 }}
  whileHover={{ scale: 1.05 }}
>
  <div className="relative">
    <img
      src={course.image}
      alt={course.name}
      className="w-full h-52 object-cover"
    />
    <span className="absolute top-44 right-4 w-16 h-16 flex justify-center items-center font-bold text-xl bg-blue-600 text-white px-3 py-1 rounded-full">
      {course.price}
    </span>
  </div>

  <div className="p-5 pb-14"> {/* extra padding at bottom for button space */}
    <p className="text-sm text-gray-500 font-medium mb-1 uppercase">
      {course.name}
    </p>
    <h2 className="text-lg font-bold text-gray-800 mb-2">{course.desc}</h2>

    <div className="flex items-center gap-2 text-yellow-500 text-sm mb-4">
      <FaStar />
      <span className="text-gray-700 font-medium">{course.review}</span>
      <span className="text-gray-400">({course.reviews})</span>
    </div>

    <hr className="my-3" />

    <div className="flex justify-between text-sm text-gray-600 font-medium mt-6">
      <div className="flex items-center gap-2">
        <FaBookOpen />
        <span>{course.lessons}</span>
      </div>
      <div className="flex items-center gap-2">
        <FaUser />
        <span>{course.enroll}</span>
      </div>
    </div>
  </div>

  {/* Hover Button */}
  <div className="absolute w-full h-14 bottom-9 left-1/2 -translate-x-1/2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
    <button className="bg-yellow-400 w-full h-full text-white px-5 py-2 rounded shadow-lg hover:bg-yellow-500 transition">
      Course Detiles
    </button>
  </div>
</motion.div>

        ))}
      </div>

      {/* Bottom Banner */}
      <div className="mt-10 md:invisible w-full max-w-xl mx-auto bg-[#0c463c] rounded-full px-4 py-3 text-white text-center text-sm sm:text-base">
        <p>
          We assist you in finding the ideal tutor at no cost.
          <a href="#" className="underline ml-1">
            Browse all available courses
          </a>
        </p>
      </div>
    </div>
  );
}

