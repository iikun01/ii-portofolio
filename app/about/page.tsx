"use client";

import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 sm:px-8 md:px-16 pt-10">
      <div className="max-w-6xl mx-auto w-full py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div
            className="md:col-span-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start relative group">
              <h1 className="text-4xl md:text-5xl font-bold text-[#004581] md:pt-8">
                <span className="text-[#018ABD]">About</span>{" "}
                <span className="text-[#004581]">me</span>
              </h1>
              <div className="flex-1 w-full relative">
                {/* Base layer with default rotation and hover effect */}
                <div className="absolute -inset-1 backdrop-blur-[1.75px] bg-white/10 border border-white/20 rounded-2xl shadow-sm transition-all duration-300 rotate-[-2deg] group-hover:rotate-[-3deg] group-hover:bg-blue-50" />
                {/* Content layer */}
                <div className="relative glass-effect p-6 text-justify">
                  <motion.p
                    className="text-lg mb-6 text-[#004581]"
                    variants={itemVariants}
                  >
                    Hi there! I&apos;m a passionate Software Developer with a
                    keen eye for design and a love for creating seamless user
                    experiences. With a background in computer science and 6 years
                    of experience in web development, I strive to build
                    beautiful, functional, and accessible websites.
                  </motion.p>
                  <motion.p
                    className="text-lg mb-6 text-[#004581]"
                    variants={itemVariants}
                  >
                    My journey in web development started with a fascination for
                    how design and technology intersect. Over the years,
                    I&apos;ve honed my skills in HTML, CSS, JavaScript, TypeScript, Node.js,
                    various modern JavaScript frameworks like React, Next.js and Nest.js, Tailwind CSS,
                    Python, and FastAPI. I&apos;m always excited to learn new technologies and stay 
                    up-to-date with the latest trends in web development.
                  </motion.p>
                  <motion.p
                    className="text-lg text-[#004581]"
                    variants={itemVariants}
                  >
                    When I&apos;m not coding, you can find me exploring new
                    design trends, contributing to open-source projects, or
                    enjoying a good book on UX design. I believe in creating web
                    experiences that not only look great but also provide value
                    and accessibility to all users.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
