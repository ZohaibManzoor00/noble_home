import { faq } from "@/content/site";
import { PlusIcon } from "./ui/arrow-icon";
import { SectionEyebrow } from "./ui/section-eyebrow";

export function Faq() {
  return (
    <section>
      <div className="mx-auto mt-24 w-full max-w-[1280px] md:mt-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionEyebrow>{faq.eyebrow}</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.02em] text-[var(--color-panel)] md:text-5xl lg:text-[56px] lg:leading-[1.05]">
              {faq.heading}
            </h2>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-7">
            {faq.items.map((item) => (
              <details
                key={item.q}
                className="faq-item group rounded-[var(--radius-card)] bg-[var(--color-bg-card)] px-6 py-5 md:px-8 md:py-6"
              >
                <summary className="flex items-center justify-between gap-6 text-base font-medium text-[var(--color-panel)] md:text-lg">
                  <span>{item.q}</span>
                  <span className="faq-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg)] text-[var(--color-panel)] group-open:bg-[var(--color-accent)]">
                    <PlusIcon className="h-4 w-4" />
                  </span>
                </summary>
                <div className="faq-body">
                  <div>
                    <p className="pt-4 text-sm leading-7 text-[var(--color-ink-2)] md:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
