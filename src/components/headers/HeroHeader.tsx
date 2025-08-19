"use client";
import Link from "next/link";
import React from "react";
import { Logo } from "@/components/logo";
import { Brand } from "@/components/headers/Brand";
import { Menu } from "@/components/icons";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Features", href: "#link" },
  { name: "Solution", href: "#link" },
  { name: "Pricing", href: "#link" },
  { name: "About", href: "#link" },
];

export const HeroHeader: React.FC = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav data-state={menuState && "active"} className="fixed z-20 w-full px-2">
        <div
          className={cn(
            // Base: keep transparent border to avoid layout shift when it appears
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12 rounded-2xl border border-transparent",
            isScrolled &&
              "bg-background/50 max-w-4xl backdrop-blur-lg lg:px-5 border-zinc-200 dark:border-white/15"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Brand size={44} />

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="m-auto size-6" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={cn(
                "bg-background mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
                menuState && "block lg:flex"
              )}
            >
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={"flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit"}>
                <Modal>
                  <ModalTrigger className="h-9 rounded-md px-3 text-sm">
                    <span>Download</span>
                  </ModalTrigger>
                  <ModalBody>
                    <ModalContent>
                      <h4 className="mb-4 text-center text-lg font-semibold">Get nomo</h4>
                      <p className="mx-auto mb-6 max-w-sm text-center text-sm text-zinc-600 dark:text-zinc-400">Choose your platform to install the app.</p>
                      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link href="#" className="group inline-flex items-center gap-3 rounded-lg border px-4 py-2 transition-colors hover:bg-foreground/5">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M16.365 1.43c0 1.14-.43 2.2-1.2 3.08-.79.9-2.08 1.6-3.17 1.5-.13-1.06.49-2.2 1.24-3.02.84-.9 2.28-1.58 3.13-1.56zM20.9 17.33c-.59 1.35-.87 1.93-1.63 3.11-1.06 1.64-2.56 3.67-4.4 3.69-1.65.02-2.09-1.09-4.37-1.08-2.29.01-2.77 1.1-4.43 1.07-1.85-.03-3.26-1.86-4.32-3.5C-.21 17.53-.96 13 .64 10.27c.99-1.72 2.77-2.81 4.71-2.83 1.85-.04 3.59 1.26 4.37 1.26.8 0 2.42-1.56 4.08-1.33.7.03 2.67.29 3.94 2.2-3.39 1.86-2.84 6.77.1 7.76z" />
                          </svg>
                          <div className="flex flex-col leading-tight">
                            <span className="text-[10px] uppercase tracking-wide text-zinc-500">Download on the</span>
                            <span className="text-sm font-medium">App Store (iOS)</span>
                          </div>
                        </Link>
                        <Link href="#" className="group inline-flex items-center gap-3 rounded-lg border px-4 py-2 transition-colors hover:bg-foreground/5">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M1.5 3.27c-.34.2-.55.57-.55.97v15.52c0 .4.21.77.55.97l12-8.73z" />
                            <path d="M22.3 12.03c0-.35-.18-.68-.49-.86L17.6 8.36l-3.2 2.32 4.82 3.51 2.59-1.9c.31-.23.49-.58.49-.86z" />
                            <path d="M5.38 21.67l9.02-6.57-3.57-2.6-7.85 5.72z" />
                          </svg>
                          <div className="flex flex-col leading-tight">
                            <span className="text-[10px] uppercase tracking-wide text-zinc-500">Get it on</span>
                            <span className="text-sm font-medium">Google Play (Android)</span>
                          </div>
                        </Link>
                      </div>
                      <ModalFooter className="mt-6 gap-3">
                        <button className="w-28 rounded-md border bg-gray-200 px-2 py-1 text-sm text-black dark:border-black dark:bg-black dark:text-white">Close</button>
                      </ModalFooter>
                    </ModalContent>
                  </ModalBody>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};


