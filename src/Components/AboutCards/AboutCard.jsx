import React from 'react';

export default function AboutCard() {
  const data = [
    {
      number: "01",
      title: "Flexibility and convenience",
      des: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."
    },
    {
      number: "02",
      title: "Course accessibility",
      des: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."
    },
    {
      number: "03",
      title: "Personalized learning",
      des: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."
    },
    {
      number: "04",
      title: "Career advancement",
      des: "Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque risus."
    }
  ];

  return (
    <div className="w-full py-10 md:py-20 bg-gray-50">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-sm sm:text-base md:text-lg font-semibold text-blue-700 uppercase tracking-wider">Why we are</h1>
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-4 text-gray-800 leading-snug">
          We believe in our good education and development system and we know how to work together to reach greater success.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 lg:px-8">
        {data.map((item, index) => (
          <div key={index} className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h1 className="text-blue-600 text-2xl sm:text-3xl font-bold">{item.number}</h1>
            <h2 className="mt-2 sm:mt-4 text-lg sm:text-xl font-semibold text-gray-800">{item.title}</h2>
            <p className="text-gray-600 mt-2 sm:mt-4 text-xs sm:text-sm">{item.des}</p>
            <button className="mt-4 sm:mt-6 bg-[#06282c] text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-[#094047] transition-colors duration-300 text-sm sm:text-base">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}