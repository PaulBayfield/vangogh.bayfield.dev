"use client";

import { usePainting } from "@components/painting/PaintingContext";
import { descriptions } from "@/content/descriptions";

export default function Description() {
  const { index, prev, next } = usePainting();

  const current = descriptions[index - 1];

  if (!current) return null;

  return (
    <section
      id="description"
      className="bg-[var(--color-light-gray)] px-[10%] xl:px-[15%] py-12 flex flex-col gap-6"
    >
      <div
        className="flex flex-col gap-4 text-gray-800"
      >
        {current.paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className="text-xl leading-relaxed md:text-2xl"
            style={{
              fontFamily: "var(--font-title)",
            }}
          >
            {paragraph}
          </p>
        ))}

        <div className="mt-2 flex items-center justify-between gap-4 mt-5 pt-4 border-t border-gray-300">
          <a
            href="#painting"
            className="
              max-w-[70%]
              text-md
              font-medium
              underline-offset-2
              hover:underline
            "
            style={{
              fontFamily: "var(--font-title)",
            }}
          >
            {current.title}
          </a>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Description précédente"
              className="transition active:scale-95 hover:-translate-x-1"
            >
              ←
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Description suivante"
              className="transition active:scale-95 hover:translate-x-1"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
