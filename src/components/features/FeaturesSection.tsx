import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FeaturePreviewCard } from "@/components/features/FeaturePreviewCard";

const MESCHAC_AVATAR = "https://avatars.githubusercontent.com/u/47919550?v=4";
const BERNARD_AVATAR = "https://avatars.githubusercontent.com/u/31113941?v=4";
const THEO_AVATAR = "https://avatars.githubusercontent.com/u/68236786?v=4";
const GLODIE_AVATAR = "https://avatars.githubusercontent.com/u/99137927?v=4";

export default function FeaturesSection() {
  return (
<section>
  <div className="py-24">
    <div className="mx-auto w-full max-w-5xl px-6">
      <h2 className="text-balance text-3xl font-semibold text-foreground md:text-4xl">
        <span className="text-muted-foreground">Revolutionizing parking ticket payments</span>
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
        {/* 1) Scan & Track — wide */}
        <div className="sm:col-span-2 flex flex-col gap-4">
          <FeaturePreviewCard className="mb-8 md:mb-12 lg:mb-16">
            <div className="mx-auto max-w-3xl px-4 pt-8 aspect-[21/9]">
              <ScanTrackIllustration />
            </div>
          </FeaturePreviewCard>
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-lg font-semibold text-foreground">Scan & track every ticket in one place</h3>
            <p className="text-balance text-muted-foreground">
              Point your camera at the barcode—nomo pulls the amount, due date, and agency automatically.
            </p>
            <p className="text-balance text-muted-foreground">Live status, reminders, and history across cities.</p>
          </div>
        </div>

        {/* 2) Apple Pay */}
        <div className="flex flex-col gap-4">
          <FeaturePreviewCard className="p-6 flex items-center justify-center overflow-hidden">
            <div className="w-full aspect-[16/9] flex items-center justify-center">
              <ApplePayIllustration />
            </div>
          </FeaturePreviewCard>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold leading-snug text-foreground">Pay in seconds with Apple Pay</h3>
            <p className="text-balance text-muted-foreground">
              Two taps, instant confirmation—we pay the city so you avoid late fees.
            </p>
            <p className="text-balance text-muted-foreground">Receipts saved to your timeline.</p>
          </div>
        </div>

        {/* 3) Payment Plans */}
        <div className="flex flex-col gap-4">
          <FeaturePreviewCard className="p-6 flex items-center justify-center overflow-hidden">
            <div className="w-full aspect-[16/9] flex items-center justify-center">
              <PaymentPlanIllustration />
            </div>
          </FeaturePreviewCard>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold leading-snug text-foreground">Stop disproportionate fines & fees</h3>
            <p className="text-balance text-muted-foreground">Split your ticket into predictable installments with clear terms.</p>
            <p className="text-balance text-muted-foreground">Autopay + reminders; pay off early anytime.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

const ScanTrackIllustration = () => {
  return (
    <div className="relative">
      <div className="mx-auto w-full max-w-[18rem] rounded-3xl border bg-white p-3 shadow-md">
        <div className="mb-3 flex items-center justify-between">
          <div className="h-2 w-12 rounded-full bg-zinc-200" />
          <div className="h-2 w-8 rounded-full bg-zinc-200" />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-50">
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-40 [--c:rgba(0,0,0,0.06)] [background-image:linear-gradient(var(--c)_1px,transparent_1px),linear-gradient(90deg,var(--c)_1px,transparent_1px)] [background-size:33.33%_100%,100%_33.33%]" />
          <div className="absolute left-1/2 top-1/2 h-10 w-44 -translate-x-1/2 -translate-y-1/2 rounded bg-white/80 p-2 shadow">
            <div className="flex h-full items-end gap-0.5">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="h-[80%] w-0.5 bg-black" style={{ opacity: i % 3 === 0 ? 0.9 : 0.6 }} />
              ))}
            </div>
          </div>
          <div className="absolute inset-6">
            <div className="absolute left-0 top-0 h-6 w-6 rounded-tl-xl border-l-2 border-t-2 border-black/50" />
            <div className="absolute right-0 top-0 h-6 w-6 rounded-tr-xl border-r-2 border-t-2 border-black/50" />
            <div className="absolute bottom-0 left-0 h-6 w-6 rounded-bl-xl border-b-2 border-l-2 border-black/50" />
            <div className="absolute bottom-0 right-0 h-6 w-6 rounded-br-xl border-b-2 border-r-2 border-black/50" />
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-500">Amount</span>
            <span className="h-3 w-14 rounded bg-zinc-200" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-500">Due date</span>
            <span className="h-3 w-20 rounded bg-zinc-200" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-500">Agency</span>
            <span className="h-3 w-24 rounded bg-zinc-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ApplePayIllustration = () => {
  return (
    <div className="relative">
      <div className="mx-auto flex h-[210px] w-full max-w-[18rem] flex-col rounded-3xl border bg-white p-3 shadow-md">
        {/* Apple Pay card */}
        <div className="rounded-xl bg-black p-4 text-white">
          <div className="mb-6 flex items-center justify-between">
            <div className="h-3 w-16 rounded bg-white/20" />
            <div className="h-3 w-8 rounded bg-white/20" />
          </div>
          <div className="mb-4 h-2 w-24 rounded bg-white/30" />
          <div className="flex items-center justify-between">
            <div className="h-3 w-14 rounded bg-white/25" />
            <div className="h-7 w-20 rounded-md bg-white/90" />
          </div>
        </div>
        {/* Confirmation bar */}
        <div className="mt-auto flex items-center justify-between rounded-lg border p-2">
          <span className="h-3 w-24 rounded bg-zinc-200" />
          <span className="h-3 w-12 rounded bg-zinc-200" />
        </div>
      </div>
    </div>
  );
};

const PaymentPlanIllustration = () => {
  return (
    <div className="relative">
      <div className="mx-auto flex h-[210px] w-full max-w-[18rem] flex-col rounded-3xl border bg-white p-3 shadow-md">
        {/* Header */}
        <div className="mb-3 flex items-center justify-between">
          <div className="h-2 w-16 rounded-full bg-zinc-200" />
          <div className="h-2 w-8 rounded-full bg-zinc-200" />
        </div>
        {/* Plan rows */}
        <div className="flex-1 space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between rounded-lg border p-2">
              <div className="flex items-center gap-2">
                <div className="size-4 rounded-full border-2 border-zinc-300" />
                <div className="h-3 w-24 rounded bg-zinc-200" />
              </div>
              <div className="h-3 w-12 rounded bg-zinc-200" />
            </div>
          ))}
        </div>
        {/* Autopay toggle */}
        <div className="mt-auto flex items-center justify-between rounded-lg border p-2">
          <span className="text-xs text-zinc-500">Autopay</span>
          <div className="h-5 w-10 rounded-full bg-zinc-200" />
        </div>
      </div>
    </div>
  );
};

const MeetingIllustration = () => {
  return (
    <Card aria-hidden className="p-4">
      <div className="mb-0.5 text-sm font-semibold">Reminder Setup</div>
      <div className="mb-4 flex gap-2 text-sm">
        <span className="text-muted-foreground">Today · 3:45 PM</span>
      </div>
      <div className="mb-2 flex -space-x-1.5">
        <div className="flex -space-x-1.5">
          {[MESCHAC_AVATAR, BERNARD_AVATAR, THEO_AVATAR, GLODIE_AVATAR].map((src, index) => (
            <div key={index} className="size-7 rounded-full border bg-background p-0.5 shadow shadow-zinc-950/5">
              <img className="aspect-square rounded-full object-cover" src={src} alt="avatar" height="460" width="460" />
            </div>
          ))}
        </div>
      </div>
      <div className="text-sm font-medium text-muted-foreground">Notify teammates automatically</div>
    </Card>
  );
};

const CodeReviewIllustration = () => {
  return (
    <div aria-hidden className="relative">
      <Card className="aspect-video w-4/5 translate-y-2 p-3">
        <div className="mb-3 grid grid-cols-[auto_1fr] gap-2">
          <div className="size-6 rounded-full border bg-background p-0.5 shadow shadow-zinc-950/5">
            <img className="aspect-square rounded-full object-cover" src={MESCHAC_AVATAR} alt="M Irung" height="460" width="460" />
          </div>
          <div className="flex items-center gap-1">
            <span className="line-clamp-1 text-sm font-medium text-muted-foreground">Méschac Irung</span>
            <span className="text-xs text-muted-foreground/75">2m</span>
          </div>
        </div>
        <div className="ml-8 space-y-2">
          <div className="h-2 rounded-full bg-foreground/10"></div>
          <div className="h-2 w-3/5 rounded-full bg-foreground/10"></div>
          <div className="h-2 w-1/2 rounded-full bg-foreground/10"></div>
        </div>
      </Card>
      <Card className="aspect-3/5 absolute right-0 top-4 flex w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3">
        <div className="m-auto flex size-10 rounded-full bg-foreground/5"></div>
      </Card>
    </div>
  );
};

const AIAssistantIllustration = () => {
  return (
    <Card aria-hidden className="p-4 transition-transform duration-200 group-hover:translate-y-0">
      <div className="ml-auto w-fit max-w-3/4">
        <p className="border-foreground/5 bg-foreground/5 mb-2 rounded-l-2xl rounded-br rounded-t-2xl border p-4 text-sm">Paying a ticket? I can pull it up and suggest a plan.</p>
        <span className="block text-right text-xs text-muted-foreground">Now</span>
      </div>
      <div className="w-fit">
        <p className="mt-2 line-clamp-2 text-sm">How can I avoid late fees while paying in installments?</p>
      </div>
      <div className="-mx-3 -mb-3 mt-3 space-y-3 rounded-lg bg-foreground/5 p-3">
        <div className="text-sm text-muted-foreground">Quick actions</div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-2xl bg-transparent shadow-none" />
            <Button variant="outline" size="icon" className="rounded-2xl bg-transparent shadow-none" />
          </div>
          <Button size="icon" className="rounded-2xl bg-black" />
        </div>
      </div>
    </Card>
  );
};


