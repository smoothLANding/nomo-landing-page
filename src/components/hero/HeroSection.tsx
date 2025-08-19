import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "@/components/icons";
import { StickyHeroMedia } from "@/components/hero/StickyHeroMedia";
import GradientText from "../ui/GradientText";

export const HeroSection: React.FC = () => {
  return (
    <main>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute left-[-10rem] top-[-8rem] h-[36rem] w-[36rem] -rotate-45 rounded-full bg-[radial-gradient(60%_60%_at_50%_50%,rgba(200,200,200,0.10)_0%,rgba(200,200,200,0.04)_60%,transparent_100%)]" />
        <div className="absolute right-[-12rem] top-[10rem] h-[28rem] w-[28rem] rotate-12 rounded-full bg-[radial-gradient(60%_60%_at_50%_50%,rgba(200,200,200,0.08)_0%,rgba(200,200,200,0.04)_60%,transparent_100%)]" />
      </div>

      <section>
        <div className="relative pt-24 md:pt-36">
          {/* Remove white radial wash so sitewide amber gradient is visible */}

          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
              <Link
                href="#link"
                className="group mx-auto flex w-fit items-center gap-4 rounded-full border bg-white p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 hover:bg-white">
                <span className="text-sm text-foreground">Pay your parking tickets with nomo</span>
                <span className="block h-4 w-px bg-zinc-200 dark:bg-zinc-700" />
                <span className="relative inline-flex size-6 overflow-hidden rounded-full bg-background">
                  <span className="absolute inset-0 flex w-12 -translate-x-1/2 items-center justify-start transition-transform duration-500 group-hover:translate-x-0">
                    <ArrowRight className="mx-1 size-3" />
                    <ArrowRight className="mx-1 size-3" />
                  </span>
                </span>
              </Link>

              <h1 className="mt-8 text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">Parking tickets, simplified.</h1>
              <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-zinc-600 dark:text-zinc-400">
              Instantly look up your fine, choose a plan, and avoid late-fee chaos.
              </p>

              <div className="mt-10 flex items-center justify-center">
                <div className="rounded-xl border p-0.5">
                  <Button asChild size="lg" className="rounded-xl px-5 text-base">
                    <Link href="#link">
                        <span className="text-nowrap">Try<GradientText preset="rainbow" animate className="font-bold"> nomo</GradientText> for free</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <StickyHeroMedia pinHeightVh={260} topOffsetPx={72} />
        </div>
      </section>


    </main>
  );
};


