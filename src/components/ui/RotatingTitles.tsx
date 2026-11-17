"use client";

import { useEffect, useState } from "react";

import { designations } from "@/config/site";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

export function RotatingTitles() {
  const [index, setIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % designations.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  return (
    <div className="mt-5 flex min-h-9 items-center gap-3">
      <span
        aria-hidden="true"
        className="h-7 w-px bg-gradient-to-b from-accent/80 to-accent-2/40"
      />
      <p className="sr-only">{designations.join(", ")}</p>
      <div aria-hidden="true" className="overflow-hidden py-1">
        <span
          key={index}
          className="animate-title-in inline-flex items-center font-mono text-base font-medium tracking-tight text-accent sm:text-lg"
        >
          {designations[index]}
          <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-accent/80" />
        </span>
      </div>
    </div>
  );
}
