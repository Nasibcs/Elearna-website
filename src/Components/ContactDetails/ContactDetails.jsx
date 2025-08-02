import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { SlNotebook } from "react-icons/sl";
import { LuAlarmClock } from "react-icons/lu";

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
    <div className="w-full px-6 py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {info.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="text-green-700 mb-4">{item.icon}</div>
            <h2 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h2>
            {item.lines.map((line, i) => (
              <p key={i} className="text-sm text-gray-600">{line}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
