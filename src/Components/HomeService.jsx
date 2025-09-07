// src/components/ServicesSection.jsx
import React from "react";
import { TruckIcon, HomeModernIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 bg-white p-6 md:p-10 shadow-md border-b md:border-b-0 md:border-r border-gray-200"
        >
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <TruckIcon className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                24/7 Emergency Pest Control Service
              </h2>
              <p className="mt-4 text-gray-600">
                Contact us to learn about our 24/7 emergency pest control service.
                Aenean commodo ligula eget dolor. Aenean massa.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 bg-blue-900 text-white p-6 md:p-10 shadow-md relative overflow-hidden"
        >
          <div className="flex items-start gap-4">
            <div className="bg-blue-800 p-3 rounded-full">
              <HomeModernIcon className="w-8 h-8 text-blue-300" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                Residential & Commercial Service
              </h2>
              <p className="mt-4 text-blue-100">
                We offer our services for residential, commercial and industrial
                clients. Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
          </div>
          {/* Decorative circle bottom-right */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute bottom-0 right-0 w-20 h-20 bg-blue-600 rounded-full translate-x-1/2 translate-y-1/2"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
