import { Reveal, Section, SectionTitle } from "./Primitives";

const ROLES = [
  {
    company: "Login Realty",
    role: "Growth, Corporate Real Estate",
    place: "Bengaluru",
    period: "Aug 2026 — Sep 2026",
    note: "Closed a commercial deal in my first 15 days. Still get inbound queries from that desk.",
  },
  {
    company: "Inc42 Media",
    role: "Operations Intern",
    place: "Bengaluru",
    period: "May 2026",
    note: "1 of 20 interns chosen from 1600+ applicants. Ran floor ops for India's largest AI Summit.",
  },
  {
    company: "LvlUp Ventures",
    role: "VC in Residence",
    place: "New York (Remote)",
    period: "Apr 2026 — Jul 2026",
    note: "Carried the firm's name into Bangalore founder circles and lifted inbound interest.",
  },
  {
    company: "Flowmingo AI",
    role: "GTM & Strategy",
    place: "Ho Chi Minh City (Remote)",
    period: "Nov 2025 — Feb 2026",
    note: "Signed a Big 4 accounting firm as a client in month one. Part-time role, enterprise outcome.",
  },
];

export default function Work() {
  return (
    <Section id="work" tone="dark">
      <Reveal>
        <SectionTitle
          eyebrow="03 — Work"
          lead="Paid To"
          accent="Sell"
          onDark
        />
      </Reveal>

      <ul className="mt-16 md:mt-24">
        {ROLES.map((role, i) => (
          <Reveal key={role.company} delay={i * 0.06}>
            <li className="group border-t border-white/15 py-8 last:border-b md:py-10">
              <div className="grid gap-4 md:grid-cols-12 md:items-baseline md:gap-8">
                <p className="label text-white/40 md:col-span-3">
                  {role.period}
                </p>

                <div className="md:col-span-4">
                  <h3 className="display text-2xl text-white transition-colors duration-300 group-hover:text-red-brand md:text-3xl">
                    {role.company}
                  </h3>
                  <p className="accent mt-2 text-lg text-white/55">
                    {role.role}
                  </p>
                  <p className="label mt-3 flex items-center gap-1.5 text-white/30">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-3 w-3 shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21zm0-9.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z"
                      />
                    </svg>
                    {role.place}
                  </p>
                </div>

                <p className="leading-[1.7] text-white/70 md:col-span-5">
                  {role.note}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <p className="mt-10 max-w-xl text-sm leading-relaxed text-white/35">
          Plus a venture scout program with a New York fund, and automation and
          BD for a small consultancy. Useful reps, not headlines.
        </p>
      </Reveal>
    </Section>
  );
}
