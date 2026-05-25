import { marqueeWords } from "@/content/site";

export function Marquee() {
  // Two copies side-by-side so the -50% keyframe wraps seamlessly.
  const items = [...marqueeWords, ...marqueeWords];

  return (
    <section aria-hidden="true" className="px-4 md:px-6">
      <div className="mx-auto mt-24 w-full max-w-[1280px] overflow-hidden rounded-[var(--radius-panel)] bg-[var(--color-panel)] py-8 md:mt-32">
        <div className="marquee-track">
          {items.map((word, i) => (
            <span
              // biome-ignore lint/suspicious/noArrayIndexKey: decorative loop
              key={i}
              className="mx-10 flex items-center gap-10 text-4xl font-medium tracking-tight text-[var(--color-ink-inv)] md:text-6xl"
            >
              {word}
              <span
                className="inline-block h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]"
                aria-hidden="true"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
