import { Reveal } from "./Primitives";

const CREDENTIALS = [
  { stat: "IIMB", label: "BBA, part-time" },
  { stat: "Rank 2", label: "TAPMI, institute-wide" },
  { stat: "100%", label: "Tuition scholarship" },
  { stat: "95+", label: "10th & 12th, science" },
];

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="bg-red-brand px-6 py-16 text-white md:px-12 md:py-20 lg:px-20"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal>
          <p className="label mb-10 text-white/60">04 — Credentials</p>
        </Reveal>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {CREDENTIALS.map((item, i) => (
            <Reveal
              key={item.stat}
              delay={i * 0.06}
              className="border-t border-white/30 pt-5"
            >
              <dt className="display text-4xl leading-none md:text-5xl">
                {item.stat}
              </dt>
              <dd className="label mt-3 text-white/70">{item.label}</dd>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-xl text-sm text-white/65">
            Took the scholarship, ranked second in the institute, then left to
            build. The degree at IIMB runs alongside the work.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
