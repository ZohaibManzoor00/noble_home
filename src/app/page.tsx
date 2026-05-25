import { About } from "@/components/about";
// import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Nav } from "@/components/nav";
// import { Pricing } from "@/components/pricing";
// import { Process } from "@/components/process";
// import { Services } from "@/components/services";
// import { Testimonials } from "@/components/testimonials";
// import { WhyChooseUs } from "@/components/why-choose-us";
import { TrustedBy } from "@/components/trusted-by";

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: PageProps) {
  const sp = await searchParams;
  const subscribed =
    sp.subscribed === "ok"
      ? "ok"
      : sp.subscribed === "error"
        ? "error"
        : undefined;

  return (
    <main className="flex flex-1 flex-col">
      <Nav />
      <div className="flex flex-col px-1 lg:px-2.5">
        <Hero />
        <TrustedBy />
        <About />
        {/* <WhyChooseUs />
        <Services />
        <Process />
        <Pricing />
        <Testimonials /> */}
        {/* <Faq /> */}
      </div>
      <Marquee />

      <div className="flex flex-col px-1 lg:px-2.5">
        <Footer subscribed={subscribed} />
      </div>
    </main>
  );
}
