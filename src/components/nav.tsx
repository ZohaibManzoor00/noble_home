import { brand, navLinks } from "@/content/site";
import Image from "next/image";
import Link from "next/link";
import { PillButton } from "./ui/pill-button";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center text-[var(--color-panel)]"
      aria-label={`${brand.name} home`}
    >
      <Image src="/logo-1.png" alt={brand.name} width={50} height={50} />
      <span className="text-2xl font-semibold tracking-[-0.07em] text-[#09392d] -ml-0.5">
        {brand.name}
        <span
          aria-hidden="true"
          className="ml-0.5 inline-block h-1 w-1 rounded-full bg-[#139766] align-baseline"
        />
      </span>
    </Link>
  );
}

export function Nav() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto flex w-full max-w-[1380px] items-center justify-between px-2 py-3">
        <Logo />
        <nav className="hidden md:block">
          <ul className="flex items-center gap-9 text-sm font-medium text-[var(--color-ink)]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-green-700 font-semibold text-lg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:pr-2">
          <PillButton href="#contact" variant="dark">
            <span className="font-bold text-[16px]">Book Now</span>
          </PillButton>
        </div>
      </div>
    </header>
  );
}
