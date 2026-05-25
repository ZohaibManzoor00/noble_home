import Image from "next/image";
import { testimonials } from "@/content/site";
import { StarIcon } from "./ui/arrow-icon";
import { SectionEyebrow } from "./ui/section-eyebrow";

export function Testimonials() {
  return (
    <section id="testimonials" className="px-4 md:px-6">
      <div className="mx-auto mt-24 w-full max-w-[1280px] md:mt-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionEyebrow>{testimonials.eyebrow}</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.02em] text-[var(--color-panel)] md:text-5xl lg:text-[56px] lg:leading-[1.05]">
              {testimonials.heading}
            </h2>
          </div>
          <div className="flex items-end lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-[var(--color-accent-ink)]">
              <StarIcon className="h-4 w-4" />
              {testimonials.badge}
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-8 rounded-[var(--radius-panel)] bg-[var(--color-bg-card)] p-8 md:p-10"
            >
              <div className="flex gap-1 text-[var(--color-accent)]">
                {["s1", "s2", "s3", "s4", "s5"].map((id) => (
                  <StarIcon key={id} className="h-5 w-5" />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed text-[var(--color-ink)] md:text-xl">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-4">
                <span className="relative h-12 w-12 overflow-hidden rounded-full bg-[var(--color-line)]">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-medium text-[var(--color-panel)]">
                    {t.name}
                  </span>
                  <span className="text-xs text-[var(--color-ink-2)]">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
