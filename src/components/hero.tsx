import { hero } from "@/content/site";
import Image from "next/image";
import Link from "next/link";
import { Stats } from "./stats";
import { ChevronRightIcon } from "./ui/arrow-icon";
import { PillButton } from "./ui/pill-button";

export function Hero() {
  return (
    <section>
      <div className="w-full overflow-hidden rounded-xl bg-[var(--color-panel)] text-[var(--color-ink-inv)]">
        {/* <div className="px-4 pt-10 pb-0 md:pt-16 lg:pt-16 mx-auto max-w-[1280px]"> */}
        <div className="px-4 pt-10 pb-0 md:pt-16 lg:pt-16 mx-auto max-w-[1340px]">
          {/* <div className="flex items-center gap-2 pl-1 text-sm text-[var(--color-ink-inv-2)]">
            <StarIcon className="h-6 w-6 text-[#28d790]" />
            <span className="text-white font-semibold">{hero.rating}</span>
          </div> */}

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              {/* <h1 className="text-[44px] leading-[1.02] font-light tracking-[-0.06em] sm:text-[56px] md:text-[68px] lg:text-[80px]"> */}
              <h1 className="text-[44px] leading-[1.02] tracking-[-0.06em] sm:text-[56px] md:text-[68px] lg:text-[80px]">
                {hero.headlineStart}
                <br />
                {hero.headlineEnd}{" "}
                <span className="italic font-normal text-[var(--color-accent)] mr-1 -ml-1">
                  {hero.headlineHighlight}
                </span>{" "}
                {hero.headlineTail}
              </h1>
            </div>
            <div className="flex flex-col justify-end gap-6 lg:col-span-5">
              <p className="max-w-md text-lg font-semibold leading-7 tracking-[-0.01em] text-white">
                {hero.description}
              </p>
              <div className="flex items-center gap-5">
                <PillButton href={hero.primaryCta.href} variant="accent">
                  <span className="font-bold text-[16px]">
                    {hero.primaryCta.label}
                  </span>
                </PillButton>
                <Link
                  href={hero.secondaryCta.href}
                  className="group font-bold inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)] hover:opacity-80"
                >
                  {hero.secondaryCta.label}
                  <ChevronRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-photo-strip mt-12 overflow-hidden md:mt-16">
          <div className="marquee-track items-end gap-3 [animation-duration:45s] md:gap-4">
            {[
              ...hero.photos.map((p) => ({ ...p, dup: false })),
              ...hero.photos.map((p) => ({ ...p, dup: true })),
            ].map((photo, position) => (
              <div
                key={photo.dup ? `${photo.src}-dup` : photo.src}
                aria-hidden={photo.dup}
                style={{
                  width: `calc(${photo.width}px * var(--photo-scale))`,
                  height: `calc(${photo.height}px * var(--photo-scale))`,
                }}
                className="photo-card relative shrink-0 overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-panel-soft)]"
              >
                <Image
                  src={photo.src}
                  alt={photo.dup ? "" : photo.alt}
                  fill
                  sizes={`${photo.width}px`}
                  className="object-cover"
                  priority={!photo.dup && position < 2}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16" />
        <Stats />
        <div className="h-16" />
      </div>
    </section>
  );
}
