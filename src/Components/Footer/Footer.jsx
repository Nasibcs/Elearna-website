import React from "react";
import logo from "./image/logo.svg";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
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
        {/* Logo + Description */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="w-full sm:w-1/2 lg:w-1/5"
        >
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="Logo" className="w-32 h-8" />
          </div>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras.
          </p>
        </motion.div>

        {/* Popular Courses */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="w-full sm:w-1/2 lg:w-1/5"
        >
          <h1 className="text-lg font-bold mb-2">Popular Courses</h1>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>Finance</li>
            <li>Management</li>
            <li>Design</li>
            <li>Web Development</li>
          </ul>
        </motion.div>

        {/* Company */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="w-full sm:w-1/2 lg:w-1/5"
        >
          <h1 className="text-lg font-bold mb-2">Company</h1>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>About</li>
            <li>Courses</li>
            <li>Blogs</li>
            <li>Contact</li>
            <li>License</li>
            <li>Pricing</li>
          </ul>
        </motion.div>

        {/* CMS */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="w-full sm:w-1/2 lg:w-1/5"
        >
          <h1 className="text-lg font-bold mb-2">CMS</h1>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>Course Details</li>
            <li>Instructor Details</li>
            <li>Blog Details</li>
          </ul>
        </motion.div>

        {/* Help Section */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="w-full sm:w-1/2 lg:w-1/5"
        >
          <h1 className="text-lg font-bold mb-2">Need Help?</h1>
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
        </motion.div>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="border-t border-gray-700 text-gray-400 text-sm py-4 px-4 flex flex-col sm:flex-row justify-between items-center"
      >
        <p>Design by <span className="text-white font-medium">Nasib Burhan</span></p>
        <p>Powered by <span className="text-white font-medium">Nasib Burhan</span></p>
      </motion.div>
    </motion.div>
  );
}
