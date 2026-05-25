type Tone = "light" | "dark";

export function SectionEyebrow({
  children,
  tone = "light",
  className = "",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const dot =
    tone === "dark" ? "bg-[var(--color-accent)]" : "bg-[var(--color-panel)]";
  const text =
    tone === "dark"
      ? "text-[var(--color-ink-inv-2)]"
      : "text-[var(--color-ink-2)]";
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] ${text} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} aria-hidden="true" />
      {children}
    </span>
  );
}
