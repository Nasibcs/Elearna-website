import { coursesData } from "./coursesdata";

export default function CoursesCards() {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {coursesData.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <p className="text-sm font-semibold text-gray-500 uppercase mb-1">
                {course.category}
              </p>
              <h2 className="text-lg font-bold text-gray-800">{course.title}</h2>
              <p className="text-gray-400 text-sm mt-2">{course.date}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Optional pagination section */}
      <div className="text-center mt-8 text-sm text-gray-500">1 / 2 &nbsp; <span className="underline cursor-pointer">Next ➜</span></div>
    </div>
  );
}
