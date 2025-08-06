import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="bg-bannerImg bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-blackOverlay bg-opacity-60 w-full h-screen flex items-center">
        <div className="container mx-auto px-4 py-16 text-white text-center md:text-left">
          <motion.h1
            className="font-bold text-lg sm:text-xl md:text-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            News and journals
          </motion.h1>

          <motion.h1
            className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Planning to transition <br className="hidden md:block" />
            to a new career?
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
}
