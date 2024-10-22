import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
  {
    img: "src/assets/marquee/1.jpg",
    title: "Strength with Kim",
    service: "Fitness+",
  },
  {
    img: "src/assets/marquee/2.jpg",
    title: "Piano Chill",
    service: "Music",
  },
  {
    img: "src/assets/marquee/3.jpg",
    title: "Hello Kitty Island Adventure",
    service: "Arcade",
  },
  {
    img: "src/assets/marquee/4.jpg",
    title: "Calm Meditation",
    service: "Music+",
  },
  {
    img: "src/assets/marquee/5.jpg",
    title: "Calm Meditation",
    service: "Music+",
  },
];

const MarqueeSlider = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Handle play/pause functionality
  const togglePlayPause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Play/Stop Button */}
      <div className="absolute bottom-4 right-6 z-10">
        <button
          onClick={togglePlayPause}
          className="bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        >
          {isPaused ? (
            <span className="material-icons">R</span>
          ) : (
            <span className="material-icons">L</span>
          )}
        </button>
      </div>

      {/* Marquee Image Container */}
      <div className="flex relative">
        <motion.div
          className="flex space-x-6 items-center"
          animate={{ x: isPaused ? 0 : -1000 }} // Move left
          transition={{ ease: "linear", duration: 10, repeat: Infinity }} // Infinite loop
        >
          {[...images, ...images].map((image, index) => (
            <motion.div
              key={index}
              className="w-64 h-64 bg-cover bg-center relative group"
              style={{ backgroundImage: `url(${image.img})` }}
            >
              {/* Text Overlay */}
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 className="text-xl font-bold">{image.title}</h2>
                <p className="text-sm">{image.service}</p>
              </div>

              {/* Play Now Button on Hover */}
              <motion.button
                className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-200 text-black px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Play Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeSlider;
