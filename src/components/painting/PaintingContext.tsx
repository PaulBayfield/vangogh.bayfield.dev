"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

type PaintingContextValue = {
  index: number; // 1..count
  count: number;
  setIndex: (next: number) => void;
  prev: () => void;
  next: () => void;
};

const PaintingContext = createContext<PaintingContextValue | null>(null);

function clampLoop(next: number, count: number) {
  if (next < 1) return count;
  if (next > count) return 1;
  return next;
}

export function PaintingProvider({
  count,
  initialIndex = 1,
  children,
}: {
  count: number;
  initialIndex?: number;
  children: React.ReactNode;
}) {
  const [index, _setIndex] = useState(() => clampLoop(initialIndex, count));

  const value = useMemo<PaintingContextValue>(() => {
    const setIndex = (next: number) => _setIndex(clampLoop(next, count));
    return {
      index,
      count,
      setIndex,
      prev: () => _setIndex((i) => clampLoop(i - 1, count)),
      next: () => _setIndex((i) => clampLoop(i + 1, count)),
    };
  }, [index, count]);

  return <PaintingContext.Provider value={value}>{children}</PaintingContext.Provider>;
}

export function usePainting() {
  const ctx = useContext(PaintingContext);
  if (!ctx) throw new Error("usePainting must be used inside <PaintingProvider>");
  return ctx;
}
