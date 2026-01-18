"use client";

import { useState } from "react";

const paintings = [
  {
    img: "/champ-corbeaux.png",
    label: "Champs de blé avec corbeaux",
  },
  {
    img: "/crepuscule-aso.png",
    label: "Crépuscule à Auvers",
  },
  {
    img: "/paysage-aso.png",
    label: "Paysage d'Auvers",
  },
];

export default function Paintings() {
  const [index, setIndex] = useState(0);

  return (
    <section className="py-20 px-6 md:px-20">
      <div className="relative bg-lightGreenTwo shadow-blockGreen rounded-2xl h-[300px] md:h-[500px] flex items-center justify-between px-6">
        <button
          onClick={() =>
            setIndex((i) => (i - 1 + paintings.length) % paintings.length)
          }
          className="text-white text-4xl hover:scale-110 transition"
        >
          ←
        </button>

        <div
          className="absolute inset-0 bg-cover bg-center rounded-2xl transition-all duration-700"
          style={{ backgroundImage: `url(${paintings[index].img})` }}
        />

        <button
          onClick={() => setIndex((i) => (i + 1) % paintings.length)}
          className="text-white text-4xl hover:scale-110 transition"
        >
          →
        </button>
      </div>

      <p className="text-center mt-6 text-lg md:text-2xl">
        {paintings[index].label}
      </p>
    </section>
  );
}
