"use client";

import { motion } from "framer-motion";
import { biographyConclusion } from "@/content/biography";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-100px" } as const;

export default function DoubleSection() {
  return (
    <section className="px-[10%] xl:px-[15%] py-12 flex flex-col gap-6">
      <motion.div
        className="p-9 text-white rounded-xl text-3xl flex justify-center items-center"
        style={{
          background: "var(--color-light-green)",
          boxShadow: "var(--shadow-green)",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {biographyConclusion}
      </motion.div>

      <motion.div
        className="h-48 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: "url('/paysage-aso.png')",
          boxShadow: "var(--shadow-green)",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
      />
    </section>
  );
}
