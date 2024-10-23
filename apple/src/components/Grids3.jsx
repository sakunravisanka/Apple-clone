import React from "react";
import { motion } from "framer-motion";

const Grids3 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-left p-4">
      {/* Left Grid */}
      <motion.div
        className="flex flex-col justify-end items-center h-96 w-full md:w-1/2 bg-cover bg-center p-6"
        style={{ backgroundImage: "url('src/assets/grids/5.png')" }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-black">Trade In</h1>
        <p className="text-x text-black mt-2">
          Get $180 - $650 when you trade in an iPhone 12 or higher
        </p>

        <div className="mt-4 flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition rounded-full">
            Get your estimate
          </button>
        </div>
      </motion.div>

      {/* Right Grid */}
      <motion.div
        className="flex flex-col justify-end items-center h-96 w-full md:w-1/2 bg-cover bg-center p-6"
        style={{ backgroundImage: "url('src/assets/grids/6.jpg')" }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-black">Card</h1>
        <p className="text-xl text-black mt-2">Get up to 3% Daily Cash Back</p>
        <p className="text-xl text-black mt-2">With every purchase</p>
        <div className="mt-4 flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition rounded-full">
            Learn More
          </button>
          <button className="border-2 border-blue-500 hover:bg-blue-600 text-blue-500 py-2 px-4 rounded-full hover:text-white transition">
            Apply now
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Grids3;
