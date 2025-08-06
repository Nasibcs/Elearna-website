import React from "react";
import st1 from "./images/st1.jpg";
import st2 from "./images/st2.jpg";
import st3 from "./images/st3.jpg";
import st4 from "./images/st4.jpg";
import {
  FaStar,
  FaPencilAlt,
  FaCalculator,
  FaLaptopCode,
  FaBullhorn,
} from "react-icons/fa";

export default function TrendingCourses() {
  const categories = [
    { title: "Creative Web Design", icon: FaPencilAlt, count: "8 Courses" },
    { title: "Finance Accounting", icon: FaCalculator, count: "10 Courses" },
    { title: "IT and Software", icon: FaLaptopCode, count: "5 Courses" },
    { title: "Marketing & Promotion", icon: FaBullhorn, count: "7 Courses" },
  ];

  const courses = [
    {
      name: "Management",
      image: st1,
      desc: "Crisis management and problem-solving strategies",
      review: "4.88",
      reviews: "210",
      lessons: "6 Lessons",
      enroll: "8k Enrolled",
      price: "free",
    },
    {
      name: "Design",
      image: st2,
      desc: "Advanced Photoshop techniques for designers",
      review: "5.00",
      reviews: "1.2k",
      lessons: "8 Lessons",
      enroll: "25k Enrolled",
      price: "$200",
    },
    {
      name: "Finance",
      image: st3,
      desc: "Operations management and process improvement",
      review: "5.00",
      reviews: "812",
      lessons: "12 Lessons",
      enroll: "28k Enrolled",
      price: "$140",
    },
    {
      name: "Coding",
      image: st4,
      desc: "Full-stack web development fundamentals",
      review: "4.92",
      reviews: "930",
      lessons: "10 Lessons",
      enroll: "18k Enrolled",
      price: "$320",
    },
  ];

  return (
    <div className="w-full flex flex-col p-4 md:p-8 bg-[#e5f3f8]">
      <div className="w-full text-center mb-8 md:mb-10">
        <h1 className="text-sm text-gray-600">TRENDING COURSES</h1>
        <p className="text-xl md:text-2xl font-bold mt-1">
          Explore our top programs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white w-full rounded shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-40 sm:h-52 object-cover"
              />
              <span className="w-12 h-12 sm:w-16 sm:h-16 flex justify-center items-center absolute top-2 right-2 sm:top-4 sm:right-4 bg-blue-600 text-white text-xs sm:text-base font-bold px-1 sm:px-3 py-1 rounded-full">
                {course.price}
              </span>
            </div>

            <div className="p-4 sm:p-5">
              <p className="text-xs sm:text-sm text-gray-500 font-medium mb-1 uppercase">
                {course.name}
              </p>
              <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                {course.desc}
              </h2>
              <div className="flex items-center gap-1 sm:gap-2 text-yellow-500 text-xs sm:text-sm">
                <FaStar className="text-xs sm:text-sm" />
                <span className="text-gray-700 font-medium">
                  {course.review}
                </span>
                <span className="text-gray-400">({course.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-2xl mx-auto mt-10 sm:mt-14 text-center px-4">
        <h1 className="text-sm text-gray-600">Why we are</h1>
        <p className="font-bold text-lg sm:text-xl mt-2 sm:mt-3">
          Elevate your professional journey
        </p>
        <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-4">
          Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
          mus. Vitae diam dolor lacus amet integer ut.
        </p>
      </div>

      <div className="min-h-[30vh] flex flex-col items-center justify-center mt-10 sm:mt-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-[80rem]">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="w-full h-40 sm:h-56 flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:shadow-[#d6c49e] rounded-xl p-4 sm:p-6 bg-white transition-all duration-300"
              >
                <div className="text-2xl sm:text-4xl mb-2 sm:mb-4 text-[#d6c49e]">
                  <Icon />
                </div>
                <h1 className="font-semibold text-xs sm:text-sm text-center">
                  {item.title}
                </h1>
                <h2 className="mt-1 sm:mt-2 text-gray-500 text-xs">
                  {item.count}
                </h2>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-yellow-500 w-full max-w-[80rem] mx-auto relative top-16 sm:top-24 md:top-32 mt-10 sm:mt-16 rounded h-auto sm:h-44 flex flex-col md:flex-row justify-between items-center px-6 sm:px-10 py-6 sm:py-4 text-center md:text-left">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-xl sm:text-2xl font-bold">
            Are you ready to start
            <br /> your journey?
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto justify-center">
          <button className="bg-black text-white px-4 sm:px-6 py-2 rounded shadow hover:bg-gray-800 transition text-sm sm:text-base">
            Browse Courses
          </button>
          <button className="border-2 border-white font-semibold text-white px-4 sm:px-6 py-2 rounded hover:bg-yellow-600 transition text-sm sm:text-base">
            Become A Teacher
          </button>
        </div>
      </div>
    </div>
  );
}