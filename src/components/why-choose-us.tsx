import { whyChooseUs } from "@/content/site";
import { PillButton } from "./ui/pill-button";
import { SectionEyebrow } from "./ui/section-eyebrow";

export function WhyChooseUs() {
  return (
    <section>
      <div className="mx-auto mt-24 w-full max-w-[1280px] overflow-hidden rounded-[var(--radius-panel)] bg-[var(--color-panel)] text-[var(--color-ink-inv)] md:mt-32">
        <div className="grid grid-cols-1 gap-10 px-6 py-12 md:px-12 md:py-16 lg:grid-cols-12 lg:gap-16 lg:px-16 lg:py-20">
          <div className="lg:col-span-6">
            <SectionEyebrow tone="dark">
              {whyChooseUs.eyebrowLeft}
            </SectionEyebrow>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.02em] md:text-5xl lg:text-[56px] lg:leading-[1.05]">
              {whyChooseUs.heading}
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6 lg:col-span-6">
            <p className="max-w-xl text-base leading-7 text-[var(--color-ink-inv-2)] md:text-lg">
              {whyChooseUs.description}
            </p>
            <div>
              <PillButton href={whyChooseUs.cta.href} variant="accent">
                {whyChooseUs.cta.label}
              </PillButton>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 border-t border-[var(--color-line-dark)] sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.features.map((f, i) => (
            <div
              key={f.title}
              className={`flex flex-col gap-3 px-8 py-10 md:px-10 md:py-12 ${
                i > 0
                  ? "border-t border-[var(--color-line-dark)] sm:border-t-0 sm:[&:nth-child(3)]:border-t sm:[&:nth-child(4)]:border-t sm:[&:nth-child(odd)]:border-l-0 sm:[&:nth-child(even)]:border-l sm:border-[var(--color-line-dark)] lg:border-t-0 lg:border-l"
                  : ""
              }`}
            >
              <h3 className="text-xl font-medium md:text-2xl">{f.title}</h3>
              <p className="text-sm leading-6 text-[var(--color-ink-inv-2)]">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
