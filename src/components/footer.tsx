import Link from "next/link";
import { brand, footer } from "@/content/site";
import { Newsletter } from "./newsletter";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "./ui/arrow-icon";

const socialIconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  x: XIcon,
  linkedin: LinkedInIcon,
} as const;

export function Footer({ subscribed }: { subscribed?: "ok" | "error" }) {
  return (
    <footer id="contact" className="mt-24 mb-4 md:mt-32">
      <div className="mx-auto w-full overflow-hidden rounded-[var(--radius-panel)] bg-[var(--color-panel)] px-6 py-12 text-[var(--color-ink-inv)] md:px-12 md:py-16 lg:px-16 lg:py-20">
        <Newsletter status={subscribed} />

        <div className="my-12 h-px w-full bg-[var(--color-line-dark)] md:my-16" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-[var(--color-ink-inv)]"
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
            <p className="mt-6 max-w-sm text-sm leading-6 text-[var(--color-ink-inv-2)]">
              {footer.blurb}
            </p>

            <div className="mt-8">
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-inv-2)]">
                {footer.hoursTitle}
              </h3>
              <p className="mt-3 text-sm text-[var(--color-ink-inv)]">
                {footer.hoursMain}
              </p>
              <p className="text-sm text-[var(--color-ink-inv-2)]">
                {footer.hoursSecondary}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:col-span-8 lg:grid-cols-3">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-inv-2)]">
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-[var(--color-ink-inv)]">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="transition-opacity hover:opacity-60"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-inv-2)]">
                {footer.contactTitle}
              </h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-[var(--color-ink-inv)]">
                <li>
                  <a
                    href={`mailto:${footer.contactEmail}`}
                    className="transition-opacity hover:opacity-60"
                  >
                    {footer.contactEmail}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${footer.contactPhone.replace(/\s/g, "")}`}
                    className="transition-opacity hover:opacity-60"
                  >
                    {footer.contactPhone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-[var(--color-line-dark)] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-[var(--color-ink-inv-2)]">
            {brand.copyright}
          </p>
          <ul className="flex items-center gap-2">
            {footer.social.map((s) => {
              const Icon = socialIconMap[s.icon];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-accent-ink)] transition-transform duration-200 hover:scale-105"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
