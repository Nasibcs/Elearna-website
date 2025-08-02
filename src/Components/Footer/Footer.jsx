import React from "react";
import logo from "./image/logo.svg";
export default function Footer() {
  return (
    <div className="w-full h-screen bg-gray-800 flex flex-col justify-between">
      <div className="h-80 w-full flex justify-between items-center p-3 mt-32 ">
        <div className=" w-56 h-44">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-32 h-8" />
          </div>
          <p className="text-gray-500 mt-6">
            Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis
            eget amet ut tristique cras.
          </p>
        </div>
        <div className="text-xl w-48">
          <h1 className="text-white font-bold">Popular courses</h1>
          <ul className="text-gray-500 m-3">
            <li>Finance</li>
            <li>Management</li>
            <li>Design</li>
            <li>Web development</li>
          </ul>
        </div>
        <div className=" text-xl w-36">
          <h1 className="text-white font-bold">Company</h1>
          <ul className="text-gray-500 m-3">
            <li>About</li>
            <li>courses</li>
            <li>Blogs</li>
            <li>contact</li>
            <li>License</li>
            <li>pricing</li>
          </ul>
        </div>
        <div className="text-xl w-48">
          <h1 className="text-white font-bold">CMS</h1>
          <ul className="text-gray-500 m-3">
            <li>Course details</li>
            <li>Instructor details</li>
            <li>Blog details</li>
          </ul>
        </div>
        <div className="w-40">
          <h1 className="text-white font-bold">Need help?</h1>
          <ul className="text-gray-500 m-3">
            <li>
              Call us <br />
              <span className="text-white font-bold">(888) 123 4567</span>
            </li>
            <li>
              Need support? <br />
              <span className="text-white font-bold">info@example.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full border-t flex items-center p-2 justify-between">
        <h1 className="text-gray-500">
          Design by <span className="text-white">Nasib Burhan</span>
        </h1>
        <h1 className="text-gray-500">
          Powered by <span className="text-white">Nasib Burhan</span>
        </h1>
      </div>
    </div>
  );
}
