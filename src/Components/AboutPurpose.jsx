import React from "react";
import { Shield, CheckCircle, Activity } from "lucide-react";
import { motion } from "framer-motion";

const AboutPurpose = () => {
  const values = [
    {
      icon: <Shield size={32} className="text-white" />,
      title: "Trusted Protection",
      description:
        "Ensuring your home and office are safe from pests using reliable methods and trusted solutions.",
      bg: "bg-blue-600",
    },
    {
      icon: <CheckCircle size={32} className="text-white" />,
      title: "Proven Quality",
      description:
        "We maintain high-quality standards in all our services to guarantee effective results every time.",
      bg: "bg-blue-600",
    },
    {
      icon: <Activity size={32} className="text-white" />,
      title: "Fast Response",
      description:
        "Our team responds promptly to all service requests ensuring quick relief from pest problems.",
      bg: "bg-blue-600",
    },
    {
      icon: <Shield size={32} className="text-white" />,
      title: "Trusted Protection",
      description:
        "We use modern techniques and safe methods to protect your property efficiently.",
      bg: "bg-blue-600",
    },
    {
      icon: <CheckCircle size={32} className="text-white" />,
      title: "Proven Quality",
      description:
        "Consistently delivering reliable results, making sure your environment stays pest-free.",
      bg: "bg-blue-600",
    },
    {
      icon: <Activity size={32} className="text-white" />,
      title: "Fast Response",
      description:
        "Our expert team is always ready to act quickly and effectively on all service requests.",
      bg: "bg-blue-600",
    },
  ];

  // Framer Motion variants
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="px-4 sm:px-6 md:px-16 lg:px-24 py-16 bg-[#f3f7fa]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      {/* Heading */}
      <motion.div
        className="max-w-6xl mx-auto text-center md:text-left md:flex md:items-start md:justify-between mb-12 gap-6"
        variants={item}
      >
        <div className="md:w-1/2">
          <p className="text-[#134274] font-semibold uppercase tracking-wide mb-2">
            Driven By Purpose
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-[#134274] leading-snug">
            Strong Values Behind <br /> Every Treatment
          </h2>
        </div>
        <p className="mt-4 md:mt-0 md:w-1/2 text-gray-500 text-base sm:text-lg leading-relaxed">
          Sit turpis sem pharetra nisi massa. Est cursus non sed laoreet id.
          Dignissim odio turpis sed arcu a auctor mauris. Sit aliquet metus
          habitasse ut imperdiet ac eget. Egestas porta vitae eu aliquam
          vestibulum augue.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={container}
      >
        {values.map((val, index) => (
          <motion.div
            key={index}
            className="bg-[#e6eef5] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 sm:p-8 flex flex-col justify-start"
            variants={item}
            whileHover={{ scale: 1.05 }}
          >
            <div className={`flex items-center justify-center w-14 h-14 rounded-lg mb-6 ${val.bg}`}>
              {val.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#134274] mb-3">
              {val.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{val.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AboutPurpose;
