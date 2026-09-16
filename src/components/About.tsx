import { Reveal, Section, SectionTitle } from "./Primitives";

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionTitle eyebrow="01 — Who I Am" lead="The" accent="Closer" />
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:pt-4">
          <Reveal delay={0.1}>
            <p className="text-lg leading-[1.7] text-ink md:text-xl">
              I&apos;m eighteen. I dropped out of a management degree I was
              attending on a full scholarship, because the interesting problems
              were outside the classroom. Military family, so the discipline
              came standard, and four languages came with it — I&apos;ll switch
              mid-sentence if that&apos;s what the customer needs.
            </p>
            <p className="mt-6 text-lg leading-[1.7] text-ink/70 md:text-xl">
              What I actually do is find the person, start the conversation,
              understand the inefficiency, and get the deal done. The market
              changes. That part doesn&apos;t.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink/15 pt-8">
              {[
                { k: "Based", v: "Bengaluru" },
                { k: "Age", v: "18" },
                {
                  k: "Languages",
                  v: "English, Hindi, Marathi, Malayalam",
                },
                { k: "Studying", v: "BBA, IIM Bangalore" },
              ].map((item) => (
                <div key={item.k}>
                  <dt className="label mb-2 text-red-brand">{item.k}</dt>
                  <dd className="text-sm leading-snug text-ink/80">{item.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
