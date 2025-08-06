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
    <div className="w-full py-12 md:py-20 bg-gray-50">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-sm sm:text-base md:text-lg font-semibold text-blue-700 uppercase tracking-widest">Why we are</h1>
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-4 text-gray-800 leading-snug">
          We believe in our good education and development system and we know how to work together to reach greater success.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10 sm:mt-14 md:mt-20 px-4 sm:px-6 lg:px-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col justify-between"
          >
            <div>
              <h1 className="text-blue-600 text-3xl font-bold">{item.number}</h1>
              <h2 className="mt-4 text-xl font-semibold text-gray-800">{item.title}</h2>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">{item.des}</p>
            </div>

            <button className="mt-6 bg-[#06282c] text-white px-4 py-2 rounded hover:bg-[#094047] transition-colors duration-300 text-sm sm:text-base self-start">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
