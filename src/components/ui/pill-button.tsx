import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowIcon } from "./arrow-icon";

type Variant = "accent" | "dark" | "light" | "outline";

const variantClasses: Record<Variant, string> = {
  accent:
    "bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:brightness-95",
  dark: "bg-[var(--color-pill)] text-[var(--color-ink-inv)] hover:bg-[var(--color-panel-soft)]",
  light:
    "bg-[var(--color-bg-card)] text-[var(--color-ink)] border border-[var(--color-line)] hover:bg-white",
  outline:
    "bg-transparent text-[var(--color-ink-inv)] border border-[var(--color-line-dark)] hover:bg-[var(--color-panel-soft)]",
};

const chipClasses: Record<Variant, string> = {
  accent: "bg-[var(--color-panel)] text-[var(--color-ink-inv)]",
  dark: "bg-[var(--color-accent)] text-[var(--color-accent-ink)]",
  light: "bg-[var(--color-panel)] text-[var(--color-ink-inv)]",
  outline: "bg-[var(--color-accent)] text-[var(--color-accent-ink)]",
};

export type PillButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  withChip?: boolean;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function PillButton({
  href,
  children,
  variant = "accent",
  withChip = true,
  className = "",
  ...rest
}: PillButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full pl-5 pr-1.5 py-1.5 text-sm font-medium transition-all duration-200 ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      <span className="py-1">{children}</span>
      {withChip ? (
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 ${chipClasses[variant]}`}
          aria-hidden="true"
        >
          <ArrowIcon className="h-4 w-4" />
        </span>
      ) : null}
    </Link>
  );
}
