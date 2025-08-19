import React from "react";

type GradientPreset = "rainbow" | "sunset" | "aurora";

export interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  /** Choose a built-in gradient preset */
  preset?: GradientPreset;
  /** Provide a custom CSS gradient (e.g. "linear-gradient(90deg, #f00, #0f0)" ) */
  gradient?: string;
  /** If true, applies a gentle animated pan to the gradient */
  animate?: boolean;
}

function getPresetGradient(preset: GradientPreset): string {
  switch (preset) {
    case "sunset":
      return "linear-gradient(90deg, #ff7e5f, #feb47b, #fd3a69, #a05195, #6a0572)";
    case "aurora":
      return "linear-gradient(90deg, #8EC5FC, #E0C3FC, #a1ffce, #faffd1, #fbc2eb)";
    case "rainbow":
    default:
      return "linear-gradient(90deg, #ef4444, #f59e0b, #22c55e, #3b82f6, #a855f7)";
  }
}

/**
 * GradientText: Renders text with a clipped gradient background. Optional animated pan.
 * Mirrors the gradient text effect showcased by 21st.dev while keeping styles in-repo.
 */
export default function GradientText({
  children,
  className = "",
  preset = "rainbow",
  gradient,
  animate = false,
}: GradientTextProps) {
  const backgroundImage = gradient ?? getPresetGradient(preset);

  const baseClass = "text-transparent bg-clip-text";
  const animateClass = animate ? " animate-gradient" : "";
  const classes = `${baseClass}${animateClass}${className ? ` ${className}` : ""}`;

  const style: React.CSSProperties = {
    backgroundImage,
    // If animated, ensure the gradient has room to pan smoothly
    ...(animate ? { backgroundSize: "200% 200%" } : undefined),
  };

  return (
    <span className={classes} style={style}>
      {children}
    </span>
  );
}


