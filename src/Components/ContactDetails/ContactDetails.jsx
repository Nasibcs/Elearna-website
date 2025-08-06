import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { SlNotebook } from "react-icons/sl";
import { LuAlarmClock } from "react-icons/lu";
import { motion } from 'framer-motion';

export default function ContactDetails() {
  const info = [
    {
      icon: <IoHomeOutline size={30} />,
      title: "Area Location",
      lines: ["410 Sandtown, California", "94001, USA"],
    },
    {
      icon: <SlNotebook size={30} />,
      title: "Contact Details",
      lines: ["888-123-4567", "info@example.com"],
    },
    {
      icon: <LuAlarmClock size={30} />,
      title: "Opening Hours",
      lines: ["Monday - Friday", "10:30 a.m - 7:00 p.m"],
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {info.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center bg-white rounded-xl px-6 py-8 shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="text-green-700 mb-4">{item.icon}</div>
            <h2 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h2>
            {item.lines.map((line, i) => (
              <p key={i} className="text-sm text-gray-600">{line}</p>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
