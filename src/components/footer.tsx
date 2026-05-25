import Link from "next/link";
import { brand, footer } from "@/content/site";

export function Footer() {
  return (
    <footer id="contact" className="px-4 md:px-6">
      <div className="mx-auto mt-16 mb-8 w-full max-w-[1280px] rounded-[var(--radius-panel)] bg-[var(--color-bg-card)] px-8 py-12 md:px-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-[var(--color-panel)]"
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
            <p className="mt-6 max-w-sm text-sm leading-6 text-[var(--color-ink-2)]">
              {footer.blurb}
            </p>

            <div className="mt-8">
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-2)]">
                {footer.hoursTitle}
              </h3>
              <p className="mt-3 text-sm text-[var(--color-ink)]">
                {footer.hoursMain}
              </p>
              <p className="text-sm text-[var(--color-ink-2)]">
                {footer.hoursSecondary}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:col-span-8 lg:grid-cols-3">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-2)]">
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-[var(--color-ink)]">
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
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-2)]">
                {footer.contactTitle}
              </h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-[var(--color-ink)]">
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

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-ink-2)] sm:flex-row sm:items-center">
          <p>{brand.copyright}</p>
          <p>Designed with care for spotless homes.</p>
        </div>
      </div>
    </footer>
  );
}
