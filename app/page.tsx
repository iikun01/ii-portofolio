"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#004581] mb-6">
            Indra&apos;s here!
          </h1>
          <p className="text-xl text-[#018ABD] mb-8 whitespace-nowrap">
            Software Developer & Health Enthusiast
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="inline-block bg-[#018ABD] text-white px-8 py-3 rounded-3xl hover:bg-[#004581] transition-colors whitespace-nowrap w-full sm:w-auto text-center"
              >
                My Work
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/cv.pdf"
                className="inline-flex items-center justify-center gap-2 bg-[#004581] text-white px-8 py-3 rounded-3xl hover:bg-[#018ABD] transition-colors whitespace-nowrap w-full sm:w-auto"
              >
                <Download size={20} />
                Download CV
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="rounded-full w-80 h-80 p-[1px] bg-gradient-to-r from-[#004581] via-[#018ABD] to-[#97CBDC] shadow-lg">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="/images/logo_new.png"
                alt="Profile picture - Cute white cat illustration"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
