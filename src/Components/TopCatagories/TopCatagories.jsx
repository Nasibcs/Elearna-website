import React from "react";
import {
  FaPencilAlt,
  FaCalculator,
  FaLaptopCode,
  FaBullhorn,
  FaCode,
  FaPenFancy,
} from "react-icons/fa";

export default function TopCatagories() {
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
    <div className="flex flex-col w-full py-10 px-4 bg-white">
      {/* Header */}
      <div className="flex justify-center items-center flex-col text-center mb-10">
        <h1 className="text-lg sm:text-xl font-mono mb-2">Top Categories</h1>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Discover leading categories to
          <br className="hidden sm:block" /> elevate your journey
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 justify-items-center">
        {CoursesData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="w-44 h-56 flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:shadow-[#cdefef] rounded-xl p-4 transition-all duration-300 bg-white"
            >
              <div className="text-4xl mb-4">
                <Icon />
              </div>
              <h1 className="font-semibold text-sm text-center">{item.title}</h1>
              <h2 className="mt-2 text-gray-400 text-xs">{item.count}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
