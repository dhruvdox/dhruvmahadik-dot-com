import { PhotoPlaceholder, Reveal, SectionTitle } from "./Primitives";

export default function Music() {
  return (
    <section
      id="music"
      className="relative overflow-hidden bg-near-black px-6 py-24 text-white md:px-12 md:py-36 lg:px-20"
    >
      {/* The one section allowed to run hotter than the rest. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(85% 60% at 15% 0%, #a11d1d 0%, rgba(14,14,14,0) 62%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1400px]">
        <Reveal>
          <SectionTitle
            eyebrow="05 — The Music"
            lead="Stage Name"
            accent="Mach 1"
            onDark
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14 md:mt-20">
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-lg leading-[1.7] text-white/80 md:text-xl">
                I write, record, mix and perform Hindi/Urdu rap.{" "}
                <em className="accent not-italic">Breaking Coffins</em> is the
                debut mixtape, made with my rap partner Krish Kumar.
              </p>
              <p className="mt-5 leading-[1.7] text-white/50">
                Start at the last track — <em className="accent not-italic text-red-brand">Destiny (Freestyle)</em>.
                It&apos;s the one I&apos;d play first.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <PhotoPlaceholder
                label="Performance photo / clip"
                duotone
                className="mt-10 aspect-[3/2]"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <iframe
                title="Mach 1 — debut mixtape on Spotify"
                src="https://open.spotify.com/embed/album/2jpiVsZTdMYEWlCM7GqcY7?theme=0"
                width="100%"
                height="480"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full rounded-xl"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
