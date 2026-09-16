import Image from "next/image";
import {
  PhotoPlaceholder,
  Reveal,
  Section,
  SectionTitle,
} from "./Primitives";

/*
 * To add a photo: put the file in public/images/ and type its filename into
 * `file` below, e.g. file: "sailing.jpg". While `file` is empty, the slot shows
 * a placeholder. Photos are cropped to a 3:4 portrait frame.
 */
const PHOTOS = [
  { file: "", label: "Sailing", alt: "Dhruv sailing an Enterprise dinghy" },
  { file: "", label: "Kerala, horses", alt: "Dhruv with horses in Kerala" },
];

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
          {PHOTOS.map((photo, i) => {
            const frame = `aspect-[3/4] ${i % 2 === 1 ? "sm:mt-12" : ""}`;

            return (
              <Reveal key={photo.label} delay={0.15 + i * 0.1}>
                {photo.file ? (
                  <div className={`relative overflow-hidden ${frame}`}>
                    <Image
                      src={`/images/${photo.file}`}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <PhotoPlaceholder
                    label={`${photo.label} — photo`}
                    className={frame}
                  />
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
