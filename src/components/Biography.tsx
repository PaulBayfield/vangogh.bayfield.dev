"use client";

import { motion } from "framer-motion";
import { biographyMain } from "@/content/biography";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "-100px" } as const;

export default function Biography() {
  return (
    <section className="bg-[var(--color-light-gray)] px-[10%] xl:px-[15%] py-12">
      <div className="flex flex-col gap-6 md:flex-row">
        <motion.div
          className="p-9 rounded-xl text-white text-3xl flex gap-5 flex-col justify-center items-center"
          style={{
            background: "var(--color-dark-blue)",
            boxShadow: "var(--shadow-blue)",
          }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {biographyMain.map((p, i) => (
            <p key={i} className="mb-3">
              {p}
            </p>
          ))}
        </motion.div>

        <motion.img
          src="/eglise-aso.png"
          alt="L'église d'Auvers-sur-Oise"
          className="rounded-xl md:max-w-[50lvh] max-w-full object-cover"
          style={{ boxShadow: "var(--shadow-blue)" }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        />
      </div>
    </section>
  );
}
