import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
}

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base",
  icon: "h-7 w-7 p-0",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, asChild = false, variant = "default", size = "md", ...props },
    ref
  ) => {
    const base = "inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    const variantClass =
      variant === "outline"
        ? "border bg-transparent hover:bg-foreground/5"
        : variant === "ghost"
        ? "bg-transparent hover:bg-foreground/5"
        : "bg-foreground text-background hover:opacity-90";

    const classes = cn(base, variantClass, sizeClasses[size], className);

    if (asChild) {
      return (
        // Used with <Link asChild> pattern
        <button className={classes} ref={ref} {...props} />
      );
    }

    return <button className={classes} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";


