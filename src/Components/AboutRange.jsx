import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const AboutRange = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStartAnimation(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  const stats = [
    { title: "Architecture Skills", value: 90 },
    { title: "Interior Decoration & Repaint", value: 98 },
    { title: "Construction Planning", value: 85 },
    { title: "Project Management", value: 95 },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Image Layout */}
        <motion.div
          className="relative w-full md:w-1/2 flex justify-center md:justify-start mt-10 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Image */}
          <img
            src="https://images.pexels.com/photos/271805/pexels-photo-271805.jpeg"
            alt="Back"
            className="rounded-3xl w-[70%] md:w-full max-w-md h-[300px] sm:h-[350px] md:h-[450px] object-cover"
          />

          {/* Front Image */}
          <img
            src="https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg"
            alt="Front"
            className="absolute bottom-[-50px] md:bottom-[-70px] h-[300px] sm:h-[350px] md:h-[450px] left-[20%] md:left-[50%] transform md:-translate-x-1/2 w-[60%] md:w-[60%] rounded-2xl border-4 md:border-8 border-white shadow-xl object-cover"
          />

          {/* Stat Box */}
          <motion.div
            className="absolute top-10 md:top-[50px] left-[60%] md:left-[75%] transform -translate-x-1/2 bg-[#1E3A47] text-white px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-lg border-4 border-white w-max text-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-2xl md:text-3xl font-bold">
              <CountUp end={startAnimation ? 325 : 0} duration={2} />{" "}
              <span className="text-base font-normal">+</span>
            </p>
            <p className="font-semibold text-sm md:text-base">Happy Clients</p>
            <p className="text-white/70 text-xs md:text-sm">Lorem ipsum dolor</p>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm md:text-base font-semibold text-[#134274] uppercase tracking-wide">
            We Have Dedicated Skills
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-[#134274] leading-snug">
            The Right Team Work Is Fine With Our Business
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Checklist */}
          <ul className="mt-6 space-y-3 text-sm sm:text-base text-gray-700">
            <li className="flex items-center gap-2">✅ Team With High Skills</li>
            <li className="flex items-center gap-2">✅ Professionals & Dedication Services</li>
            <li className="flex items-center gap-2">✅ And Much More We Have The Best</li>
          </ul>

          {/* Progress Bars */}
          <div className="mt-8 space-y-6">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex justify-between text-sm font-semibold mb-1">
                  <span className="text-[#134274]">{item.title}</span>
                  <span className="text-[#134274]">
                    <CountUp end={startAnimation ? item.value : 0} duration={2} />%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#134274] transition-all duration-[2000ms]"
                    style={{ width: startAnimation ? `${item.value}%` : "0%" }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <motion.a
            href="/"
            className="mt-10 inline-block bg-[#134274] hover:bg-[#0d2e57] text-white font-semibold px-6 py-3 rounded-full text-sm md:text-base transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            → Let’s Get a Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutRange;
