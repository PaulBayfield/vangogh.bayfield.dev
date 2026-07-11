"use client";

import { motion } from "framer-motion";
import { biographyBoxes } from "@/content/biography";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function BiographyBoxes() {
  return (
    <motion.section
      className="px-[10%] xl:px-[15%] py-12 grid grid-cols-1 gap-6 md:grid-cols-2"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="p-9 text-white rounded-xl text-3xl flex justify-center items-center"
        style={{
          background: "var(--color-dark-yellow)",
          boxShadow: "var(--shadow-yellow)",
        }}
        variants={item}
      >
        {biographyBoxes[0]}
      </motion.div>

      <motion.div
        className="h-full rounded-xl bg-cover bg-center min-h-[250px]"
        style={{
          backgroundImage: "url('/champ-corbeaux.webp')",
          boxShadow: "var(--shadow-yellow)",
        }}
        variants={item}
      />

      <motion.div
        className="h-full rounded-xl bg-cover bg-center min-h-[250px]"
        style={{
          backgroundImage: "url('/crepuscule-aso.webp')",
          boxShadow: "var(--shadow-yellow)",
        }}
        variants={item}
      />

      <motion.div
        className="p-9 text-white rounded-xl text-3xl flex justify-center items-center"
        style={{
          background: "var(--color-dark-yellow)",
          boxShadow: "var(--shadow-yellow)",
        }}
        variants={item}
      >
        {biographyBoxes[1]}
      </motion.div>
    </motion.section>
  );
}
