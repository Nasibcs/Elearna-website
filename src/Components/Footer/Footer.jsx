import React from "react";
import logo from "./image/logo.svg";

export default function Footer() {
  return (
    <div className="w-full bg-gray-800 text-white">
      {/* Top Footer */}
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row flex-wrap gap-10 justify-between">
        {/* Logo + Description */}
        <div className="w-full sm:w-1/2 lg:w-1/5">
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="Logo" className="w-32 h-8" />
          </div>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras.
          </p>
        </div>

        {/* Popular Courses */}
        <div className="w-full sm:w-1/2 lg:w-1/5">
          <h1 className="text-lg font-bold mb-2">Popular Courses</h1>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>Finance</li>
            <li>Management</li>
            <li>Design</li>
            <li>Web Development</li>
          </ul>
        </div>

        {/* Company */}
        <div className="w-full sm:w-1/2 lg:w-1/5">
          <h1 className="text-lg font-bold mb-2">Company</h1>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>About</li>
            <li>Courses</li>
            <li>Blogs</li>
            <li>Contact</li>
            <li>License</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* CMS */}
        <div className="w-full sm:w-1/2 lg:w-1/5">
          <h1 className="text-lg font-bold mb-2">CMS</h1>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>Course Details</li>
            <li>Instructor Details</li>
            <li>Blog Details</li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="w-full sm:w-1/2 lg:w-1/5">
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
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 text-gray-400 text-sm py-4 px-4 flex flex-col sm:flex-row justify-between items-center">
        <p>Design by <span className="text-white font-medium">Nasib Burhan</span></p>
        <p>Powered by <span className="text-white font-medium">Nasib Burhan</span></p>
      </div>
    </div>
  );
}
