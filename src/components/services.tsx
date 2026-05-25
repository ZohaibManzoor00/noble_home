import Link from "next/link";
import { services } from "@/content/site";
import { ChevronRightIcon } from "./ui/arrow-icon";
import { SectionEyebrow } from "./ui/section-eyebrow";

export function Services() {
  return (
    <section id="services" className="px-4 md:px-6">
      <div className="mx-auto mt-24 w-full max-w-[1280px] md:mt-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionEyebrow>{services.eyebrow}</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.02em] text-[var(--color-panel)] md:text-5xl lg:text-[56px] lg:leading-[1.05]">
              {services.heading}
            </h2>
          </div>
          <div className="flex items-end lg:col-span-6">
            <p className="max-w-xl text-base leading-7 text-[var(--color-ink-2)] md:text-lg">
              {services.description}
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.items.map((service) => (
            <article
              key={service.title}
              className="flex flex-col gap-6 rounded-[var(--radius-panel)] bg-[var(--color-bg-card)] p-8 md:p-10"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-sm text-[var(--color-ink-2)]">
                  {service.index}
                </span>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-[var(--color-panel)] md:text-3xl">
                {service.title}
              </h3>
              <p className="text-sm leading-6 text-[var(--color-ink-2)] md:text-base">
                {service.description}
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-ink)]">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <Link
                  href={service.ctaHref}
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-panel)] hover:opacity-70"
                >
                  Book Service
                  <ChevronRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
