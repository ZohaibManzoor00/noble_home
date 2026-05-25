import { pricing } from "@/content/site";
import { CheckIcon } from "./ui/arrow-icon";
import { PillButton } from "./ui/pill-button";
import { SectionEyebrow } from "./ui/section-eyebrow";

export function Pricing() {
  return (
    <section id="pricing" className="px-4 md:px-6">
      <div className="mx-auto mt-24 w-full max-w-[1280px] md:mt-32">
        <div className="flex flex-col items-center text-center">
          <SectionEyebrow>{pricing.eyebrow}</SectionEyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.02em] text-[var(--color-panel)] md:text-5xl lg:text-[56px] lg:leading-[1.05]">
            {pricing.heading}
          </h2>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center rounded-full bg-[var(--color-bg-card)] p-1.5 text-sm font-medium text-[var(--color-ink-2)]">
            <span className="rounded-full px-5 py-2">One Day</span>
            <span className="rounded-full px-5 py-2">Weekly</span>
            <span className="rounded-full px-5 py-2">Bi-Weekly</span>
            <span className="rounded-full bg-[var(--color-panel)] px-5 py-2 text-[var(--color-ink-inv)]">
              {pricing.cadenceLabel}
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {pricing.plans.map((plan) => {
            const featured = plan.featured;
            return (
              <article
                key={plan.name}
                className={`flex flex-col gap-6 rounded-[var(--radius-panel)] p-8 md:p-10 ${
                  featured
                    ? "bg-[var(--color-panel)] text-[var(--color-ink-inv)]"
                    : "bg-[var(--color-bg-card)] text-[var(--color-ink)]"
                }`}
              >
                <div className="flex flex-col gap-2">
                  <h3
                    className={`text-2xl font-medium tracking-tight ${
                      featured ? "text-white" : "text-[var(--color-panel)]"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm leading-6 ${
                      featured
                        ? "text-[var(--color-ink-inv-2)]"
                        : "text-[var(--color-ink-2)]"
                    }`}
                  >
                    {plan.blurb}
                  </p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-5xl font-medium tracking-tight ${
                      featured
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-panel)]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      featured
                        ? "text-[var(--color-ink-inv-2)]"
                        : "text-[var(--color-ink-2)]"
                    }`}
                  >
                    {plan.cadence}
                  </span>
                </div>

                <div>
                  <PillButton
                    href="#contact"
                    variant={featured ? "accent" : "dark"}
                  >
                    Book Now
                  </PillButton>
                </div>

                <ul
                  className={`mt-2 flex flex-col gap-3 border-t pt-6 text-sm ${
                    featured
                      ? "border-[var(--color-line-dark)]"
                      : "border-[var(--color-line)]"
                  }`}
                >
                  {plan.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full ${
                          featured
                            ? "bg-[var(--color-accent)] text-[var(--color-accent-ink)]"
                            : "bg-[var(--color-panel)] text-[var(--color-ink-inv)]"
                        }`}
                      >
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <span
                        className={
                          featured ? "text-[var(--color-ink-inv)]" : ""
                        }
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
