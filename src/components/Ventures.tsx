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
};

const VENTURES: Venture[] = [
  {
    name: "Steam Engine",
    role: "Chief Everything Officer",
    period: "Bengaluru",
    stat: "₹1L+",
    statLabel: "Monthly revenue",
    outcome:
      "Parked a momo truck outside the college I’d just dropped out of and ran every part of it — menu, supply, staff, queue. Scaled past ₹1 lakh a month until a construction project took the spot and I shut it down.",
    photo: "Steam Engine truck — photo",
  },
  {
    name: "Marsera India",
    role: "Founder & MD",
    period: "Aug 2025 — Dec 2025",
    stat: "5 cities",
    statLabel: "Customers in under two months",
    outcome:
      "Started as a side project and found paying customers across five cities inside two months — no team, no budget, just outreach that worked.",
    photo: "Marsera India — photo",
  },
  {
    name: "The Hackathon",
    role: "A fashion hackathon, week one of college",
    period: "Aug 2025",
    stat: "Balenciaga",
    statLabel: "Partnered, at 17",
    outcome:
      "Ran a hackathon for fashion designers in my first week of college. Landed Balenciaga as a partner and drew designers from NID Chennai and Swinburne. It barely made money — it did get me invited to lecture a post-graduate design class at seventeen.",
    photo: "Hackathon / guest lecture — photo",
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
              <PhotoPlaceholder
                label={venture.photo}
                className="aspect-[4/3] lg:col-span-6"
              />

              <div className="flex flex-col justify-center lg:col-span-6">
                <p className="label mb-4 text-ink/45">{venture.period}</p>

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
