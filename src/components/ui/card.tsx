import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "soft";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const base = "rounded-2xl border shadow-sm bg-white";
    // Keep variant for API consistency; both render solid white to avoid gradient bleed-through
    const variantClass = "";
    return <div ref={ref} className={cn(base, variantClass, className)} {...props} />;
  }
);

Card.displayName = "Card";


