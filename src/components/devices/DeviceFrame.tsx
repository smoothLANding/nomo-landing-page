import * as React from "react";
import { cn } from "@/lib/utils";

interface DeviceFrameProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * DeviceFrame: lightweight iPhone-like bezel with a notch.
 * - Uses padding to simulate the bezel and rounded corners.
 * - Size is controlled by the wrapper's width/height/aspect classes passed in via className.
 */
export const DeviceFrame: React.FC<DeviceFrameProps> = ({ children, className }) => {
  return (
    <div className={cn("relative rounded-[2rem] bg-black p-2 md:p-3 lg:p-4 shadow-xl", className)}>
      {/* Notch */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-3 w-20 -translate-x-1/2 rounded-b-xl bg-black md:h-4 md:w-24" />
      {/* Screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-black">
        {children}
      </div>
    </div>
  );
};


