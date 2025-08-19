"use client";
import React from "react";
import IPhoneVideo from "@/components/hero/IPhoneVideo";

interface StickyHeroMediaProps {
  /** Total height of the pin container; controls how long the media stays fixed */
  pinHeightVh?: number; // e.g., 220 means ~2.2x viewport
  /** Offset from the top to account for fixed headers, etc. */
  topOffsetPx?: number;
}

export const StickyHeroMedia: React.FC<StickyHeroMediaProps> = ({
  pinHeightVh = 220,
  topOffsetPx = 0,
}) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const stickyRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    const sticky = stickyRef.current;
    if (!container || !sticky) return;

    let rafId: number | null = null;

    const onScroll = () => {
      if (!container || !sticky) return;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = container.offsetHeight - viewportHeight + topOffsetPx;
      const raw = (topOffsetPx - rect.top) / (totalScrollable || 1);
      const progress = Math.min(1, Math.max(0, raw));
      sticky.style.setProperty("--pin-progress", String(progress));
    };

    const loop = () => {
      onScroll();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative">
      {/* Parent provides extra scroll distance so the sticky pins then releases */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${pinHeightVh}vh` }}
      >
        <div
          ref={stickyRef}
          className="sticky z-0 h-screen"
          style={{ top: `${topOffsetPx}px` }}
        >
          <div
            className="relative mx-auto flex h-full w-full max-w-6xl items-center justify-center px-4 will-change-transform"
            style={{
              transform:
                "translateY(calc(var(--pin-progress,0) * 40px)) scale(calc(1 + (var(--pin-progress,0) * 0.04)))",
              transition: "transform 0.02s linear",
            }}
          >
            <IPhoneVideo src="/hero-vid.mp4?v=2" />
          </div>
        </div>
      </div>
    </section>
  );
};


