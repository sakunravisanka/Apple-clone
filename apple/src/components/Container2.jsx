import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Container2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY + window.innerHeight;
    const element = document.getElementById("container2");
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
    <div id="container2" className="bg-white relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="src/assets/container1/watch.png" // Replace with your actual image path
          alt="Hero Background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content Centered on Background */}
      <div className="flex flex-col items-center justify-center h-full relative z-10 text-center text-white px-4 sm:px-8 mt-3">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-32 sm:mt-40 lg:mt-64"
        >
          Apple WATCH <br />
          SERIES 10 <br />
          The Instant Classic
        </motion.h1>

        {/* Responsive Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-4">
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 sm:py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base"
          >
            Learn More
          </motion.button>

          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="border-2 border-blue-500 hover:bg-blue-600 text-blue-500 hover:text-white py-1 sm:py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base"
          >
            Buy
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Container2;
