// src/components/TestimonialSlider.jsx
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Kay Craig",
    role: "Home Owner",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    rating: 5,
  },
  {
    name: "John Smith",
    role: "Restaurant Owner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    rating: 4,
  },
  {
    name: "Sophia Lee",
    role: "Office Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Pest control service was quick and effective. Highly recommended for commercial needs.",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    role: "Apartment Resident",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "The team was professional and solved our rodent problem within a day.",
    rating: 4,
  },
  {
    name: "David Miller",
    role: "Cafe Owner",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    text: "Affordable, efficient, and friendly service. No more cockroaches in my cafe!",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  // Auto scroll every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://pestraid.strongholdthemes.com/demos/demo1/wp-content/uploads/2021/03/Depositphotos_203573584_ds.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1A4879]/90"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            WHAT OUR CLIENTS THINK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Our Client Reviews
          </h2>
        </motion.div>

        {/* Testimonial Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="px-4 sm:px-6"
          >
            {/* Client Image */}
            <div className="flex justify-center mb-6">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg ring-4 ring-sky-500"
              />
            </div>

            {/* Testimonial Text */}
            <p className="text-lg leading-relaxed mb-6">
              {testimonials[current].text}
            </p>

            {/* Name + Role */}
            <h3 className="text-xl font-semibold">
              {testimonials[current].name}
            </h3>
            <p className="text-blue-200 mb-3">{testimonials[current].role}</p>

            {/* Rating */}
            <div className="flex justify-center mb-8">
              {Array.from({ length: testimonials[current].rating }).map(
                (_, i) => (
                  <FaStar key={i} className="text-yellow-400 mx-0.5" />
                )
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <motion.div
          className="flex justify-center space-x-3 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index
                  ? "bg-[#06223e] scale-110"
                  : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
