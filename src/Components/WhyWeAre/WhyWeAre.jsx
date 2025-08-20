import React from "react";
import { FaBookOpen , FaPiggyBank, FaGraduationCap, FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";
export default function WhyWeAre() {
  const features = [
    {
      icon: <FaBookOpen  size={40} />,
      title: "Learn anything",
      desc: "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    },
    {
      icon: <FaPiggyBank size={40} />,
      title: "Save money",
      desc: "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    },
    {
      icon: <FaGraduationCap size={40} />,
      title: "Flexible courses",
      desc: "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    },
    {
      icon: <FaCertificate size={40} />,
      title: "Unlimited certificate",
      desc: "Lorem ipsum dolor sit amet conse non quis id viverra id proin.",
    },
  ];

  return (
    <>
    <section className="bg-white py-12 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-gray-500 text-sm font-semibold tracking-wide uppercase mb-2">
          Why We Are
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Elevate your professional journey
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus.
          Vitae diam dolor lacus amet integer ut.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center px-4">
            <div className="text-gray-800 mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA Section with motion */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-yellow-500 w-full max-w-7xl mx-auto relative top-10 mt-16 rounded-lg px-4 sm:px-6 lg:px-10 py-6 flex flex-col gap-4 sm:gap-6 md:flex-row justify-between items-center text-center md:text-left
          xl:h-[10rem] xl:top-10 xl:w-[90%] md:w-[90%] 2xl:m-auto 2xl:w-[50%] "
      >
        <div className="md:w-1/2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
            Are you ready to start
            <br className="hidden sm:block" /> your journey?
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800 transition w-full sm:w-auto"
          >
            Browse Courses
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white font-semibold text-white px-6 py-2 rounded hover:bg-yellow-600 transition w-full sm:w-auto"
          >
            Become A Teacher
          </motion.button>
        </div>
      </motion.div>
    
        </>
  );
}
