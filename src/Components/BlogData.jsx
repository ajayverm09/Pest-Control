import React, { useState } from "react";
import AboutHeroRe from "../Components/AboutHeroRe";
import BlogCard from "../Components/BlogCards";
import { motion } from "framer-motion";

const Blog = () => {
  const blogData1 = [
    {
      btn1: "Family",
      btn2: "Happy",
      header: "Build a new construction and grow up our world",
      url: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      text: "In today’s fast-paced construction world, choosing the right partners ensures a successful and safe project delivery every time.",
    },
    {
      btn1: "Work",
      btn2: "Safety",
      header: "Safety first for every worker on site",
      url: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
      text: "Providing safe environments increases productivity and reduces accidents.",
    },
    {
      btn1: "Design",
      btn2: "Modern",
      header: "Modern architecture for a better tomorrow",
      url: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
      text: "Modern buildings must blend functionality with green practices.",
    },
  ];

  const blogData2 = [
    {
      btn1: "Eco",
      btn2: "Tips",
      header: "Green Building Tips",
      url: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
      text: "Sustainable buildings are more efficient and cost-effective. Use recycled materials and solar energy...",
    },
    {
      btn1: "AI",
      btn2: "Tech",
      header: "Future of Construction Tech",
      url: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg",
      text: "AI and robotics are transforming construction. Automation improves precision and reduces human error.",
    },
    {
      btn1: "City",
      btn2: "Plan",
      header: "Urban Planning 101",
      url: "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg",
      text: "Designing cities for efficiency and comfort. Parks, utilities, transport all play a role.",
    },
  ];

  const [selected1, setSelected1] = useState(blogData1[0]);
  const [selected2, setSelected2] = useState(blogData2[0]);

  return (
    <div className="w-full">
      <section>
        <AboutHeroRe
          header="Blogs"
          btntext="Our Blogs"
          btntext2="Watch Video"
          url="https://images.pexels.com/photos/4975361/pexels-photo-4975361.jpeg"
          text="Pesticides help protect crops from pests, weeds, and diseases, ensuring better yield and food security. However, responsible use is essential to avoid health risks and environmental damage."
          main="Home"
          texter="Blogs"
        />
      </section>

      {/* Section 1 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mt-6">
        {/* Sidebar */}
        <aside className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Recent Posts</h2>
          {blogData1.map((post, i) => (
            <motion.div
              key={i}
              onClick={() => setSelected1(post)}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 cursor-pointer p-3 rounded transition-transform duration-300 ${
                selected1.header === post.header
                  ? "bg-gray-200 shadow-lg scale-105"
                  : "hover:bg-gray-100 hover:shadow-md"
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={post.url}
                alt={post.header}
                className="w-full sm:w-20 h-20 object-cover rounded"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">{post.header}</p>
                <p className="text-xs text-gray-600 line-clamp-2">{post.text}</p>
              </div>
            </motion.div>
          ))}
        </aside>

        {/* BlogCard with fade animation */}
        <motion.div
          key={selected1.header}
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <BlogCard {...selected1} texter="ralo · No comment · March 12, 2024" />
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mt-10">
        {/* Sidebar */}
        <aside className="space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">More Blogs</h2>
          {blogData2.map((post, i) => (
            <motion.div
              key={i}
              onClick={() => setSelected2(post)}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 cursor-pointer p-3 rounded transition-transform duration-300 ${
                selected2.header === post.header
                  ? "bg-gray-200 shadow-lg scale-105"
                  : "hover:bg-gray-100 hover:shadow-md"
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={post.url}
                alt={post.header}
                className="w-full sm:w-20 h-20 object-cover rounded"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">{post.header}</p>
                <p className="text-xs text-gray-600 line-clamp-2">{post.text}</p>
              </div>
            </motion.div>
          ))}
        </aside>

        {/* BlogCard with fade animation */}
        <motion.div
          key={selected2.header}
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <BlogCard {...selected2} texter="admin · No comment · April 5, 2024" />
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
