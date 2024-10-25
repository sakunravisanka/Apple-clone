import React, { useState } from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [hoveringLink, setHoveringLink] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const handleMouseEnter = (link) => setHoveringLink(link);
  const handleMouseLeave = () => setHoveringLink(null);
  const toggleMenu = () => setIsOpen(!isOpen); // Toggle mobile menu

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseLeave={handleMouseLeave}
      className={`bg-primary text-white fixed w-full top-0 z-50 transition-all duration-300 ${
        hoveringLink ? "h-80" : "h-14"
      }`}
      style={{
        opacity: window.scrollY > 100 ? 0.9 : 1,
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-3">
        <div className="flex justify-between items-center h-full">
          {/* Left Side - Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold">
              <img
                src="src/assets/Logo/logo.png"
                alt="Apple Logo"
                className="h-8 w-8"
              />
            </a>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden ml-96">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <i className={`fas fa-${isOpen ? "times" : "bars"}`}></i>
            </button>
          </div>

          {/* Center Links */}
          <div className="relative">
            <div
              className={`hidden md:flex space-x-8 ${
                isOpen ? "flex" : "hidden"
              }`}
            >
              {[
                "store",
                "mac",
                "ipad",
                "iphone",
                "watch",
                "airpods",
                "tv",
                "entertainment",
                "support",
              ].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="text-sm font-medium hover:text-gray-400"
                  onMouseEnter={() => handleMouseEnter(link)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="#search"
              className="text-sm font-medium hover:text-gray-400"
            >
              <i className="fas fa-search"></i>
            </a>
            <a href="#cart" className="text-sm font-medium hover:text-gray-400">
              <i className="fas fa-shopping-bag"></i>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-0 right-0 md:hidden flex flex-col mt-10 space-y-1">
            {[
              "store",
              "mac",
              "ipad",
              "iphone",
              "watch",
              "airpods",
              "tv",
              "entertainment",
              "support",
            ].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-sm font-medium hover:text-gray-400 "
                onMouseEnter={() => handleMouseEnter(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </div>
        )}

        {/* Extra Links based on hovered item */}
        {hoveringLink && (
          <motion.div
            className="flex flex-col mt-2"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {hoveringLink === "store" && (
              <>
                <p className="font-bold">Shop</p>
                <a
                  href="#Shopthelatest"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  Shop The Latest
                </a>
                <a
                  href="#mac"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  Mac
                </a>
                <a
                  href="#ipad"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  iPad
                </a>
                <a
                  href="#iphones"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  iPhones
                </a>
                <a
                  href="#visionpro"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  Apple Vision Pro
                </a>
                <a
                  href="#accessories"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  Accessories
                </a>
                <div className="flex ml-40 absolute top-0 left-10 space-x-10">
                  <div className="flex flex-col">
                    <p className="font-bold">Quick Link</p>
                    <div className="flex flex-col space-y-1">
                      <p className="cursor-pointer">Category 1</p>
                      <p className="cursor-pointer">Category 2</p>
                      <p className="cursor-pointer">Category 3</p>
                      <p className="cursor-pointer">Category 4</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {hoveringLink === "mac" && (
              <>
                <p className="font-bold">Mac</p>
                <a
                  href="#macbookair"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  MacBook Air
                </a>
                <a
                  href="#macbookpro"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  MacBook Pro
                </a>
                <div className="flex ml-40 absolute top-0 left-10 space-x-10">
                  <div className="flex flex-col">
                    <p className="font-bold">Quick Link</p>
                    <div className="flex flex-col space-y-1">
                      <p className="cursor-pointer">Mac Accessories</p>
                      <p className="cursor-pointer">Mac Software</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {hoveringLink === "ipad" && (
              <>
                <p className="font-bold">iPad</p>
                <a
                  href="#ipadpro"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  iPad Pro
                </a>
                <a
                  href="#ipadair"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  iPad Air
                </a>
                <div className="flex ml-40 absolute top-0 left-10 space-x-10">
                  <div className="flex flex-col">
                    <p className="font-bold">Quick Link</p>
                    <div className="flex flex-col space-y-1">
                      <p className="cursor-pointer">iPad Accessories</p>
                      <p className="cursor-pointer">iPad Apps</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {hoveringLink === "iphone" && (
              <>
                <p className="font-bold">iPhone</p>
                <a
                  href="#iphone14"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  iPhone 14
                </a>
                <a
                  href="#iphone14pro"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  iPhone 14 Pro
                </a>
                <div className="flex ml-40 absolute top-0 left-10 space-x-10">
                  <div className="flex flex-col">
                    <p className="font-bold">Quick Link</p>
                    <div className="flex flex-col space-y-1">
                      <p className="cursor-pointer">iPhone Accessories</p>
                      <p className="cursor-pointer">iPhone Cases</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {hoveringLink === "watch" && (
              <>
                <p className="font-bold">Apple Watch</p>
                <a
                  href="#applewatchseries8"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  Apple Watch Series 8
                </a>
                <a
                  href="#applewatchse"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  Apple Watch SE
                </a>
                <div className="flex ml-40 absolute top-0 left-10 space-x-10">
                  <div className="flex flex-col">
                    <p className="font-bold">Quick Link</p>
                    <div className="flex flex-col space-y-1">
                      <p className="cursor-pointer">Watch Bands</p>
                      <p className="cursor-pointer">Watch Accessories</p>
                    </div>
                  </div>
                </div>
              </>
            )}
            {hoveringLink === "airpods" && (
              <>
                <p className="font-bold">AirPods</p>
                <a
                  href="#airpodspro"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  AirPods Pro
                </a>
                <a
                  href="#airpodsmax"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  AirPods Max
                </a>
                <div className="flex ml-40 absolute top-0 left-10 space-x-10">
                  <div className="flex flex-col">
                    <p className="font-bold">Quick Link</p>
                    <div className="flex flex-col space-y-1">
                      <p className="cursor-pointer">AirPods Accessories</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {hoveringLink === "tv" && (
              <>
                <p className="font-bold">Apple TV</p>
                <a
                  href="#appletv4k"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  Apple TV 4K
                </a>
                <a
                  href="#appletvhd"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  Apple TV HD
                </a>
                <div className="flex ml-40 absolute top-0 left-10 space-x-10">
                  <div className="flex flex-col">
                    <p className="font-bold">Quick Link</p>
                    <div className="flex flex-col space-y-1">
                      <p className="cursor-pointer">TV Shows</p>
                      <p className="cursor-pointer">Movies</p>
                    </div>
                  </div>
                </div>
              </>
            )}
            {hoveringLink === "entertainment" && (
              <>
                <p className="font-bold">Entertainment</p>
                <a
                  href="#applemusic"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  Apple Music
                </a>
                <a
                  href="#appletvplus"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  Apple TV+
                </a>
                <div className="flex ml-40 absolute top-0 left-10 space-x-10">
                  <div className="flex flex-col">
                    <p className="font-bold">Quick Link</p>
                    <div className="flex flex-col space-y-1">
                      <p className="cursor-pointer">Music Playlists</p>
                      <p className="cursor-pointer">TV Shows</p>
                    </div>
                  </div>
                </div>
              </>
            )}
            {hoveringLink === "support" && (
              <>
                <p className="font-bold">Support</p>
                <a
                  href="#contactsupport"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  Contact Support
                </a>
                <a
                  href="#techsupport"
                  className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                >
                  Tech Support
                </a>
                <div className="flex ml-40 absolute top-0 left-10 space-x-10">
                  <div className="flex flex-col">
                    <p className="font-bold">Quick Link</p>
                    <div className="flex flex-col space-y-1">
                      <p className="cursor-pointer">Return Policies</p>
                      <p className="cursor-pointer">Warranty Info</p>
                    </div>
                  </div>
                </div>
              </>
            )}
            {/* Repeat similar structures for airpods, tv, entertainment, and support */}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
