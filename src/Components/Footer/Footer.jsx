import React from "react";
import logo from "./image/logo.svg";
import { motion } from "framer-motion";

const hoverScale = { whileHover: { scale: 1.02 } };

const footerSections = [
  {
    title: null,
    content: (
      <>
        <div className="flex items-center space-x-2 mb-4">
          <img src={logo} alt="Logo" className="w-32 h-8" />
        </div>
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras.
        </p>
      </>
    ),
  },
  {
    title: "Popular Courses",
    items: ["Finance", "Management", "Design", "Web Development"],
  },
  {
    title: "Company",
    items: ["About", "Courses", "Blogs", "Contact", "License", "Pricing"],
  },
  {
    title: "CMS",
    items: ["Course Details", "Instructor Details", "Blog Details"],
  },
  {
    title: "Need Help?",
    content: (
      <ul className="text-gray-400 text-sm space-y-3">
        <li>
          Call us <br />
          <span className="text-white font-semibold">+93795582109</span>
        </li>
        <li>
          Need support? <br />
          <span className="text-white font-semibold">nasibburhan4@gmail.com</span>
        </li>
      </ul>
    ),
  },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full bg-gray-800 text-white"
    >
      {/* Top Footer */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-12 flex flex-col lg:flex-row flex-wrap gap-10 justify-between"
      >
        {footerSections.map((section, idx) => (
          <motion.div
            key={idx}
            {...hoverScale}
            className="w-full sm:w-1/2 lg:w-1/5"
          >
            {section.title && (
              <h1 className="text-lg font-bold mb-2">{section.title}</h1>
            )}
            {section.items ? (
              <ul className="text-gray-400 text-sm space-y-1">
                {section.items.map((item, i) => (
                  <li key={i} className="hover:text-yellow-400 cursor-pointer">{item}</li>
                ))}
              </ul>
            ) : (
              section.content
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="border-t border-gray-700 text-gray-400 text-sm py-4 px-4 flex flex-col sm:flex-row justify-between items-center"
      >
        <p>
          Design by <span className="text-white font-medium">Nasib Burhan</span>
        </p>
        <p>
          Powered by <span className="text-white font-medium">Nasib Burhan</span>
        </p>
      </motion.div>
    </motion.footer>
  );
}
