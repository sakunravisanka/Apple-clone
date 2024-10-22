import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-left p-4">
      {/* Left Grid */}
      <motion.div
        className="flex flex-col justify-end items-start h-96 w-full md:w-1/2 bg-cover bg-center p-6"
        style={{ backgroundImage: "url('src/assets/grids/3.jpg')" }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-black">iPad Mini</h1>
        <p className="text-x text-black mt-2">Hello, Apple Intelligence</p>
        <p className="text-x text-black mt-2">Available starting 10.23</p>
        <div className="mt-4 flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition rounded-full">
            Learn More
          </button>
          <button className="border-2 border-blue-500 hover:bg-blue-600 text-blue-500 py-2 px-8 rounded-full hover:text-white transition">
            Pre-order
          </button>
        </div>
      </motion.div>

      {/* Right Grid */}
      <motion.div
        className="flex flex-col justify-end items-start h-96 w-full md:w-1/2 bg-cover bg-center p-6"
        style={{ backgroundImage: "url('src/assets/grids/4.png')" }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white">WATCH</h1>
        <p className="text-xl text-orange-600 mt-2">ULTRA 2</p>
        <p className="text-xl text-white mt-2">
          Take a Hearing Test. Right at home.
        </p>
        <div className="mt-4 flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition rounded-full">
            Learn More
          </button>
          <button className="border-2 border-blue-500 hover:bg-blue-600 text-blue-500 py-2 px-4 rounded-full hover:text-white transition">
            Buy
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
