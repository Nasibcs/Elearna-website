import { motion } from "framer-motion";

export default function Instructor() {
  return (
    <div className="bg-bannerImg bg-repeat bg-cover bg-center min-h-[300px] flex items-center justify-center">
      <div className="bg-black bg-opacity-60 w-full flex items-center min-h-[300px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto text-white px-4 py-8 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bold text-2xl sm:text-3xl md:text-4xl font-mono text-center md:text-left leading-snug"
          >
            Are you ready to start <br className="hidden sm:block" /> your journey?
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border-2 rounded font-mono px-4 py-2 text-base sm:text-lg"
            >
              Browse Courses
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 rounded font-mono text-base sm:text-lg bg-yellow-500 text-black"
            >
              Become An Instructor
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
