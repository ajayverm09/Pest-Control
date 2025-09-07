import React from "react";
import { CheckCircle, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Certified Experts",
      desc: "Neque id ac nisl imperdiet tellus placerat venenatis habitant ullamcorper ornare est arcu elit pellentesque.",
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Quick Response",
      desc: "Neque id ac nisl imperdiet tellus placerat venenatis habitant ullamcorper ornare est arcu elit pellentesque.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: "Proven Results",
      desc: "Neque id ac nisl imperdiet tellus placerat venenatis habitant ullamcorper ornare est arcu elit pellentesque.",
    },
  ];

  return (
    <section className="py-16 bg-[#e9f2f1] w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="https://norats.tokotema.xyz/wp-content/uploads/2025/05/image-14.jpg"
            alt="Pest Control Professional"
            className="rounded-2xl shadow-lg w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Small Heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#134274] font-semibold uppercase tracking-wide"
          >
            Why Choose Us
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            Trusted Pest Control <br /> Professionals
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600"
          >
            Malesuada arcu dictumst vitae integer. Quam pharetra ultrices tortor
            eu velit vel. Sem ipsum auctor orci pellentesque placerat.
          </motion.p>

          {/* Features */}
          <div className="space-y-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-[#0C3B6B] p-3 rounded-lg shadow-md flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
