import { Reveal } from "./Primitives";

const LOOKING_FOR = [
  "GTM & sales roles",
  "Venture capital",
  "Defence tech",
  "Early-stage founders",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-near-black px-6 pt-24 pb-10 text-white md:px-12 md:pt-36 lg:px-20"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal>
          <p className="label mb-8 text-red-brand">07 — What I&apos;m After</p>
          <h2 className="display text-[11vw] leading-[0.86] sm:text-[8vw] lg:text-[6vw]">
            Let&apos;s Do{" "}
            <span className="accent italic text-red-brand">Business</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <p className="label mb-6 text-white/40">Open to</p>
              <ul className="space-y-3">
                {LOOKING_FOR.map((item) => (
                  <li
                    key={item}
                    className="display border-b border-white/15 pb-3 text-xl text-white/85 md:text-2xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.2}>
              <p className="label mb-6 text-white/40">Reach me</p>

              <a
                href="mailto:work@dhruvmahadik.com"
                className="fit-email display block leading-none text-white transition-colors duration-300 hover:text-red-brand"
              >
                work@dhruvmahadik.com
              </a>

              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
                <a
                  href="https://www.linkedin.com/in/DhruvMahadik"
                  target="_blank"
                  rel="noreferrer"
                  className="label text-white/60 transition-colors hover:text-red-brand"
                >
                  LinkedIn ↗
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <footer className="mt-24 flex flex-col gap-3 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="label text-white/30">Dhruv Mahadik</span>
          <span className="label text-white/30">
            Bengaluru · {new Date().getFullYear()}
          </span>
        </footer>
      </div>
    </section>
  );
}
