"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type SkillProps = {
  name: string;
  logo: string;
  smallImage?: boolean;
}

const skills: SkillProps[] = [
  { name: "React", logo: "/images/logo_react.png" },
  { name: "TypeScript", logo: "/images/logo_typescript.png", smallImage: true },
  { name: "Next.js", logo: "/images/logo_nextjs.png", smallImage: true },
  { name: "Tailwind CSS", logo: "/images/logo_tailwind.png", smallImage: true },
  { name: "Node.js", logo: "/images/logo_nodejs.png" },
  { name: "Nest.js", logo: "/images/logo_nestjs.png" },
  { name: "Python", logo: "/images/logo_python.png" },
  { name: "FastAPI", logo: "/images/logo_fastapi.png" },
];

export default function Skills() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto w-full py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <h1 className="text-4xl md:text-5xl font-bold text-[#004581] md:pt-8">
                <span className="text-[#018ABD]">My</span>{" "}
                <span className="text-[#004581]"> skills</span>
              </h1>
              <div className="flex-1 w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="relative group cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Base layer with default rotation and hover effect */}
                      <div className="absolute -inset-1 backdrop-blur-[1.75px] bg-white/5 border border-white/20 rounded-2xl shadow-sm transition-all duration-300 rotate-[-4deg] group-hover:rotate-[-5deg] group-hover:scale-105 group-hover:bg-blue-50" />
                      
                      {/* Content layer */}
                      <div className="relative min-h-36 backdrop-blur-[1.75px] bg-white/5 border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-white/20 scale-[1.06]">
                        <Image
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          width={48}
                          height={48}
                          className="mb-4 object-contain"
                        />
                        <h3 className="text-sm font-semibold text-center text-[#004581]">
                          {skill.name}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.p
                  className="text-center text-[#018ABD] mt-8 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  And more...
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

