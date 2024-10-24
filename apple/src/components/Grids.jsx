import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CombinedGrids = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  const handleScroll = () => {
    const items = Array.from(document.querySelectorAll(".grid-item"));
    const windowHeight = window.innerHeight;

    const visibleIndices = items
      .map((item, index) => {
        const { top } = item.getBoundingClientRect();
        return top < windowHeight && top > 0 ? index : null;
      })
      .filter((index) => index !== null);

    setVisibleItems(visibleIndices);
  };

  const combinedItems = [
    {
      title: "AirPods 4",
      description: "Iconic. Now supersonic.",
      image: "src/assets/grids/1.jpg",
    },
    {
      title: "AirPods Pro 2",
      description: "Take a Hearing Test. Right at home.",
      image: "src/assets/grids/2.jpg",
    },
    {
      title: "iPad Mini",
      description: "Hello, Apple Intelligence. Available starting 10.23",
      image: "src/assets/grids/3.jpg",
    },
    {
      title: "WATCH",
      subtitle: "ULTRA 2",
      description: "Take a Hearing Test. Right at home.",
      image: "src/assets/grids/4.png",
    },
    {
      title: "Trade In",
      description: "Get $180 - $650 when you trade in an iPhone 12 or higher",
      image: "src/assets/grids/5.png",
    },
    {
      title: "Card",
      description: "Get up to 3% Daily Cash Back with every purchase",
      image: "src/assets/grids/6.jpg",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Combined Bento Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {combinedItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative grid-item overflow-hidden rounded-lg shadow-lg bg-cover bg-center h-64"
            style={{
              backgroundImage: `url(${item.image})`,
              filter: "brightness(0.7)", // Increased brightness
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: visibleItems.includes(index) ? 1 : 0,
              y: visibleItems.includes(index) ? 0 : 50,
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <h1 className="text-2xl font-bold text-white text-center">
                {item.title}
              </h1>
              {item.subtitle && (
                <p className="text-lg text-orange-300 mt-2 text-center">
                  {item.subtitle}
                </p>
              )}
              <p className="text-lg text-white mt-2 text-center">
                {item.description}
              </p>
              <div className="mt-4 flex space-x-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                  Learn More
                </button>
                <button className="border-2 border-blue-600 hover:bg-blue-700 text-blue-600 py-2 px-4 rounded-full hover:text-white transition">
                  Buy
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CombinedGrids;
