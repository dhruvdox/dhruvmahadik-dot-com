"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-near-black"
    >
      {/*
        Hero imagery is not final. Until the photo/video lands, this is the
        duotone treatment applied to a placeholder surface — swap the inner
        element for an <Image> or <video> and the treatment carries over.
      */}
      <div className="duotone-wrap placeholder-grid absolute inset-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(58% 48% at 64% 30%, #8f1717 0%, #3a0c0c 38%, #150808 66%, #0e0e0e 100%)",
          }}
        />
        <div className="absolute inset-0 z-[3] flex items-start justify-end px-6 pt-20 md:px-10 md:pt-24">
          <span className="label text-white/20">
            Hero photo / video — placeholder
          </span>
        </div>
      </div>

      <div className="relative z-10 w-full px-6 pb-8 md:px-10 md:pb-10">
        <motion.div
          className="mb-4 flex items-end justify-between"
          {...rise(0.15)}
        >
          <span className="label text-red-brand">GTM Operator</span>
          <span className="label text-red-brand">Bengaluru</span>
        </motion.div>

        <h1 className="display text-white">
          <span className="sr-only">This is Dhruv Mahadik</span>

          <motion.span
            aria-hidden="true"
            className="fit-line flex justify-between"
            {...rise(0.25)}
          >
            <span>This</span>
            <span>Is</span>
          </motion.span>

          <motion.span
            aria-hidden="true"
            className="fit-line block whitespace-nowrap text-red-brand"
            {...rise(0.35)}
          >
            Dhruv Mahadik
          </motion.span>
        </h1>

        <motion.p
          className="mt-7 max-w-md text-sm leading-relaxed text-white/60 md:mt-9"
          {...rise(0.5)}
        >
          I find the inefficiency in a market and close the deal — enterprise
          SaaS, commercial real estate, or momos outside a college gate.
        </motion.p>
      </div>

      <motion.div
        className="relative z-10 flex items-center justify-between border-t border-white/10 px-6 py-4 md:px-10"
        {...rise(0.65)}
      >
        <span className="label hidden text-white/40 sm:inline">Scroll</span>
        <span className="label text-white/40">
          VC · Defence Tech · Early Stage
        </span>
      </motion.div>
    </section>
  );
}
