import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="src/assets/16-pro.jpg" // Replace with your actual image path
          alt="Hero Background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content Centered on Background */}
      <div className="flex flex-col items-center justify-center h-full relative z-10 text-center text-white px-4 md:px-8">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          iPhone 16 Pro
        </motion.h1>
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
        >
          Hello, Apple Intelligence
        </motion.h2>

        {/* Responsive Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 mt-10 sm:mt-64 space-y-4 sm:space-y-0">
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full"
          >
            Learn More
          </motion.button>

          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="border-2 border-blue-500 hover:bg-blue-600 text-blue-500 hover:text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full"
          >
            Buy
          </motion.button>
        </div>

        {/* Additional Text */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-4 text-sm sm:text-base lg:text-lg"
        >
          Apple Intelligence Coming This Fall
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
