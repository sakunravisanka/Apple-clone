import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Container1 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY + window.innerHeight;
    const element = document.getElementById("container");
    if (element) {
      const { top, bottom } = element.getBoundingClientRect();
      // Check if the element is in the viewport
      if (top < offset && bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="container" className="relative w-full h-screen">
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
      <div className="flex flex-col items-center justify-center h-full relative z-10 text-center text-white px-4 md:px-8 mt-3">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 md:mb-24"
        >
          Hello, Apple Intelligence
        </motion.h1>

        {/* Responsive Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-10 sm:mt-64">
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full"
          >
            Learn More
          </motion.button>

          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="border-2 border-blue-500 hover:bg-blue-600 text-blue-500 hover:text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full"
          >
            Buy
          </motion.button>
        </div>

        {/* Additional Text */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="mt-4 text-sm sm:text-base lg:text-lg"
        >
          Apple Intelligence Coming This Fall
        </motion.div>
      </div>
    </div>
  );
};

export default Container1;
