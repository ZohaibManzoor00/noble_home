import { process } from "@/content/site";
import { PillButton } from "./ui/pill-button";
import { SectionEyebrow } from "./ui/section-eyebrow";

export function Process() {
  return (
    <section className="px-4 md:px-6">
      <div className="mx-auto mt-24 w-full max-w-[1280px] md:mt-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionEyebrow>{process.eyebrow}</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.02em] text-[var(--color-panel)] md:text-5xl lg:text-[56px] lg:leading-[1.05]">
              {process.heading}
            </h2>
          </div>
          <div className="flex items-end lg:col-span-6">
            <PillButton href={process.cta.href} variant="dark">
              {process.cta.label}
            </PillButton>
          </div>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {process.steps.map((step) => (
            <li
              key={step.index}
              className="flex flex-col gap-6 rounded-[var(--radius-panel)] bg-[var(--color-bg-card)] p-8 md:p-10"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-medium text-[var(--color-accent-ink)]">
                {step.index}
              </span>
              <h3 className="text-2xl font-medium tracking-tight text-[var(--color-panel)] md:text-3xl">
                {step.title}
              </h3>
              <p className="text-sm leading-6 text-[var(--color-ink-2)] md:text-base">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
