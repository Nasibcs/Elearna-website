import React from "react";
import { motion } from "framer-motion";

import st1 from "./images/st1.jpg";
import st2 from "./images/st2.jpg";
import st3 from "./images/st3.jpg";
import st4 from "./images/st4.jpg";
import st5 from "./images/st5.jpg";
import st6 from "./images/st6.jpg";
import st7 from "./images/st7.jpg";
import st8 from "./images/st8.jpg";
import st9 from "./images/st9.jpg";

const data = [
  {
    image: st1,
    title: "Master online learning with proven strategies",
    author: "Samantha Dick",
    date: "18.10.2024",
  },
  {
    image: st2,
    title: "The role of technology in modern classrooms",
    author: "Samantha Dick",
    date: "16.10.2024",
  },
  {
    image: st3,
    title: "How globalization is shaping curriculum development",
    author: "Edwin Waters",
    date: "12.10.2024",
  },
  {
    image: st4,
    title: "How to enhance your learning experience today",
    author: "Edwin Waters",
    date: "10.10.2024",
  },
  {
    image: st5,
    title: "The evolution of teaching tools in the 21st century",
    author: "Edward Braun",
    date: "07.10.2024",
  },
  {
    image: st6,
    title: "How personalized learning is changing education",
    author: "Gerald Henson",
    date: "04.10.2024",
  },
  {
    image: st7,
    title: "The role of parental involvement in academic achievement",
    author: "Jesse Johnson",
    date: "01.10.2024",
  },
  {
    image: st8,
    title: "Empowering teachers with student behavior data",
    author: "Nina Lefler",
    date: "30.09.2024",
  },
  {
    image: st2,
    title: "Empowering teachers with student behavior data",
    author: "Nina Lefler",
    date: "30.09.2024",
  },
];

export default function AboutTwoGalary() {
  return (
    <div className="w-full bg-white px-4 sm:px-6 md:px-10 py-10 border border-blue-200 rounded-xl shadow-md">
      <div className="flex flex-col lg:flex-row gap-10 justify-between">
        {/* Sticky Left Section */}
        <motion.div
          className="w-full lg:w-1/3 sticky top-10 self-start border border-gray-200 rounded-xl shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={st9} alt="Visual learning" className="w-full h-60 object-cover" />
          <div className="bg-white p-5">
            <p className="text-sm text-gray-500">12.10.2024 • Nina Lefler</p>
            <h2 className="text-xl font-bold mt-2 leading-tight">
              Improve knowledge retention with visual learning
            </h2>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat elementum elit. Cras mollis aliquam orci mauris sagittis
              fermentum eu diam vulputate.
            </p>
          </div>
        </motion.div>

        {/* Grid Section */}
        <div className="w-full lg:w-2/3 max-h-[100%] overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 custom-scrollbar-hidden">
            {data.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.12)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={item.image}
                  alt="thumbnail"
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <p className="text-xs text-gray-500">
                    {item.date} <span className="mx-1">•</span>
                    <span className="font-semibold uppercase">{item.author}</span>
                  </p>
                  <h3 className="text-sm font-semibold text-black mt-2 leading-snug hover:text-blue-600 transition duration-200">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
