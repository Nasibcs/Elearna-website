import { useState } from "react";
import image from "./images/image.svg";
import { motion, AnimatePresence } from "framer-motion";

export default function AskedQuestion() {
  const faqs = [
    "How do I enroll in an online course?",
    "Are there any prerequisites for enrolling in online courses?",
    "What are the technical requirements for online learning?",
    "What if I encounter technical difficulties?",
    "Are there live classes, or can I learn at my own pace?",
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-[#f4f9fc] to-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Image with fade animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={image}
            alt="FAQ Illustration"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>

        {/* Right FAQ content with slide-in */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h5 className="text-sm font-semibold text-gray-600 uppercase mb-2">
            Contact Us
          </h5>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            Frequently asked <br /> questions
          </h2>

          {/* FAQs with animated toggle */}
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-t border-gray-300 py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold text-gray-800">{faq}</p>
                <span className="text-xl text-gray-700">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 mt-2 text-sm overflow-hidden"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat, eligendi!
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}

          <div className="border-t border-gray-300 mt-4" />
        </motion.div>
      </div>

      {/* CTA Section with motion */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-yellow-500 w-full max-w-7xl mx-auto relative top-24 mt-16 rounded-lg px-4 sm:px-6 lg:px-10 py-6 flex flex-col gap-4 sm:gap-6 md:flex-row justify-between items-center text-center md:text-left"
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
    </div>
  );
}
