import Image from "next/image";
import {
  PhotoPlaceholder,
  Reveal,
  Section,
  SectionTitle,
} from "./Primitives";

type Venture = {
  name: string;
  role: string;
  period: string;
  stat: string;
  statLabel: string;
  outcome: string;
  photo: string;
  photoSrc?: string;
  photoFit?: "cover" | "contain";
  mapsUrl?: string;
};

const VENTURES: Venture[] = [
  {
    name: "Marsera India",
    role: "Founder & MD",
    period: "Aug 2025 — Dec 2025",
    stat: "5 cities",
    statLabel: "Customers in under two months",
    outcome:
      "Started as a side project and found paying customers across five cities inside two months — no team, no budget, just outreach that worked.",
    photo: "Marsera India logo",
    photoSrc: "/images/marsera-1.jpeg",
  },
  {
    name: "Steam Engine",
    role: "Chief Everything Officer",
    period: "Bengaluru",
    stat: "₹1L+",
    statLabel: "Monthly revenue",
    outcome:
      "Parked a momo truck outside the college I’d just dropped out of and ran every part of it — menu, supply, staff, queue. Scaled past ₹1 lakh a month until a construction project took the spot and I shut it down.",
    photo: "The Steam Engine momo truck",
    photoSrc: "/images/steam-engine.jpg",
    mapsUrl: "https://maps.app.goo.gl/1svNPZFSHVGfCkVMA",
  },
];

export default function Ventures() {
  return (
    <Section id="ventures">
      <Reveal>
        <SectionTitle
          eyebrow="02 — Ventures"
          lead="Built It"
          accent="Myself"
        />
      </Reveal>

      <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
        {VENTURES.map((venture, i) => (
          <Reveal key={venture.name} delay={0.05}>
            <article
              className={`grid gap-8 lg:grid-cols-12 lg:gap-14 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {venture.photoSrc ? (
                <div
                  className={`relative aspect-[4/3] overflow-hidden lg:col-span-6 ${
                    venture.photoFit === "contain" ? "bg-ink/5" : ""
                  }`}
                >
                  <Image
                    src={venture.photoSrc}
                    alt={venture.photo}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={
                      venture.photoFit === "contain"
                        ? "object-contain"
                        : "object-cover"
                    }
                  />
                </div>
              ) : (
                <PhotoPlaceholder
                  label={venture.photo}
                  className="aspect-[4/3] lg:col-span-6"
                />
              )}

              <div className="flex flex-col justify-center lg:col-span-6">
                <p className="label mb-4 text-ink/45">
                  {venture.mapsUrl ? (
                    <a
                      href={venture.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-ink/25 underline-offset-4 transition-colors hover:text-red-brand hover:decoration-red-brand"
                    >
                      {venture.period}
                    </a>
                  ) : (
                    venture.period
                  )}
                </p>

                <h3 className="display text-[10vw] leading-[0.9] text-ink sm:text-5xl lg:text-6xl">
                  {venture.name}
                </h3>
                <p className="accent mt-3 text-xl italic text-red-brand">
                  {venture.role}
                </p>

                <div className="mt-8 flex flex-wrap items-baseline gap-x-5 gap-y-2 border-t border-ink/15 pt-6">
                  <span className="display text-3xl text-red-brand sm:text-4xl lg:text-5xl">
                    {venture.stat}
                  </span>
                  <span className="label text-ink/50">{venture.statLabel}</span>
                </div>

                <p className="mt-6 max-w-xl leading-[1.7] text-ink/75">
                  {venture.outcome}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
