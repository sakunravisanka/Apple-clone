import React from "react";
import { motion } from "framer-motion";

const Container1 = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="src/assets/container1/16.png" // Replace with your actual image path
          alt="Hero Background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content Centered on Background */}
      <div className="flex flex-col items-center justify-center h-full relative z-10 text-center text-white mt-3">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-2xl font-bold mb-24"
        >
          Hello, Apple Intelligence
        </motion.h1>

        <div className="flex space-x-4 mt-64">
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full" // Changed rounded to rounded-full for an elliptical shape
          >
            Learn More
          </motion.button>

          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="border-2 border-blue-500 hover:bg-blue-600 text-blue-500 py-2 px-4 rounded-full hover:text-white"
          >
            Buy
          </motion.button>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-base " // Changed from text-lg to text-base
        >
          Apple Intelligence Coming This Fall
        </motion.div>
      </div>
    </div>
  );
};

export default Container1;
