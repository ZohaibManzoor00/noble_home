import { trustedBy } from "@/content/site";

export function TrustedBy() {
  return (
    <section className="px-4 md:px-6">
      <div className="mx-auto mt-24 grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 md:mt-32 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 className="max-w-2xl text-3xl font-medium tracking-[-0.02em] text-[var(--color-panel)] md:text-4xl lg:text-[44px] lg:leading-[1.1]">
            {trustedBy.eyebrow}
          </h2>
        </div>
        <div className="flex items-center gap-6 lg:col-span-5">
          <span className="text-5xl font-medium tracking-tight text-[var(--color-panel)] md:text-6xl">
            {trustedBy.value}
          </span>
          <p className="max-w-xs text-sm text-[var(--color-ink-2)]">
            {trustedBy.label}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-[1280px] flex-wrap items-center justify-between gap-6 border-y border-[var(--color-line)] py-6 opacity-70">
        {["Northwind", "Acme Co.", "Globex", "Hooli", "Initech", "Umbra"].map(
          (logo) => (
            <span
              key={logo}
              className="text-lg font-medium tracking-tight text-[var(--color-ink-2)]"
            >
              {logo}
            </span>
          ),
        )}
      </div>
    </section>
  );
}
