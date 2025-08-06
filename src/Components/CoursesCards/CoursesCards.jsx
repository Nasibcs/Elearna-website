import { motion } from "framer-motion";
import { coursesData } from "./coursesdata";

export default function CoursesCards() {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {coursesData.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition duration-300"
          >
            <motion.img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-5">
              <p className="text-sm font-semibold text-gray-500 uppercase mb-1">
                {course.category}
              </p>
              <h2 className="text-lg font-bold text-gray-800">{course.title}</h2>
              <p className="text-gray-400 text-sm mt-2">{course.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        1 / 2 &nbsp;
        <motion.span
          whileHover={{ scale: 1.1 }}
          className="underline cursor-pointer"
        >
          Next ➜
        </motion.span>
      </div>
    </div>
  );
}
