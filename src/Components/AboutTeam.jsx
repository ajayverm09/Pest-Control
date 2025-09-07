import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
  {
    category: "Field Operations",
    image: "https://images.pexels.com/photos/33485275/pexels-photo-33485275.jpeg",
    name: "Lars Evington",
    role: "Senior Pest Technician",
    desc: "Lectus eget velit mauris risus vel. Nec luctus sollicitudin tortor nibh quis pharetra lectus a. Sed et tellus tellus egestas purus nullam.",
  },
  {
    category: "Customer Support",
    image: "https://images.pexels.com/photos/8458953/pexels-photo-8458953.jpeg",
    name: "Amara Chen",
    role: "Client Service Manager",
    desc: "Lectus eget velit mauris risus vel. Nec luctus sollicitudin tortor nibh quis pharetra lectus a. Sed et tellus tellus egestas purus nullam.",
  },
  {
    category: "Quality Control",
    image: "https://images.pexels.com/photos/4910781/pexels-photo-4910781.jpeg",
    name: "Tomas Aguilar",
    role: "Inspection Specialist",
    desc: "Lectus eget velit mauris risus vel. Nec luctus sollicitudin tortor nibh quis pharetra lectus a. Sed et tellus tellus egestas purus nullam.",
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutTeam = () => {
  return (
    <motion.section
      className="py-16 bg-white w-full"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Top Section */}
      <motion.div
        className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        variants={cardVariants}
      >
        <div className="md:w-1/2">
          <p className="text-[#134274] font-semibold uppercase tracking-wide mb-2">
            Expert Teamwork
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#134274] leading-tight">
            Trusted Specialists You Can Count On
          </h1>
        </div>
        <div className="md:w-1/2 text-gray-600 text-lg leading-relaxed">
          <p>
            Sit turpis sem pharetra nisi massa. Est cursus non sed laoreet id.
            Dignissim odio turpis sed arcu a auctor mauris. Sit aliquet metus
            habitasse ut imperdiet ac eget. Egestas porta vitae eu aliquam
            vestibulum augue.
          </p>
        </div>
      </motion.div>

      {/* Team Grid */}
      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-[#f0f4f9] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-500 w-full"
            variants={cardVariants}
          >
            <div className="relative w-full">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 sm:h-72 md:h-80 object-cover"
              />
              <span className="absolute top-4 left-4 bg-white text-gray-800 text-sm px-3 py-1 rounded-full shadow">
                {member.category}
              </span>
            </div>

            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="uppercase text-[#134274] font-semibold tracking-wide mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">{member.desc}</p>
              </div>

              <div className="flex space-x-4 text-[#134274] text-xl mt-4">
                <a href="#" className="hover:text-[#0d2e57] transition">
                  <FaFacebook />
                </a>
                <a href="#" className="hover:text-[#0d2e57] transition">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-[#0d2e57] transition">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-[#0d2e57] transition">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AboutTeam;
