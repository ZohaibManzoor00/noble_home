import Link from "next/link";
import { brand, navLinks } from "@/content/site";
import { PillButton } from "./ui/pill-button";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-[var(--color-panel)]"
      aria-label={`${brand.name} home`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 text-[var(--color-accent)]"
        aria-hidden="true"
      >
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
          fill="currentColor"
        />
      </svg>
      <span className="text-lg font-semibold tracking-tight">
        {brand.name}
        <span className="text-[var(--color-accent)]">.</span>
      </span>
    </Link>
  );
}

export function Nav() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-3 md:px-10">
        <Logo />
        <nav className="hidden md:block">
          <ul className="flex items-center gap-9 text-sm font-medium text-[var(--color-ink)]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-opacity hover:opacity-60 font-semibold text-lg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <PillButton href="#contact" variant="dark">
          Get Template
        </PillButton>
      </div>
    </header>
  );
}
