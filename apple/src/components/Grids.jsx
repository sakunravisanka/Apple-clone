import React from "react";
import { motion } from "framer-motion";

const Grids = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4">
      {/* Left Grid */}
      <motion.div
        className="flex flex-col justify-end items-center h-96 w-full md:w-1/2 bg-cover bg-center p-6"
        style={{ backgroundImage: "url('src/assets/grids/1.jpg')" }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white text-center">AirPods 4</h1>
        <p className="text-xl text-white mt-2 text-center">
          Iconic. Now supersonic.
        </p>
        <div className="mt-4 flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
            Learn More
          </button>
          <button className="border-2 border-blue-500 hover:bg-blue-600 text-blue-500 py-2 px-4 rounded-full hover:text-white transition">
            Buy
          </button>
        </div>
      </motion.div>

      {/* Right Grid */}
      <motion.div
        className="flex flex-col justify-end items-center h-96 w-full md:w-1/2 bg-cover bg-center p-6"
        style={{ backgroundImage: "url('src/assets/grids/2.jpg')" }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-white text-center">
          AirPods Pro 2
        </h1>
        <p className="text-xl text-white mt-2 text-center">
          Take a Hearing Test. Right at home.
        </p>
        <div className="mt-4 flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
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

export default Grids;
