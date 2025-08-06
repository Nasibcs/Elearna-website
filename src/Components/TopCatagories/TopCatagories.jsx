import React from "react";
import {
  FaPencilAlt,
  FaCalculator,
  FaLaptopCode,
  FaBullhorn,
  FaCode,
  FaPenFancy,
} from "react-icons/fa";

export default function TopCategories() {
  const CoursesData = [
    {
      title: "Creative Web Design",
      icon: FaPencilAlt,
      count: "8 Courses",
    },
    {
      title: "Finance Accounting",
      icon: FaCalculator,
      count: "10 Courses",
    },
    {
      title: "IT and Software",
      icon: FaLaptopCode,
      count: "5 Courses",
    },
    {
      title: "Digital Marketing",
      icon: FaBullhorn,
      count: "4 Courses",
    },
    {
      title: "Web Development",
      icon: FaCode,
      count: "8 Courses",
    },
    {
      title: "Content Writing",
      icon: FaPenFancy,
      count: "8 Courses",
    },
  ];

  return (
    <div className="flex flex-col w-full py-10 px-4 md:px-8 lg:px-20 bg-white">
      {/* Header */}
      <div className="flex justify-center items-center flex-col text-center mb-10">
        <h1 className="text-base sm:text-lg font-mono text-blue-500 mb-2">Top Categories</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
          Discover leading categories to
          <br className="hidden sm:block" /> elevate your journey
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {CoursesData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="w-full sm:w-auto h-52 flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:shadow-[#cdefef] rounded-xl p-4 transition-all duration-300 bg-white"
            >
              <div className="text-4xl mb-3 text-blue-500">
                <Icon />
              </div>
              <h1 className="font-semibold text-center text-sm sm:text-base text-gray-800">
                {item.title}
              </h1>
              <h2 className="mt-1 text-gray-400 text-xs">{item.count}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
