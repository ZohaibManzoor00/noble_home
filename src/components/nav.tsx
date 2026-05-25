import Link from "next/link";
import { brand, navLinks } from "@/content/site";
import { PillButton } from "./ui/pill-button";
import Image from "next/image";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-[var(--color-panel)]"
      aria-label={`${brand.name} home`}
    >
      <Image src="/logo-1.png" alt={brand.name} width={50} height={50} />
      <span className="text-2xl font-semibold tracking-tight">
        {brand.name}
        <span className="text-[var(--color-accent)] text-2xl">.</span>
      </span>
    </Link>
  );
}

export function Nav() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-2 py-3 md:px-0">
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
          <span className="font-bold text-md">Book Now</span>
        </PillButton>
      </div>
    </header>
  );
}
