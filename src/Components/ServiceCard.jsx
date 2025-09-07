// src/components/ServiceCard.jsx
import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, image, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative group overflow-hidden rounded-xl shadow-md w-full h-full"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Blue overlay hover */}
      <div className="absolute inset-0 bg-[#134274]/60 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>

      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute bottom-4 right-4 z-20"
      >
        <img
          src={icon}
          alt={`${title} icon`}
          className="w-12 h-12 p-2 bg-blue-500 rounded-lg shadow-md"
        />
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute bottom-4 left-4 text-white text-xl font-semibold z-20 drop-shadow-lg"
      >
        {title}
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
