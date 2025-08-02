import React from "react";
import placeholderImage from "./images/manager.jpg";
import {
  FaStar,
  FaPencilAlt,
  FaCalculator,
  FaLaptopCode,
  FaBullhorn,
  FaCode,
  FaPenFancy,
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
      image: placeholderImage,
      desc: "Crisis management and problem-solving strategies",
      review: "4.88",
      reviews: "210",
      lessons: "6 Lessons",
      enroll: "8k Enrolled",
    },
    {
      name: "Design",
      image: placeholderImage,
      desc: "Advanced Photoshop techniques for designers",
      review: "5.00",
      reviews: "1.2k",
      lessons: "8 Lessons",
      enroll: "25k Enrolled",
    },
    {
      name: "Finance",
      image: placeholderImage,
      desc: "Operations management and process improvement",
      review: "5.00",
      reviews: "812",
      lessons: "12 Lessons",
      enroll: "28k Enrolled",
    },
    {
      name: "Coding",
      image: placeholderImage,
      desc: "Full-stack web development fundamentals",
      review: "4.92",
      reviews: "930",
      lessons: "10 Lessons",
      enroll: "18k Enrolled",
    },
  ];

  return (
    <div className="w-full flex flex-col p-4 bg-[#e5f3f8]">
      {/* Header Section */}
      <div className="w-full text-center mb-10">
        <h1 className="text-sm text-gray-600">TRENDING COURSES</h1>
        <p className="text-2xl font-bold">Explore our top programs</p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white w-full rounded shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-52 object-cover"
              />
              <span className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                Free
              </span>
            </div>

            <div className="p-5">
              <p className="text-sm text-gray-500 font-medium mb-1 uppercase">
                {course.name}
              </p>
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {course.desc}
              </h2>
              <div className="flex items-center gap-2 text-yellow-500 text-sm">
                <FaStar />
                <span className="text-gray-700 font-medium">
                  {course.review}
                </span>
                <span className="text-gray-400">({course.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Why Section */}
      <div className="w-full max-w-2xl mx-auto mt-14 text-center">
        <h1 className="text-sm text-gray-600">Why we are</h1>
        <p className="font-bold text-xl mt-3">
          Elevate your professional journey
        </p>
        <p className="text-sm text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
          mus. Vitae diam dolor lacus amet integer ut.
        </p>
      </div>

      {/* Category Icons Grid */}
      <div className="min-h-[30vh] flex flex-col items-center justify-center mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-[80rem]">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="w-full h-56 flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:shadow-[#d6c49e] rounded-xl p-6 bg-white transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-[#d6c49e]">
                  <Icon />
                </div>
                <h1 className="font-semibold text-sm text-center">
                  {item.title}
                </h1>
                <h2 className="mt-2 text-gray-500 text-xs">{item.count}</h2>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-500 w-full max-w-[80rem] mx-auto relative top-32 mt-16 rounded h-44 flex flex-col md:flex-row justify-between items-center px-10 py-4 text-center md:text-left">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">
            Are you ready to start
            <br /> your journey?
          </h1>
        </div>
        <div className="flex gap-4">
          <button className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800 transition">
            Browse Courses
          </button>
          <button className="border-2 border-white font-semibold text-white px-6 py-2 rounded hover:bg-yellow-600 transition">
            Become A Teacher
          </button>
        </div>
      </div>
    </div>
  );
}
