import React from "react";
import { PhoneIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 lg:px-8 py-12 gap-10">
        
        {/* Left: Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="https://pestraid.strongholdthemes.com/demos/demo1/wp-content/uploads/2021/06/Depositphotos_106118094_ds.jpg"
            alt="Pest Control Expert"
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-md object-cover shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="w-full lg:w-1/2 text-gray-800"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block mb-3 px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Us
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 leading-snug"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Pest Control Services From The Experts
          </motion.h2>

          <motion.p
            className="text-blue-700 font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We are an award-winning pest control company with over 20 years
            experience in the business.
          </motion.p>

          <motion.p
            className="text-gray-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            We provide a wide range of services for residential, commercial, and
            industrial level clients. No job is too big or too small, we’ve got
            you covered.
          </motion.p>

          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            In addition to our services, you can check out our shop for a wide
            range of pest control supplies and equipment. When it comes to pest
            control we are your one-stop shop.
          </motion.p>

          {/* Bullet Points */}
          <ul className="space-y-3 mb-6">
            {[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "Donec quam felis, ultricies nec, pellentesque eu, pretium.",
              "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
            ].map((text, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
              >
                <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-1" />
                <span>{text}</span>
              </motion.li>
            ))}
          </ul>

          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          </motion.p>

          {/* CTA & Contact */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition">
              Learn More
            </button>

            <div className="flex items-center space-x-3 text-left">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-800">
                  +1 (234) 124-5678
                </p>
                <p className="text-sm text-gray-500">Call Our Experts</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
