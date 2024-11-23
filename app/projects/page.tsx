"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "A fully responsive e-commerce website built with Next.js and Stripe integration.",
    image: "",
  },
  {
    title: "Task Management App",
    description:
      "A React-based task management application with drag-and-drop functionality.",
    image: "",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays real-time weather data from multiple APIs.",
    image: "",
  },
];

export default function Projects() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 sm:px-8 md:px-16 pt-10">
      <div className="max-w-6xl mx-auto w-full py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <h1 className="text-4xl md:text-5xl font-bold text-[#004581] md:pt-8">
                <span className="text-[#018ABD]">My recent</span>{" "}
                <span className="text-[#004581]">works</span>
              </h1>
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:bg-white/20 transition-all duration-300 hover:bg-sky-50"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Image
                        src={
                          project.image
                            ? project.image
                            : "/images/no_cover_project.png?height=200&width=300"
                        }
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h2 className="text-2xl font-bold mb-3 text-[#004581]">
                          {project.title}
                        </h2>
                        <p className="text-[#018ABD] text-justify">
                          {project.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
