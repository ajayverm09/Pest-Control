// src/components/ServicesSlider.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Mosquito Control",
    image:
      "https://pestraid.strongholdthemes.com/demos/demo1/wp-content/uploads/2021/03/Depositphotos_16847563_ds-1024x683.jpg",
    icon: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    title: "Bed Bug Control",
    image:
      "https://pestraid.strongholdthemes.com/demos/demo1/wp-content/uploads/2021/03/Depositphotos_22778212_ds-1024x683.jpg",
    icon: "https://cdn-icons-png.flaticon.com/512/3036/3036966.png",
  },
  {
    title: "Ant Control",
    image:
      "https://pestraid.strongholdthemes.com/demos/demo1/wp-content/uploads/2021/03/Depositphotos_158235640_ds-1024x683.jpg",
    icon: "https://cdn-icons-png.flaticon.com/512/3099/3099023.png",
  },
  {
    title: "Cockroach Control",
    image:
      "https://pestraid.strongholdthemes.com/demos/demo1/wp-content/uploads/2021/03/Depositphotos_6716490_ds-1024x683.jpg",
    icon: "https://cdn-icons-png.flaticon.com/512/482/482478.png",
  },
  {
    title: "Termite Control",
    image:
      "https://pestraid.strongholdthemes.com/demos/demo1/wp-content/uploads/2021/03/Depositphotos_91413196_ds-1024x683.jpg",
    icon: "https://cdn-icons-png.flaticon.com/512/595/595696.png",
  },
  {
    title: "Rodent Control",
    image:
      "https://pestraid.strongholdthemes.com/demos/demo1/wp-content/uploads/2021/03/Depositphotos_305949616_ds-1024x684.jpg",
    icon: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
];

const ServicesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCards = services.length;

  // Auto scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 3 >= totalCards ? 0 : prevIndex + 3
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [totalCards]);

  const visibleServices = services.slice(
    currentIndex,
    currentIndex + 3
  );

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-12 bg-gray-100">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 md:gap-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 md:w-1/2">
          Quality Service is Our Guarantee
        </h2>
        <p className="text-gray-600 md:text-lg md:w-1/2">
          We offer a wide range of pest control services catered to residential,
          commercial, and industrial clients. Whether the job is big or small,
          we can get rid of those pests.
        </p>
      </motion.div>

      {/* Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.title}
                image={service.image}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ServicesSlider;
