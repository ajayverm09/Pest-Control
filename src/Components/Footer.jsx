import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTimes,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0c3b6b] text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* About Us */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <div className="w-10 h-[2px] bg-blue-500 mb-4"></div>
            <p className="text-gray-300 mb-4">
              We are an award-winning pest control company with over 20 years of
              experience. We provide residential, commercial, and industrial
              services.
            </p>
            <div className="flex space-x-3 mt-4">
              {[{ icon: <FaFacebookF />, link: "#" },
                { icon: <FaTimes />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 cursor-pointer transition-colors"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <div className="w-10 h-[2px] bg-blue-500 mb-4"></div>
            <ul className="text-gray-300 space-y-3">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-blue-500 mt-1" />
                <span>
                  <strong className="text-white">73 Canal Street, New York</strong>
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-blue-500" />
                <span>+1123456789</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMobileAlt className="text-blue-500" />
                <span>+022345678</span>
              </li>
              <li className="flex items-center space-x-2">
                <MdEmail className="text-blue-500 text-lg" />
                <span>
                  <strong className="text-white">support@pestraid.com</strong>
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <div className="w-10 h-[2px] bg-blue-500 mb-4"></div>
            <ul className="text-gray-300 space-y-3">
              {[
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
                { label: "Blogs", path: "/blogs" },
                { label: "Our Projects", path: "/projects" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-2 hover:text-white cursor-pointer"
                  whileHover={{ x: 6 }}
                >
                  <FaArrowRight className="text-blue-500" />
                  <Link to={item.path}>{item.label}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">Services</h3>
            <div className="w-10 h-[2px] bg-blue-500 mb-4"></div>
            <ul className="text-gray-300 space-y-3">
              {[
                "Ant Control",
                "Bed Bug Control",
                "Cockroach Control",
                "Mosquito Control",
                "Rodent Control",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-2 hover:text-white cursor-pointer"
                  whileHover={{ x: 6 }}
                >
                  <FaArrowRight className="text-blue-500" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-600 my-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center text-sm text-gray-400 pb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Copyright © PestRaid. All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
