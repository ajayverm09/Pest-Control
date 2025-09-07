import React from "react";
import { ShieldCheck, Zap } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import { Link } from "react-router-dom";

const HomeHero2 = () => {
  const images = [
    { url: "https://norats.tokotema.xyz/wp-content/uploads/2025/05/Logo-Client-2.png" },
    { url: "https://norats.tokotema.xyz/wp-content/uploads/2025/05/Logo-Client-1.png" },
    { url: "https://norats.tokotema.xyz/wp-content/uploads/2025/05/Logo-Client-5.png" },
    { url: "https://norats.tokotema.xyz/wp-content/uploads/2025/05/Logo-Client-4.png" },
    { url: "https://norats.tokotema.xyz/wp-content/uploads/2025/05/Logo-Client-3.png" },
    { url: "https://norats.tokotema.xyz/wp-content/uploads/2025/05/Logo-Client-2.png" },
    { url: "https://norats.tokotema.xyz/wp-content/uploads/2025/05/Logo-Client-1.png" },
    { url: "https://norats.tokotema.xyz/wp-content/uploads/2025/05/Logo-Client-5.png" },
    { url: "https://norats.tokotema.xyz/wp-content/uploads/2025/05/Logo-Client-4.png" },
    { url: "https://norats.tokotema.xyz/wp-content/uploads/2025/05/Logo-Client-3.png" },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-12 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section (Images) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          <motion.img
            src="https://norats.tokotema.xyz/wp-content/uploads/2025/05/image-2.jpg"
            alt="worker"
            className="rounded-2xl object-cover w-full h-[350px] sm:h-[400px] shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <div className="flex flex-col gap-6">
            <motion.div
              className="bg-[#317bca] rounded-2xl flex items-center justify-center text-center p-8 sm:p-10 text-white font-bold text-2xl sm:text-3xl lg:text-4xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <span>
                <span className="text-[#134274] text-3xl sm:text-4xl lg:text-5xl">25+</span>
                <br />
                <span className="text-lg sm:text-xl lg:text-2xl font-medium">
                  Years of <br /> Experience
                </span>
              </span>
            </motion.div>
            <motion.img
              src="https://norats.tokotema.xyz/wp-content/uploads/2025/05/image-2.jpg"
              alt="spray"
              className="rounded-2xl object-cover w-full h-[150px] sm:h-[180px] shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>

        {/* Right Section (Content) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.p
            className="uppercase tracking-wide text-[#134274] font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About Pestraid
          </motion.p>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Your Trusted Pest <br /> Experts
          </motion.h2>

          <motion.p
            className="text-gray-600 text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Malesuada arcu dictumst vitae integer. Quam pharetra ultrices tortor
            eu velit vel. Sem ipsum auctor orci pellentesque placerat.
          </motion.p>

          {/* Features */}
          <div className="grid grid-cols-1 gap-6 pt-4">
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <ShieldCheck className="text-[#134274] w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg">Total Protection</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Neque id ac nisl imperdiet tellus placerat venenatis habitant
                  ornare est arcu elit pellentesque.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              <Zap className="text-[#134274] w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg">Fast Response</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Neque id ac nisl imperdiet tellus placerat venenatis habitant
                  ornare est arcu elit pellentesque.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Button */}
          <Link to="/about">
            <motion.button
              className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-[#134274] cursor-pointer hover:bg-white hover:text-[#134274] text-white font-semibold rounded-full transition"
              whileHover={{ scale: 1.08, boxShadow: "0px 15px 25px rgba(0,0,0,0.25)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Learn More About Us
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Trusted By Section */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Trusted by Industry Leaders
        </h1>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          sm={3}
          md={4}
          lg={5}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000}
          allowTouchMove={false}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center">
                <motion.img
                  src={item.url}
                  alt={`client-${index}`}
                  className="h-10 sm:h-12 md:h-14 w-auto grayscale hover:grayscale-0 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default HomeHero2;
