// src/pages/ContactPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src="https://pestraid.strongholdthemes.com/demos/demo1/wp-content/uploads/2021/04/Depositphotos_78446538_ds-1024x684.jpg"
          alt="Pest Control"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0C3B6B]/60" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Get in touch with our team for reliable and effective pest control
            solutions.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 shadow-md rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06223e] outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06223e] outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06223e] outline-none"
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#06223e] outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0C3B6B] text-white py-3 rounded-lg hover:bg-[#0c2f52] transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions or need immediate pest control service? Reach us
              through the following contact details:
            </p>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-[#0C3B6B] text-xl" />
              <span className="text-gray-700">+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-[#0C3B6B] text-xl" />
              <span className="text-gray-700">support@pestcontrol.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-[#0C3B6B] text-xl" />
              <span className="text-gray-700">
                123 Green Street, New Delhi, India
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
