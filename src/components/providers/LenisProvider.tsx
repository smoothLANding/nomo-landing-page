"use client";
import React from "react";

export const LenisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  React.useEffect(() => {
    let rafId: number | null = null;
    let lenis: any = null;
    let cancelled = false;

    async function setup() {
      try {
        const mod = await import("lenis");
        if (cancelled) return;
        const Lenis = (mod as any).default ?? (mod as any);
        lenis = new Lenis({});
        const raf = (time: number) => {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      } catch {
        // Lenis not installed; gracefully skip
      }
    }
    setup();

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis && typeof lenis.destroy === "function") lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};


