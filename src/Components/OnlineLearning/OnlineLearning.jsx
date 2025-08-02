import { FaStar, FaBookOpen, FaUser } from "react-icons/fa";
import one from './images/one.webp';
import tow from "./images/tow.webp";
import three from "./images/three.webp";
import four from "./images/four.webp";
import five from "./images/five.webp";
import six from "./images/six.webp";

export default function OnlineLearning() {
  const CoursesData = [
    {
      name: "Management",
      image: one,
      desc: "Crisis management and problem-solving strategies",
      review: "4.88",
      reviews: "210",
      lessons: "6 Lessons",
      enroll: "8k Enrolled",
    },
    {
      name: "Design",
      image: tow,
      desc: "Advanced Photoshop techniques for designers",
      review: "5.00",
      reviews: "1.2k",
      lessons: "8 Lessons",
      enroll: "25k Enrolled",
    },
    {
      name: "Finance",
      image: three,
      desc: "Operations management and process improvement",
      review: "5.00",
      reviews: "812",
      lessons: "12 Lessons",
      enroll: "28k Enrolled",
    },
    {
      name: "Development",
      image: four,
      desc: "Database integration with MongoDB",
      review: "5.20",
      reviews: "12",
      lessons: "12 Lessons",
      enroll: "18k Enrolled",
    },
    {
      name: "Management",
      image: five,
      desc: "Risk management and business continuity",
      review: "3.20",
      reviews: "130",
      lessons: "15 Lessons",
      enroll: "10k Enrolled",
    },
    {
      name: "Development",
      image: six,
      desc: "Full-stack development with the MERN stack",
      review: "3.20",
      reviews: "2.1k",
      lessons: "15 Lessons",
      enroll: "10k Enrolled",
    },
  ];

  return (
    <div className="w-full min-h-screen px-4 py-8 bg-[#e5f7f9]">
      <div className="mb-10">
        <h1 className="text-2xl font-light mb-2">Online Learning</h1>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h2 className="text-3xl font-bold mb-4 lg:mb-0">Top Online Courses</h2>
          <ul className="flex flex-wrap gap-4 text-lg font-semibold text-gray-500">
            <li className="cursor-pointer hover:text-black">All Courses</li>
            <li className="cursor-pointer hover:text-black">Design</li>
            <li className="cursor-pointer hover:text-black">Development</li>
            <li className="cursor-pointer hover:text-black">Management</li>
            <li className="cursor-pointer hover:text-black">Finance</li>
          </ul>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {CoursesData.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-xl transition-all duration-300"
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-52 object-cover"
              />
              <span className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                Free
              </span>
            </div>

            <div className="p-5">
              <p className="text-sm text-gray-500 font-medium mb-1 uppercase">
                {course.name}
              </p>
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {course.desc}
              </h2>

              <div className="flex items-center gap-2 text-yellow-500 text-sm mb-4">
                <FaStar />
                <span className="text-gray-700 font-medium">
                  {course.review}
                </span>
                <span className="text-gray-400">({course.reviews})</span>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between text-sm text-gray-600 font-medium">
                <div className="flex items-center gap-2">
                  <FaBookOpen />
                  <span>{course.lessons}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUser />
                  <span>{course.enroll}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-2 text-sm text-white flex justify-center items-center font-light w-[600px] h-[50px] m-auto mt-6 bg-[#0c463c] rounded-full">
<h1>We assist you in finding the ideal tutor at no cost.<a href="#" className="underline"> Browse all available courses</a></h1>
      </div>
    </div>
  );
}
