import Image from "next/image";
import { about } from "@/content/site";
import { CheckIcon } from "./ui/arrow-icon";
import { PillButton } from "./ui/pill-button";
import { SectionEyebrow } from "./ui/section-eyebrow";

export function About() {
  return (
    <section id="about" className="px-4 md:px-6">
      <div className="mx-auto mt-24 grid w-full max-w-[1280px] grid-cols-1 gap-10 md:mt-32 lg:grid-cols-12 lg:gap-16">
        <div className="overflow-hidden rounded-[var(--radius-panel)] lg:col-span-6">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center lg:col-span-6">
          <SectionEyebrow>{about.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.02em] text-[var(--color-panel)] md:text-5xl lg:text-[56px] lg:leading-[1.05]">
            {about.heading}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--color-ink-2)] md:text-lg">
            {about.description}
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {about.pills.map((pill) => (
              <li
                key={pill}
                className="flex items-center gap-3 text-sm text-[var(--color-ink)]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-accent-ink)]">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {pill}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <PillButton href={about.cta.href} variant="dark">
              {about.cta.label}
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
