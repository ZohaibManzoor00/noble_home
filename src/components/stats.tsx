import { stats } from "@/content/site";

function splitStat(value: string): { num: string; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  return match
    ? { num: match[1], suffix: match[2] }
    : { num: value, suffix: "" };
}

export function Stats() {
  return (
    <section>
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const { num, suffix } = splitStat(stat.value);
            return (
              <div
                key={stat.value}
                className="hero-enter flex flex-col gap-3 px-2 md:px-6"
              >
                <span className="text-6xl font-light tracking-tight text-[var(--color-ink-inv)] md:text-7xl">
                  {num}
                  <span className="font-normal text-[var(--color-accent)]">
                    {suffix}
                  </span>
                </span>
                <p className="max-w-56 text-md leading-6 tracking-[-0.01em] text-white font-semibold">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
