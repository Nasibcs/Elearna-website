import { motion } from "framer-motion";

export default function AboutOne() {
  return (
    <div className="w-full min-h-screen bg-[#09292f] flex justify-center items-center px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        className="w-full max-w-3xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-white text-base sm:text-lg md:text-xl font-semibold uppercase tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          About us
        </motion.h1>

        <motion.h2
          className="mt-4 sm:mt-6 md:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          You're sincerely determined to grow
        </motion.h2>
      </motion.div>
    </div>
  );
}
