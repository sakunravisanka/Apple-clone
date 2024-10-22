import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Image data with text and buttons for each slide
const slides = [
  {
    img: "src/assets/slides/1.png", // Update with correct image path
    title: "Slow Horses",
    subtitle: "Thriller - Emmy® Award winner.",
    button: "Stream now",
  },
  {
    img: "src/assets/slides/2.png", // Update with correct image path
    title: "Movie Title 2",
    subtitle: "Another Description.",
    button: "Stream now",
  },
  {
    img: "src/assets/slides/3.png", // Update with correct image path
    title: "Movie Title 3",
    subtitle: "Some cool taglines here.",
    button: "Stream now",
  },
  {
    img: "src/assets/slides/4.png", // Update with correct image path
    title: "Movie Title 4",
    subtitle: "Some cool taglines here.",
    button: "Stream now",
  },
  {
    img: "src/assets/slides/5.png", // Update with correct image path
    title: "Movie Title 5",
    subtitle: "Some cool taglines here.",
    button: "Stream now",
  },
  {
    img: "src/assets/slides/6.png", // Update with correct image path
    title: "Movie Title 6",
    subtitle: "Some cool taglines here.",
    button: "Stream now",
  },
  {
    img: "src/assets/slides/7.png", // Update with correct image path
    title: "Movie Title 7",
    subtitle: "Some cool taglines here.",
    button: "Stream now",
  },
  {
    img: "src/assets/slides/8.jpg", // Update with correct image path
    title: "Movie Title 8",
    subtitle: "Some cool taglines here.",
    button: "Stream now",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide logic: updates the current slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence>
        {slides.map((slide, index) => {
          return (
            index === currentSlide && (
              <motion.div
                key={slide.title}
                className="absolute inset-0 flex flex-col justify-end bg-cover bg-center h-full"
                style={{ backgroundImage: `url(${slide.img})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
              >
                <div className="p-8 text-white">
                  <h1 className="text-5xl font-bold mb-2">{slide.title}</h1>
                  <p className="text-lg mb-6">{slide.subtitle}</p>
                  <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition">
                    {slide.button}
                  </button>
                </div>
              </motion.div>
            )
          );
        })}
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
