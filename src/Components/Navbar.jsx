// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaSearch,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      {/* Top Bar (hidden when scrolled) */}
      {!isScrolled && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between px-4 md:px-10 py-3 text-sm bg-white"
        >
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://pestraid.strongholdthemes.com/demos/demo1/wp-content/themes/pest-raid/images/pest-raid-logo.png"
              alt="Logo"
              className="w-52 h-16 object-contain"
            />
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <FaPhoneAlt className="text-blue-500" />
              <div>
                <p className="font-bold">+0123456789</p>
                <p className="text-gray-500 text-xs">support@pestraid.com</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-2"
            >
              <MdOutlineAccessTime className="text-blue-500 text-lg" />
              <div>
                <p className="font-bold">Mon–Sat 9.00–15:00</p>
                <p className="text-gray-500 text-xs">Sunday CLOSED</p>
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              GET A QUOTE →
            </motion.button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </motion.div>
      )}

      {/* Main Navigation */}
      <nav
        className={`transition-all border-t ${
          isScrolled ? "py-3" : "bg-gray-100 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.img
              src="https://pestraid.strongholdthemes.com/demos/demo1/wp-content/themes/pest-raid/images/pest-raid-logo.png"
              alt="Logo"
              className={`w-40 h-12 object-contain transition-opacity duration-300 ${
                isScrolled ? "opacity-100" : "opacity-0"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isScrolled ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            />

            {/* Desktop Links */}
            <ul className="hidden md:flex space-x-6 font-medium text-sm text-gray-700">
              {["/", "/about", "/blogs", "/contact"].map((path, idx) => {
                const labels = ["HOME", "ABOUT", "BLOGS", "CONTACT"];
                return (
                  <li key={path}>
                    <Link
                      to={path}
                      className={`hover:text-blue-600 transition ${
                        location.pathname === path ? "text-blue-600" : ""
                      }`}
                    >
                      {labels[idx]}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Icons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden md:flex items-center space-x-4 text-gray-700 text-lg"
            >
              <FaFacebookF className="cursor-pointer hover:text-blue-600" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
              <FaSearch className="cursor-pointer" />
              <FaShoppingBag className="cursor-pointer" />
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="md:hidden flex flex-col space-y-3 pb-4 pt-4 text-sm text-gray-700 font-medium"
              >
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/blogs">BLOGS</Link>
                <Link to="/contact">CONTACT</Link>
                <div className="flex items-center space-x-4 pt-2">
                  <FaFacebookF />
                  <FaInstagram />
                  <FaSearch />
                  <FaShoppingBag />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
