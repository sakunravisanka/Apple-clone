import React, { useState } from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [hoveringLink, setHoveringLink] = useState(null); // Track which link is hovered

  // Handlers for mouse enter and leave
  const handleMouseEnter = (link) => setHoveringLink(link);
  const handleMouseLeave = () => setHoveringLink(null);

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseLeave={handleMouseLeave} // Reset on mouse leave
      className={`bg-primary text-white fixed w-full top-0 z-50 transition-all duration-300 ${
        hoveringLink ? "h-80" : "h-14"
      }`}
    >
      <div className=" max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-3">
        <div className="flex flex-col">
          <div className="flex justify-between h-full items-center">
            {/* Left Side - Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-xl font-bold">
                <img
                  src="src/assets/Logo/logo.png" // Replace with your actual logo path
                  alt="Apple Logo"
                  className="h-8 w-8"
                />
              </a>
            </div>

            {/* Center Links */}
            <div className="relative">
              <div className="hidden md:flex space-x-8">
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
              <a
                href="#cart"
                className="text-sm font-medium hover:text-gray-400"
              >
                <i className="fas fa-shopping-bag"></i>
              </a>
            </div>
          </div>

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
                  <a
                    href="#iphones"
                    className="px-4 py-2 lg:pl-40 text-sm font-medium hover:text-gray-400"
                  >
                    iPhones
                  </a>
                  <a
                    href="#macbooks"
                    className="px-4 py-2 lg:pl-40 text-sm font-medium hover:text-gray-400"
                  >
                    MacBooks
                  </a>
                  <a
                    href="#accessories"
                    className="px-4 py-2 lg:pl-40 text-sm font-medium hover:text-gray-400"
                  >
                    Accessories
                  </a>
                </>
              )}
              {hoveringLink === "mac" && (
                <>
                  <a
                    href="#macbookair"
                    className="px-4 py-2 lg:pl-56 text-sm font-medium hover:text-gray-400"
                  >
                    MacBook Air
                  </a>
                  <a
                    href="#macbookpro"
                    className="px-4 py-2 lg:pl-56 text-sm font-medium hover:text-gray-400"
                  >
                    MacBook Pro
                  </a>
                </>
              )}
              {hoveringLink === "ipad" && (
                <>
                  <a
                    href="#ipadpro"
                    className="px-4 py-2 lg:pl-72 text-sm font-medium hover:text-gray-400"
                  >
                    iPad Pro
                  </a>
                  <a
                    href="#ipadair"
                    className="px-4 py-2 lg:pl-72 text-sm font-medium hover:text-gray-400"
                  >
                    iPad Air
                  </a>
                </>
              )}
              {hoveringLink === "iphone" && (
                <>
                  <a
                    href="#iphone14"
                    className="px-4 py-2 lg:pl-80 text-sm font-medium hover:text-gray-400"
                  >
                    iPhone 14
                  </a>
                  <a
                    href="#iphone14pro"
                    className="px-4 py-2 lg:pl-80 text-sm font-medium hover:text-gray-400"
                  >
                    iPhone 14 Pro
                  </a>
                </>
              )}
              {hoveringLink === "watch" && (
                <>
                  <a
                    href="#applewatchseries7"
                    className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                  >
                    Apple Watch Series 7
                  </a>
                  <a
                    href="#applewatchse"
                    className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                  >
                    Apple Watch SE
                  </a>
                </>
              )}
              {hoveringLink === "airpods" && (
                <>
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
                </>
              )}
              {hoveringLink === "tv" && (
                <>
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
                </>
              )}
              {hoveringLink === "entertainment" && (
                <>
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
                </>
              )}
              {hoveringLink === "support" && (
                <>
                  <a
                    href="#contactsupport"
                    className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                  >
                    Contact Support
                  </a>
                  <a
                    href="#faqs"
                    className="px-4 py-2 text-sm font-medium hover:text-gray-400"
                  >
                    FAQs
                  </a>
                </>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
