"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import { usePainting } from "./PaintingContext";

type Painting = {
  title: string;
};

const PAINTINGS: Painting[] = [
  { title: "Champs de blé avec corbeaux" },
  { title: "Le Château d'Auvers-sur-Oise au coucher du soleil" },
  { title: "Champ de blé et ciel orageux" },
  { title: "Les bords de l'Oise à Auvers" },
  { title: "Sous-bois avec couple" },
  { title: "Champs de blé sous un ciel orageux" },
  { title: "Champ de blé avec bleuets" },
  { title: "Autoportrait" },
  { title: "Rue d'Auvers-sur-Oise" },
  { title: "Champ de blé" },
  { title: "L'église d'Auvers-sur-Oise" },
  { title: "Le Dr Gachet" },
];

const IMAGE_URL = (i: number) => `/paintings/carrousel-${i}.png`;

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="51"
      viewBox="0 0 50 51"
      fill="none"
      {...props}
    >
      {" "}
      <path
        d="M33.4596 5.61271C34.0454 6.19874 34.3745 6.99345 34.3745 7.82209C34.3745 8.65072 34.0454 9.44544 33.4596 10.0315L17.9908 25.5002L33.4596 40.969C34.0288 41.5583 34.3438 42.3477 34.3367 43.1671C34.3296 43.9865 34.0009 44.7703 33.4215 45.3497C32.8421 45.9291 32.0583 46.2577 31.239 46.2648C30.4196 46.2719 29.6302 45.957 29.0408 45.3877L11.3627 27.7096C10.7769 27.1236 10.4478 26.3289 10.4478 25.5002C10.4478 24.6716 10.7769 23.8769 11.3627 23.2908L29.0408 5.61271C29.6269 5.02686 30.4216 4.69775 31.2502 4.69775C32.0788 4.69775 32.8736 5.02686 33.4596 5.61271Z"
        fill="white"
      />{" "}
    </svg>
  );
}
function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="51"
      viewBox="0 0 50 51"
      fill="none"
      {...props}
    >
      {" "}
      <path
        d="M16.5407 45.3873C15.9548 44.8013 15.6257 44.0066 15.6257 43.1779C15.6257 42.3493 15.9548 41.5546 16.5407 40.9685L32.0094 25.4998L16.5407 10.031C15.9714 9.44165 15.6564 8.65227 15.6636 7.8329C15.6707 7.01354 15.9993 6.22975 16.5787 5.65035C17.1581 5.07095 17.9419 4.7423 18.7613 4.73518C19.5806 4.72806 20.37 5.04304 20.9594 5.61229L38.6375 23.2904C39.2234 23.8764 39.5525 24.6711 39.5525 25.4998C39.5525 26.3284 39.2234 27.1231 38.6375 27.7092L20.9594 45.3873C20.3734 45.9731 19.5787 46.3022 18.75 46.3022C17.9214 46.3022 17.1267 45.9731 16.5407 45.3873Z"
        fill="white"
      />{" "}
    </svg>
  );
}
function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="55"
      height="55"
      viewBox="0 0 55 55"
      fill="none"
      {...props}
    >
      {" "}
      <path
        d="M27.5002 50.4167C24.3682 50.4167 21.4081 49.8151 18.62 48.612C15.8318 47.4089 13.3969 45.7665 11.3153 43.6849C9.23367 41.6033 7.59131 39.1684 6.38818 36.3802C5.18506 33.592 4.5835 30.632 4.5835 27.5C4.5835 24.3299 5.20416 21.3507 6.44548 18.5625C7.68679 15.7743 9.36735 13.349 11.4871 11.2865C13.6069 9.22397 16.08 7.59116 18.9064 6.38803C21.7328 5.18491 24.7502 4.58334 27.9585 4.58334C31.014 4.58334 33.8977 5.10852 36.6095 6.15886C39.3213 7.20921 41.6989 8.6606 43.7423 10.513C45.7858 12.3655 47.409 14.5616 48.6121 17.1016C49.8153 19.6415 50.4168 22.382 50.4168 25.3229C50.4168 29.7153 49.08 33.0859 46.4064 35.4349C43.7328 37.7839 40.4863 38.9583 36.6668 38.9583H32.4272C32.0835 38.9583 31.8448 39.0538 31.7111 39.2448C31.5774 39.4358 31.5106 39.6458 31.5106 39.875C31.5106 40.3333 31.797 40.9922 32.37 41.8516C32.9429 42.7109 33.2293 43.6945 33.2293 44.8021C33.2293 46.7118 32.7042 48.125 31.6538 49.0417C30.6035 49.9583 29.2189 50.4167 27.5002 50.4167ZM14.896 29.7917C15.8891 29.7917 16.7102 29.467 17.3595 28.8177C18.0088 28.1684 18.3335 27.3472 18.3335 26.3542C18.3335 25.3611 18.0088 24.5399 17.3595 23.8906C16.7102 23.2413 15.8891 22.9167 14.896 22.9167C13.9029 22.9167 13.0818 23.2413 12.4325 23.8906C11.7831 24.5399 11.4585 25.3611 11.4585 26.3542C11.4585 27.3472 11.7831 28.1684 12.4325 28.8177C13.0818 29.467 13.9029 29.7917 14.896 29.7917ZM21.771 20.625C22.7641 20.625 23.5852 20.3004 24.2345 19.6511C24.8838 19.0017 25.2085 18.1806 25.2085 17.1875C25.2085 16.1945 24.8838 15.3733 24.2345 14.724C23.5852 14.0747 22.7641 13.75 21.771 13.75C20.7779 13.75 19.9568 14.0747 19.3075 14.724C18.6581 15.3733 18.3335 16.1945 18.3335 17.1875C18.3335 18.1806 18.6581 19.0017 19.3075 19.6511C19.9568 20.3004 20.7779 20.625 21.771 20.625ZM33.2293 20.625C34.2224 20.625 35.0436 20.3004 35.6929 19.6511C36.3422 19.0017 36.6668 18.1806 36.6668 17.1875C36.6668 16.1945 36.3422 15.3733 35.6929 14.724C35.0436 14.0747 34.2224 13.75 33.2293 13.75C32.2363 13.75 31.4151 14.0747 30.7658 14.724C30.1165 15.3733 29.7918 16.1945 29.7918 17.1875C29.7918 18.1806 30.1165 19.0017 30.7658 19.6511C31.4151 20.3004 32.2363 20.625 33.2293 20.625ZM40.1043 29.7917C41.0974 29.7917 41.9186 29.467 42.5679 28.8177C43.2172 28.1684 43.5418 27.3472 43.5418 26.3542C43.5418 25.3611 43.2172 24.5399 42.5679 23.8906C41.9186 23.2413 41.0974 22.9167 40.1043 22.9167C39.1113 22.9167 38.2901 23.2413 37.6408 23.8906C36.9915 24.5399 36.6668 25.3611 36.6668 26.3542C36.6668 27.3472 36.9915 28.1684 37.6408 28.8177C38.2901 29.467 39.1113 29.7917 40.1043 29.7917ZM27.5002 45.8333C27.8439 45.8333 28.1208 45.7379 28.3309 45.5469C28.541 45.3559 28.646 45.1076 28.646 44.8021C28.646 44.2674 28.3595 43.6372 27.7866 42.9115C27.2137 42.1858 26.9272 41.0972 26.9272 39.6458C26.9272 38.0417 27.4811 36.7622 28.5887 35.8073C29.6963 34.8524 31.0522 34.375 32.6564 34.375H36.6668C39.1877 34.375 41.3456 33.6398 43.1408 32.1693C44.9359 30.6988 45.8335 28.4167 45.8335 25.3229C45.8335 20.7014 44.067 16.8533 40.534 13.7787C37.001 10.704 32.8092 9.16668 27.9585 9.16668C22.7641 9.16668 18.3335 10.9427 14.6668 14.4948C11.0002 18.0469 9.16683 22.382 9.16683 27.5C9.16683 32.5799 10.9524 36.9054 14.5236 40.4766C18.0948 44.0478 22.4203 45.8333 27.5002 45.8333Z"
        fill="white"
      />{" "}
    </svg>
  );
}
export default function PaintingCarousel() {
  const { index, prev, next, count, setIndex } = usePainting();

  const paintingRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const [visibleIndex, setVisibleIndex] = useState(index);
  const [direction, setDirection] = useState<1 | -1>(1);

  const current = useMemo(() => PAINTINGS[index - 1], [index]);

  useEffect(() => {
    for (let i = 1; i <= count; i++) {
      const img = new Image();
      img.src = IMAGE_URL(i);
    }
  }, [count]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisibleIndex(index));
    return () => cancelAnimationFrame(raf);
  }, [index]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    let sx = 0,
      sy = 0;

    const start = (e: TouchEvent) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    };

    const end = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
      dx > 0 ? goPrev() : goNext();
    };

    el.addEventListener("touchstart", start, { passive: true });
    el.addEventListener("touchend", end, { passive: true });

    return () => {
      el.removeEventListener("touchstart", start);
      el.removeEventListener("touchend", end);
    };
  }, []);

  const scrollToPainting = useCallback(() => {
    requestAnimationFrame(() =>
      paintingRef.current?.scrollIntoView({ behavior: "smooth" }),
    );
  }, []);

  const goTo = useCallback(
    async (n: number) => {
      if (n === index) return;
      setDirection(n > index ? 1 : -1);
      const img = new Image();
      img.src = IMAGE_URL(n);
      await img.decode();
      setIndex(n);
      scrollToPainting();
    },
    [index, setIndex, scrollToPainting],
  );

  const goPrev = () => goTo(index === 1 ? count : index - 1);
  const goNext = () => goTo(index === count ? 1 : index + 1);

  return (
    <section
      ref={paintingRef}
      id="painting"
      className="w-full px-[10%] xl:px-[15%] py-12"
    >
      <div
        ref={rootRef}
        className="relative h-[50svh] w-full overflow-hidden rounded-2xl shadow-[8px_8px_0px_1px_rgba(88,105,92,0.65)]"
      >
        {[visibleIndex, index].map((i, layer) => (
          <div
            key={i + "-" + layer}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              backgroundImage: `url('${IMAGE_URL(i)}')`,
              opacity: layer === 1 ? 1 : 0,
              transform: `translateX(${layer === 1 ? 0 : -direction * 2}%)`,
            }}
          />
        ))}

        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="flex justify-center p-4 gap-2">
            {Array.from({ length: count }).map((_, i) => {
              const n = i + 1;
              return (
                <button
                  key={n}
                  onClick={() => goTo(n)}
                  className={`h-2 w-2 rounded-full transition ${
                    n === index
                      ? "bg-white scale-150"
                      : "bg-white/50 hover:scale-125 cursor-pointer"
                  }`}
                />
              );
            })}
          </div>

          <div className="flex justify-between px-4 pb-4">
            <button
              onClick={goPrev}
              className="p-2 transition hover:-translate-x-1 active:scale-95 cursor-pointer"
            >
              <ArrowLeftIcon className="h-7 w-7" />
            </button>
            <button
              onClick={goNext}
              className="p-2 transition hover:translate-x-1 active:scale-95 cursor-pointer"
            >
              <ArrowRightIcon className="h-7 w-7" />
            </button>
          </div>

          <div className="flex justify-end p-3">
            <a
              href="#description"
              className="inline-flex items-center gap-3 rounded-2xl bg-black/20 px-3 py-2 backdrop-blur-sm transition hover:bg-black/40"
            >
              <InfoIcon className="h-7 w-7" />
              <span
                className="text-white font-medium"
              >
                {current?.title}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { PAINTINGS, IMAGE_URL };
