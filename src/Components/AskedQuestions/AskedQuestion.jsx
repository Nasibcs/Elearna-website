import {useState} from "react"
import image from "./images/image.svg";
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
        {/* Left Image */}
        <div>
          <img
            src={image}
            alt="FAQ Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Right FAQ content */}
        <div>
          <h5 className="text-sm font-semibold text-gray-600 uppercase mb-2">
            Contact Us
          </h5>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            Frequently asked <br /> questions
          </h2>

          {/* FAQs */}
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-t border-gray-300 py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold text-gray-800">
                  {faq}
                </p>
                <span className="text-xl text-gray-700">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-gray-600 mt-2 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat, eligendi!
                </p>
              )}
            </div>
          ))}

          <div className="border-t border-gray-300 mt-4" />
        </div>
      </div>
            <div className="bg-yellow-500 w-full max-w-[80rem] mx-auto relative top-32 mt-16 rounded h-44 flex flex-col md:flex-row justify-between items-center px-10 py-4 text-center md:text-left">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">
            Are you ready to start
            <br /> your journey?
          </h1>
        </div>
        <div className="flex gap-4">
          <button className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800 transition">
            Browse Courses
          </button>
          <button className="border-2 border-white font-semibold text-white px-6 py-2 rounded hover:bg-yellow-600 transition">
            Become A Teacher
          </button>
        </div>
      </div>
    </div>
  );
}

