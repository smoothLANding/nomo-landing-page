"use client";
import React from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

type ModalContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const ModalContext = React.createContext<ModalContextValue | null>(null);

export function Modal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <ModalContext.Provider value={{ open, setOpen }}>{children}</ModalContext.Provider>
  );
}

export const ModalTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(function ModalTrigger({ className, onClick, ...props }, ref) {
  const ctx = React.useContext(ModalContext);
  if (!ctx) throw new Error("ModalTrigger must be used within <Modal>");
  return (
    <button
      ref={ref}
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium",
        "bg-foreground text-background transition-colors hover:opacity-90",
        "group/modal-btn",
        className
      )}
      onClick={(e) => {
        onClick?.(e);
        ctx.setOpen(true);
      }}
      {...props}
    />
  );
});

export function ModalBody({ children }: { children: React.ReactNode }) {
  const ctx = React.useContext(ModalContext);
  if (!ctx) throw new Error("ModalBody must be used within <Modal>");
  const { open, setOpen } = ctx;

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  if (!mounted) return null;
  return createPortal(
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-50 grid place-items-center p-4 transition-all",
        open ? "visible opacity-100" : "invisible opacity-0"
      )}
      onClick={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative z-10 w-full max-w-xl rounded-2xl border bg-background p-6 shadow-xl transition-all",
          open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

export function ModalContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function ModalFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mt-6 flex items-center justify-end", className)}>{children}</div>;
}


