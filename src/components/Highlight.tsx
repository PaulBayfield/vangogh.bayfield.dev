"use client";

import { motion } from "framer-motion";
import { biographyHighlight } from "@/content/biography";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-100px" } as const;

export default function Highlight() {
  return (
    <section className="bg-[var(--color-light-gray)] px-[10%] xl:px-[15%] py-12 flex flex-col md:flex-row gap-6">
      <motion.img
        src="/dr-gachet.png"
        className="rounded-xl md:max-w-[50lvh] max-w-full object-cover"
        style={{ boxShadow: "var(--shadow-red)" }}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, ease: EASE }}
      />

      <motion.div
        className="p-9 text-white rounded-xl text-3xl flex flex-col justify-center items-center gap-6"
        style={{
          background: "var(--color-dark-red)",
          boxShadow: "var(--shadow-red)",
        }}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
      >
        {biographyHighlight.map((p, i) => (
          <p key={i} className="mb-3">
            {p}
          </p>
        ))}
      </motion.div>
    </section>
  );
}
