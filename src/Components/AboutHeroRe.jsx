import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutHeroRe = ({ header, url, text, btntext, btnlink, btntext2, main, texter }) => {
  // Floating animation for header
  const floatVariant = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Fade up animation for text and buttons
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Button hover animation
  const buttonHover = {
    scale: 1.05,
    boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
    transition: { duration: 0.3 },
  };

  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="h-[500px] sm:h-[600px] md:h-[700px] flex items-center justify-center text-gray-50 p-4 relative overflow-hidden"
    >
      {/* Bluish transparent overlay */}
      <div className="absolute inset-0 bg-[#134274]/70"></div>

      <motion.div
        className="text-center relative z-10 px-4 sm:px-8 max-w-4xl"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        {/* Floating Header */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-snug"
          variants={floatVariant}
          animate="animate"
        >
          {header}
        </motion.h1>

        {/* Paragraph Fade Up */}
        <motion.p
          className="text-base sm:text-lg md:text-xl mb-6 w-full px-4 py-3 bg-black/20 backdrop-blur-sm rounded-lg border border-gray-300 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 1 } }}
        >
          {text}
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <Link to={btnlink || "/"}>
            <motion.button
              whileHover={buttonHover}
              className="bg-[#134274]/90 text-white px-8 py-3 font-bold rounded-lg hover:bg-white hover:text-[#134274] transition-all"
            >
              {btntext}
            </motion.button>
          </Link>

          <motion.button
            whileHover={buttonHover}
            className="bg-white text-[#134274] px-8 py-3 font-bold rounded-lg hover:bg-[#134274] hover:text-white transition-all"
          >
            {btntext2}
          </motion.button>
        </div>

        {/* Breadcrumb Fade In */}
        <motion.div
          className="hidden md:flex justify-center items-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } }}
        >
          <div className="relative bg-gray-100 border w-full sm:w-3/4 py-3 rounded-lg shadow-md">
            <div className="text-black font-bold text-sm sm:text-base text-center">
              <Link to="/" className="text-[#134274] hover:underline transition">
                {main}
              </Link>
              <span className="mx-1">/</span>
              <span className="text-[#134274]">{texter}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutHeroRe;
