import React from 'react';
import { motion } from 'framer-motion';

export default function ContactOne() {
  return (
    <div className="bg-[url('/public/image/contactbg.webp')] bg-repeat bg-cover bg-center flex items-center justify-center overflow-hidden">
      <div className="bg-black/60 flex min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] items-end w-full">
        <div className="container text-white px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28 md:mb-36">
          <motion.h1
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Contact US
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
