import { stats } from "@/content/site";

export function Stats() {
  return (
    <section className="px-4 md:px-6">
      <div className="mx-auto mt-20 w-full max-w-[1280px] md:mt-28">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className={`flex flex-col gap-3 px-2 md:px-6 ${
                i > 0 ? "lg:border-l lg:border-[var(--color-line)]" : ""
              }`}
            >
              <span className="text-5xl font-medium tracking-tight text-[var(--color-panel)] md:text-6xl">
                {stat.value}
              </span>
              <p className="max-w-[14rem] text-sm leading-6 text-[var(--color-ink-2)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
