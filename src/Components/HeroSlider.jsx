import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

const slides = [
  {
    title: "Fast and efficient pest control service",
    subtitle: "The Extermination Experts",
    description:
      "With a work rate second to none, we ensure a quick turnover on all projects whether big or small.",
    button: "VIEW OUR SERVICES",
    background:
      "https://pestraid.strongholdthemes.com/demos/demo1/wp-content/uploads/2021/03/Depositphotos_305949616_ds.jpg",
  },
  {
    title: "Safe and eco-friendly extermination",
    subtitle: "Trusted Pest Solutions",
    description:
      "We use environmentally responsible methods to protect your home and health.",
    button: "LEARN MORE",
    background:
      "https://pestraid.strongholdthemes.com/demos/demo1/wp-content/uploads/2021/03/Depositphotos_203573584_ds.jpg",
  },
  {
    title: "Commercial pest control services",
    subtitle: "Business-Safe Treatments",
    description:
      "Reliable, discreet, and effective pest management for your workplace.",
    button: "GET A QUOTE",
    background:
      "https://pestraid.strongholdthemes.com/demos/demo1/wp-content/uploads/2021/04/Depositphotos_106107102_ds.jpg",
  },
  {
    title: "Residential pest protection",
    subtitle: "Home Pest Defense",
    description:
      "Protect your family and property with our proven pest control plans.",
    button: "BOOK NOW",
    background:
      "https://pestraid.strongholdthemes.com/demos/demo1/wp-content/uploads/2021/04/Depositphotos_203574536_ds-300x300.jpg",
  },
];

const HeroSlider = () => {
  return (
    <section className="w-full h-[600px] md:h-[700px] lg:h-[750px] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.background})`,
              }}
            >
              {/* Gradient Overlay (Left Side Only) */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#18406B] via-[#18406B]/90 to-transparent z-0" />

              {/* Content */}
              <div className="relative z-10 w-full h-full flex items-center px-6 md:px-12 lg:px-20">
                <motion.div
                  className="max-w-2xl text-white space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    className="inline-block px-4 py-2 bg-blue-600 rounded-full text-xs font-semibold uppercase tracking-widest"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {slide.subtitle}
                  </motion.div>

                  <motion.h1
                    className="text-3xl md:text-5xl font-extrabold leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    className="text-base md:text-lg text-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <a href="#services">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm md:text-base font-medium shadow-md transition-transform transform hover:scale-105">
                        {slide.button}
                      </button>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
