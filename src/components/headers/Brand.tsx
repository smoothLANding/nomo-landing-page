import Link from "next/link";
import { Logo } from "@/components/logo";

export function Brand({ size = 44 }: { size?: number }) {
  return (
    <Link href="/" aria-label="home" className="flex items-center gap-2">
      <Logo width={size} height={size} />
      <span className="font-kind-sans text-2xl font-semibold tracking-tight">nomo</span>
    </Link>
  );
}


