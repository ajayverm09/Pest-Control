import React from "react";
import { FaUser, FaRegCommentDots, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const BlogCard = ({ btn1, btn2, header, url, text, texter }) => {
  return (
    <motion.div
      className="p-6 bg-white shadow-md rounded-lg w-full max-w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7 }}
    >
      {/* Tags */}
      <div className="mb-4 flex gap-2 flex-wrap">
        <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded">
          {btn1}
        </span>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded">
          {btn2}
        </span>
      </div>

      {/* Header */}
      <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4 text-gray-800 leading-snug">
        {header}
      </h1>

      {/* Image */}
      <motion.img
        src={url}
        alt={header}
        className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-lg mb-4 shadow-md"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5 }}
      />

      {/* Text */}
      <p className="text-gray-700 leading-relaxed mb-6">{text}</p>

      <hr className="border-gray-300 mb-4" />

      {/* Footer info */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-gray-500 text-sm items-start sm:items-center">
        <div className="flex items-center gap-2">
          <FaUser />
          <span>ralo</span>
        </div>
        <div className="flex items-center gap-2">
          <FaRegCommentDots />
          <span>No comment</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt />
          <span>March 12, 2024</span>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
