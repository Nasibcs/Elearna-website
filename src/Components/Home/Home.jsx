import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="bg-[url('/public/image/background.webp')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center overflow-x-hidden max-w-[100vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-black/60 bg-opacity-60 w-full h-screen flex items-center">
        <div className="container mx-auto px-4 py-16 text-white text-center md:text-left break-words
         ">
          
          {/* Small heading */}
          <motion.h1
            className="font-bold text-base xs:text-lg sm:text-xl md:text-2xl text-balance"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            News and journals
          </motion.h1>

          {/* Main heading */}
          <motion.h1
            className="font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight text-balance"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Planning to transition{" "}
            <br className="hidden md:block" />
            to a new career?
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
}
