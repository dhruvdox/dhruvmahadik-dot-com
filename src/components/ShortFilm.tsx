import { Reveal } from "./Primitives";

const CREDITS = [
  ["Written & directed", "Sahil Wahab"],
  ["Music", "Joseph Alphons"],
  ["Cinematography", "Alex Johnson"],
  ["Starring", "Georgie Michael, Dhruv Mahadik, Sahil Wahab"],
];

export default function ShortFilm() {
  return (
    <section
      id="short-film"
      className="relative bg-near-black px-6 pb-24 text-white md:px-12 md:pb-36 lg:px-20"
    >
      {/* An aside to the music, not a chapter of its own — so no number. */}
      <div className="mx-auto w-full max-w-[1400px] border-t border-white/10 pt-16 md:pt-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label mb-5 text-red-brand">Oh, and —</p>
              <h3 className="display text-[10vw] leading-[0.9] sm:text-[6vw] lg:text-[3.6vw]">
                I also acted in a{" "}
                <span className="accent italic text-red-brand">short film</span>
              </h3>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-lg leading-[1.7] text-white/80">
                <em className="accent not-italic">Still Here</em> is an
                experimental short about James, who sits down for an interview
                and finds the questions blurring the line between reality and
                memory. It&apos;s a good one. Worth the watch.
              </p>

              <dl className="mt-10 grid gap-4 text-sm">
                {CREDITS.map(([role, names]) => (
                  <div
                    key={role}
                    className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-[10rem_1fr]"
                  >
                    <dt className="uppercase tracking-[0.1em] text-xs text-white/40">
                      {role}
                    </dt>
                    <dd className="text-white/70">{names}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <iframe
                  title="Still Here — experimental short film on YouTube"
                  src="https://www.youtube-nocookie.com/embed/xiIXrcYv9_w"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
