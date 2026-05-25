import { marqueeWords } from "@/content/site";
import Image from "next/image";

export function Marquee() {
  const items = [...marqueeWords, ...marqueeWords];

  return (
    <section aria-hidden="true">
      <div className="mx-auto mt-24 w-full overflow-hidden rounded-[var(--radius-panel)] bg-[#0f3a2e] py-8 md:mt-32">
        <div className="marquee-track">
          {items.map((word, i) => (
            <span
              // biome-ignore lint/suspicious/noArrayIndexKey: decorative loop
              key={i}
              className="mx-10 flex items-center gap-10 text-4xl tracking-tight uppercase text-[var(--color-ink-inv)] md:text-6xl"
            >
              {word}
              <Image
                src="/logo-1.png"
                alt="Noble Home"
                width={60}
                height={40}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
