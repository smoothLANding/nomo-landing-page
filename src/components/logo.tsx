import * as React from "react";

export const Logo: React.FC<{ className?: string; width?: number; height?: number }> = ({
  className,
  width = 48,
  height = 48,
}) => (
  // Use the provided SVG from public. This renders as an <img> to avoid inlining huge SVG.
  // If you prefer inline SVG, we can import and inline the path instead.
  <img src="/nomo-logo.svg" alt="Nomo logo" className={className} width={width} height={height} />
);


