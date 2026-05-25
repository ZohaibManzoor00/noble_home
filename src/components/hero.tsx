import { hero } from "@/content/site";
import Image from "next/image";
import Link from "next/link";
import { Stats } from "./stats";
import { ChevronRightIcon, StarIcon } from "./ui/arrow-icon";
import { PillButton } from "./ui/pill-button";

export function Hero() {
  return (
    <section>
      <div className="w-full overflow-hidden rounded-xl bg-[var(--color-panel)] text-[var(--color-ink-inv)]">
        <div className="px-6 pt-10 pb-0 md:px-12 md:pt-16 lg:px-16 lg:pt-20">
          <div className="flex items-center gap-2 text-sm text-[var(--color-ink-inv-2)]">
            <StarIcon className="h-4 w-4 text-[var(--color-accent)]" />
            <span>{hero.rating}</span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h1 className="text-[44px] leading-[1.02] font-medium tracking-[-0.02em] sm:text-[56px] md:text-[68px] lg:text-[80px]">
                {hero.headlineStart}
                <br />
                {hero.headlineEnd}{" "}
                <span className="italic font-normal text-[var(--color-accent)]">
                  {hero.headlineHighlight}
                </span>{" "}
                {hero.headlineTail}
              </h1>
            </div>
            <div className="flex flex-col justify-end gap-6 lg:col-span-5">
              <p className="max-w-md text-base leading-7 text-[var(--color-ink-inv-2)] md:text-lg">
                {hero.description}
              </p>
              <div className="flex items-center gap-5">
                <PillButton href={hero.primaryCta.href} variant="accent">
                  {hero.primaryCta.label}
                </PillButton>
                <Link
                  href={hero.secondaryCta.href}
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:opacity-80"
                >
                  {hero.secondaryCta.label}
                  <ChevronRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden pb-6 md:mt-16 md:pb-8 lg:pb-10">
          <div className="marquee-track gap-3 [animation-duration:45s] md:gap-4">
            {[
              ...hero.photos.map((p) => ({ ...p, dup: false })),
              ...hero.photos.map((p) => ({ ...p, dup: true })),
            ].map((photo, position) => (
              <div
                key={photo.dup ? `${photo.src}-dup` : photo.src}
                aria-hidden={photo.dup}
                className={`photo-card relative aspect-[3/4] w-[220px] shrink-0 overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-panel-soft)] md:w-[280px] lg:w-[320px] ${
                  position % 2 === 0 ? "md:translate-y-6" : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.dup ? "" : photo.alt}
                  fill
                  sizes="320px"
                  className="object-cover"
                  priority={!photo.dup && position < 2}
                />
              </div>
            ))}
          </div>
        </div>

      <Stats />
      </div>
    </section>
  );
}
