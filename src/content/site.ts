// All site copy + image references live here.
// Edit this file to rebrand without touching any components.

export type NavLink = { label: string; href: string };
export type HeroPhoto = { src: string; alt: string };
export type Stat = { value: string; label: string };
export type Feature = { title: string; description: string };
export type Service = {
  index: string;
  title: string;
  description: string;
  bullets: string[];
  ctaHref: string;
};
export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};
export type PricingPlan = {
  name: string;
  blurb: string;
  price: string;
  cadence: string;
  bullets: string[];
  featured?: boolean;
};
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};
export type FaqItem = { q: string; a: string };
export type SocialLink = {
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "x" | "linkedin";
};

export const brand = {
  name: "Cleanora",
  tagline: "Bringing freshness to every little corner.",
  email: "Info@cleanora.com",
  phone: "+1 123 456 7899",
  hoursMain: "Monday to Saturday: 9 am – 5 pm",
  hoursSecondary: "Sunday is closed.",
  blurb:
    "At Cleanora, we deliver eco-friendly cleaning solutions tailored to your home.",
  copyright: "© 2026 Cleanora. All rights reserved.",
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  rating: "4.8/5 star on Trustpilot",
  headlineStart: "Bringing freshness",
  headlineHighlight: "every",
  headlineEnd: "to",
  headlineTail: "little corner.",
  description:
    "Experience meticulous cleaning that refreshes your home, enhances comfort, and brings care into every corner.",
  primaryCta: { label: "Book Now", href: "#contact" },
  secondaryCta: { label: "Learn more", href: "#about" },
  photos: [
    {
      src: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80",
      alt: "Houseplant beside a clean window",
    },
    {
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
      alt: "Professional cleaner organizing a shelf",
    },
    {
      src: "https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?auto=format&fit=crop&w=900&q=80",
      alt: "Hands wiping a monitor with a microfiber cloth",
    },
    {
      src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80",
      alt: "Cleaner in apron with yellow gloves",
    },
  ] satisfies HeroPhoto[],
};

export const stats: Stat[] = [
  {
    value: "99%",
    label: "Customer satisfaction for all homes and offices we maintain.",
  },
  {
    value: "250+",
    label: "Satisfied clients who trust us with their home or workspace.",
  },
  { value: "98%", label: "On-time arrival rate for scheduled appointments." },
  {
    value: "20+",
    label: "Years of professional cleaning experience you can rely on.",
  },
];

export const trustedBy = {
  eyebrow: "Trusted by Businesses and Homeowners.",
  value: "250+",
  label: "Satisfied clients who trust us with their home or workspace.",
};

export const about = {
  eyebrow: "About us",
  heading: "Where quality cleaning meets true care.",
  description:
    "At Cleanora, we believe a clean space creates comfort, health, and peace of mind. That's why we treat every home and workplace with care, respect, and attention to detail.",
  pills: [
    "Trusted Professionals.",
    "Flexible Scheduling.",
    "Eco-Friendly Products.",
    "Affordable Pricing.",
  ],
  cta: { label: "Get a Quote", href: "#contact" },
  image: {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    alt: "Cleaner with supplies smiling",
  },
};

export const whyChooseUs = {
  eyebrowLeft: "Why Choose us",
  heading: "Cleaning that goes beyond expectations.",
  description:
    "We combine experience, reliability, and attention to detail to deliver exceptional cleaning services. Our team is dedicated to making every home and workspace spotless, on time, and with complete customer satisfaction.",
  cta: { label: "Book Now", href: "#contact" },
  features: [
    {
      title: "Fast service",
      description:
        "We respond quickly and finish on time, keeping your space clean when you need it.",
    },
    {
      title: "Natural products",
      description:
        "We use eco-friendly supplies that protect your home, your family, and the planet.",
    },
    {
      title: "Experienced team",
      description:
        "Our cleaners are trained and skilled, ensuring professional results every single visit.",
    },
    {
      title: "Affordable pricing",
      description:
        "Affordable rates that give you high-quality cleaning without stretching your budget.",
    },
  ] satisfies Feature[],
};

export const services = {
  eyebrow: "Our Services",
  heading: "Services that make your space shine.",
  description:
    "Whether it's your home or your office, our reliable cleaning pros deliver fresh, spotless spaces with care, consistency, and attention to every detail.",
  items: [
    {
      index: "(01)",
      title: "Residential cleaning",
      description:
        "Routine cleaning designed to keep your home fresh, comfortable, and welcoming at all times.",
      bullets: [
        "Regular cleaning",
        "Dusting & vacuuming",
        "Kitchen cleaning",
        "Bathroom cleaning",
      ],
      ctaHref: "#contact",
    },
    {
      index: "(02)",
      title: "Deep cleaning",
      description:
        "A detailed, top-to-bottom clean that removes built-up dirt and refreshes your entire space.",
      bullets: [
        "Appliance cleaning",
        "Detail cleaning",
        "Bathroom sanitizing",
        "Grime removal",
      ],
      ctaHref: "#contact",
    },
    {
      index: "(03)",
      title: "Commercial cleaning",
      description:
        "Professional cleaning solutions that maintain a clean, healthy, and productive work environment.",
      bullets: [
        "Restroom cleaning",
        "Floor care",
        "Trash removal",
        "Desk cleaning",
      ],
      ctaHref: "#contact",
    },
    {
      index: "(04)",
      title: "Move-In / Move-Out",
      description:
        "A complete cleaning service to prepare a space for new occupants or final handover.",
      bullets: [
        "Cabinet cleaning",
        "Full cleaning",
        "Final touch-ups",
        "Floor cleaning",
      ],
      ctaHref: "#contact",
    },
  ] satisfies Service[],
};

export const process = {
  eyebrow: "Our Process",
  heading: "Get cleaner space in just three steps.",
  cta: { label: "Get in Touch", href: "#contact" },
  steps: [
    {
      index: "01",
      title: "Book your service",
      description:
        "Choose your cleaning service, pick a date and time, and tell us your needs — it only takes a few minutes.",
    },
    {
      index: "02",
      title: "We do the cleaning",
      description:
        "Our professional team arrives on time with everything needed to clean your space thoroughly and carefully.",
    },
    {
      index: "03",
      title: "Enjoy a fresh space",
      description:
        "Relax and enjoy a spotless, refreshed, and healthier environment while we handle the hard work.",
    },
  ] satisfies ProcessStep[],
};

export const pricing = {
  eyebrow: "Our Pricing",
  heading: "Simple pricing for every cleaning need.",
  cadenceLabel: "Monthly",
  plans: [
    {
      name: "Basic plan",
      blurb: "Perfect for routine cleaning and everyday home maintenance.",
      price: "$900",
      cadence: "/Per Month",
      bullets: [
        "Surface cleaning",
        "Kitchen wipe-down",
        "Bathroom refresh",
        "Floor vacuum",
      ],
    },
    {
      name: "Standard plan",
      blurb: "Perfect for deeper cleaning and consistently spotless spaces.",
      price: "$1,200",
      cadence: "/Per Month",
      bullets: [
        "Deep kitchen clean",
        "Bathroom sanitization",
        "Floor mopping",
        "Interior dusting",
      ],
      featured: true,
    },
    {
      name: "Premium plan",
      blurb: "Perfect for full-service cleaning and complete peace of mind.",
      price: "$1,500",
      cadence: "/Per Month",
      bullets: [
        "Full deep clean",
        "Appliance exterior",
        "Window interior",
        "Disinfection service",
      ],
    },
  ] satisfies PricingPlan[],
};

export const testimonials = {
  eyebrow: "Testimonials",
  heading: "What our happy clients are saying.",
  badge: "100% Satisfaction Guaranteed!",
  items: [
    {
      quote:
        "I honestly didn't think my home could look this immaculate in just one visit, but they proved me wrong. Everything was spotless, well-organized, and it felt like walking into a brand-new house.",
      name: "Mikasa A.",
      role: "Home Owner",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote:
        "Cleanora completely transformed our office in just one visit. Every workspace was spotless, common areas were perfectly maintained, and the entire environment felt incredibly fresh.",
      name: "Levi A.",
      role: "Office Manager",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&q=80",
    },
  ] satisfies Testimonial[],
};

export const marqueeWords = [
  "Cleaning",
  "Vacuuming",
  "Dusting",
  "Mopping",
  "Sanitizing",
  "Washing",
];

export const faq = {
  eyebrow: "FAQ",
  heading: "Got any questions? We've got answers.",
  items: [
    {
      q: "Do I need to be home during the cleaning?",
      a: "Not at all. Most of our clients give us secure access and come home to a freshly cleaned space. We'll send a confirmation when the team arrives and when they're done.",
    },
    {
      q: "What cleaning products do you use?",
      a: "We use eco-friendly, non-toxic products that are safe for kids, pets, and sensitive surfaces. Have a preference? Just let us know and we'll match it.",
    },
    {
      q: "How long does a typical cleaning take?",
      a: "Most standard homes take 2–4 hours. Deep cleans and move-in/out services typically take 4–8 hours. We'll give you an exact estimate when you book.",
    },
    {
      q: "Can I customize my cleaning service?",
      a: "Yes. Pick any plan as a starting point and tell us what to add, remove, or focus on. Every cleaning is tailored to your home.",
    },
    {
      q: "Do you bring your own cleaning equipment?",
      a: "Yes. Our team arrives fully equipped with professional-grade tools and supplies — you don't need to prepare anything.",
    },
  ] satisfies FaqItem[],
};

export const newsletter = {
  heading: "Subscribe to our cleaning newsletter.",
  caption: "Cleaning tips and exclusive offers weekly.",
  successMessage: "Thank you! Your submission has been received!",
  errorMessage: "Oops! Something went wrong while submitting the form.",
};

export const footer = {
  blurb: brand.blurb,
  hoursTitle: "Working Time",
  hoursMain: brand.hoursMain,
  hoursSecondary: brand.hoursSecondary,
  columns: [
    {
      title: "Website",
      links: navLinks,
    },
    {
      title: "Template",
      links: [
        { label: "Style Guide", href: "#" },
        { label: "Changelog", href: "#" },
        { label: "Licenses", href: "#" },
      ],
    },
  ],
  contactTitle: "Contact",
  contactEmail: brand.email,
  contactPhone: brand.phone,
  social: [
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "X", href: "#", icon: "x" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
  ] satisfies SocialLink[],
};
