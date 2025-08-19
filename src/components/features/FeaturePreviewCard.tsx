import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type FeaturePreviewCardProps = {
  children: React.ReactNode;
  className?: string;
  backgroundSrc?: string;
};

/**
 * FeaturePreviewCard wraps the illustration area with the shared gradient background.
 * Keeps styling minimal so callers can control padding/size to avoid regressions.
 */
export function FeaturePreviewCard({
  children,
  className,
  backgroundSrc = "/gradient-bg.svg",
}: FeaturePreviewCardProps) {
  return (
    <Card
      variant="soft"
      className={cn("overflow-hidden", className)}
      style={{
        backgroundImage: `url(${backgroundSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </Card>
  );
}


