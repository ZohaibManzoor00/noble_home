import { subscribeNewsletter } from "@/app/actions";
import { newsletter } from "@/content/site";
import { ArrowIcon } from "./ui/arrow-icon";

export function Newsletter({ status }: { status?: "ok" | "error" }) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
      <div>
        <h2 className="max-w-md text-3xl font-medium tracking-[-0.02em] text-[var(--color-ink-inv)] md:text-4xl lg:text-[44px] lg:leading-[1.1]">
          {newsletter.heading}
        </h2>
      </div>

      <div className="flex flex-col gap-3 lg:items-end">
        <form
          action={subscribeNewsletter}
          className="flex w-full max-w-md items-center gap-2 rounded-full bg-[var(--color-panel-soft)] p-1.5"
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

        <p className="text-sm text-[var(--color-ink-inv-2)] lg:text-right">
          {newsletter.caption}
        </p>

        {status === "ok" ? (
          <p className="text-sm text-[var(--color-accent)] lg:text-right">
            {newsletter.successMessage}
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-red-300 lg:text-right">
            {newsletter.errorMessage}
          </p>
        ) : null}
      </div>
    </div>
  );
}
