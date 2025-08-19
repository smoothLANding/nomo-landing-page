import { Button } from '@/components/ui/button'
import Link from 'next/link'
import GradientText from '../ui/GradientText'

export default function StatsSection() {
  return (
    <section>
      <div className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-foreground text-balance text-3xl font-semibold lg:text-4xl">Parking tickets, <GradientText preset='sunset' animate>simplified</GradientText>.</h2>
            </div>
            <div className="flex justify-end gap-3">
              <Button
                asChild
                size="lg">
                <Link href="#">Try nomo now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


