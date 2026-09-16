import {
  PhotoPlaceholder,
  Reveal,
  Section,
  SectionTitle,
} from "./Primitives";

export default function OffTheClock() {
  return (
    <Section id="off-the-clock">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionTitle eyebrow="06 — Hobbies" lead="Off The" accent="Clock" />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 text-lg leading-[1.7] text-ink/80">
              Enterprise sailing. And when I&apos;m in Kerala, taking Naval
              horses out to eat in the fields — which is exactly as good as it
              sounds.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          <Reveal delay={0.15}>
            <PhotoPlaceholder
              label="Sailing — photo"
              className="aspect-[3/4]"
            />
          </Reveal>
          <Reveal delay={0.25}>
            <PhotoPlaceholder
              label="Kerala, horses — photo"
              className="aspect-[3/4] sm:mt-12"
            />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
