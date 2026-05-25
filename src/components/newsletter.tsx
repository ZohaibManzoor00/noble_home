import { subscribeNewsletter } from "@/app/actions";
import { newsletter } from "@/content/site";
import { ArrowIcon } from "./ui/arrow-icon";

export function Newsletter({ status }: { status?: "ok" | "error" }) {
  return (
    <section id="newsletter" className="px-4 md:px-6">
      <div className="mx-auto mt-24 w-full max-w-[1280px] overflow-hidden rounded-[var(--radius-panel)] bg-[var(--color-panel)] px-6 py-16 text-[var(--color-ink-inv)] md:mt-32 md:px-12 md:py-20 lg:px-20 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.02em] md:text-5xl lg:text-[64px] lg:leading-[1.05]">
            {newsletter.heading}
          </h2>
          <p className="mt-4 text-sm text-[var(--color-ink-inv-2)] md:text-base">
            {newsletter.caption}
          </p>

          <form
            action={subscribeNewsletter}
            className="mt-10 flex w-full max-w-xl items-center gap-2 rounded-full bg-[var(--color-panel-soft)] p-1.5"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-5 py-3 text-sm text-[var(--color-ink-inv)] placeholder:text-[var(--color-ink-inv-2)] focus:outline-none"
            />
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-[var(--color-accent-ink)] transition-all hover:brightness-95"
            >
              Subscribe
              <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </form>

          {status === "ok" ? (
            <p className="mt-5 text-sm text-[var(--color-accent)]">
              {newsletter.successMessage}
            </p>
          ) : null}
          {status === "error" ? (
            <p className="mt-5 text-sm text-red-300">
              {newsletter.errorMessage}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
