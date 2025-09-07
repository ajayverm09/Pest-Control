import React from "react";
import { motion } from "framer-motion";

const AboutJourney = () => {
  const events = [
    {
      year: "2012",
      title: "First Founded",
      desc: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      year: "2014",
      title: "Company Scaleup",
      desc: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      year: "2018",
      title: "Global Awards",
      desc: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      year: "2022",
      title: "Go Public Business",
      desc: "Lorem ipsum dolor sit amet consectetur",
    },
  ];

  return (
<section
  className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
  style={{
    backgroundImage: "url('https://norats.tokotema.xyz/wp-content/uploads/2025/05/image-37.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Our <span className="text-[#134274]">Great Stories</span>
        </h2>
        <p className="mt-4 text-use [#134274] instead of every green color max-w-2xl mx-auto">
          A journey of milestones that shaped our company into what it is today
        </p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Vertical Gradient Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-[#134274] via-[#226ab7] to-[#07294d] "></div>

        {events.map((event, index) => {
          const isLeft = index % 2 === 0; // zigzag pattern

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-16 flex w-full items-center ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              {/* Card */}
              <div
                className={`relative w-[45%] bg-green-50 rounded-2xl shadow-lg p-6 border-l-4 border-[#134274] hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                  isLeft ? "text-right pr-8" : "text-left pl-8"
                }`}
              >
                <span className="text-[#134274] font-bold text-lg tracking-wide">
                  {event.year}
                </span>
                <h3 className="text-2xl font-semibold mt-2 text-[#134274] hover:text-[#0e335a] transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-[#134274] mt-2 leading-relaxed">
                  {event.desc}
                </p>
              </div>

              {/* Dot with Glow */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#134274] rounded-full border-4 border-white shadow-lg shadow-[#04274d] animate-pulse"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutJourney;