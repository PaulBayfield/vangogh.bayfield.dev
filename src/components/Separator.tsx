"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Separator({
  title,
  id,
}: {
  title: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="h-48 bg-[var(--color-light-gray)] flex items-center justify-center"
    >
      <motion.div
        className="px-8 py-6 rounded-xl text-white text-5xl"
        style={{
          background: "var(--color-dark-red)",
          boxShadow: "var(--shadow-red)",
        }}
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        {title}
      </motion.div>
    </section>
  );
}
