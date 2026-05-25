import Image from "next/image";
import Link from "next/link";
import { hero } from "@/content/site";
import { ChevronRightIcon, StarIcon } from "./ui/arrow-icon";
import { PillButton } from "./ui/pill-button";

export function Hero() {
  return (
    <section className="px-4 md:px-6">
      <div className="mx-auto w-full max-w-[1280px] overflow-hidden rounded-[var(--radius-panel)] bg-[var(--color-panel)] text-[var(--color-ink-inv)]">
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

        <div className="mt-12 grid grid-cols-2 gap-3 px-6 pb-6 md:mt-16 md:grid-cols-4 md:gap-4 md:px-8 md:pb-8 lg:px-10 lg:pb-10">
          {hero.photos.map((photo, i) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: static content
              key={i}
              className={`photo-card relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-panel-soft)] ${
                i === 0 || i === 2
                  ? "aspect-[3/4] md:translate-y-6"
                  : "aspect-[3/4]"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                priority={i < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
