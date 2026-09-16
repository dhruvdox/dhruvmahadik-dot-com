"use client";

import { motion, useReducedMotion } from "framer-motion";
import HeroBackdrop from "./HeroBackdrop";
import { ShuffleText } from "./Primitives";

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
        Image-free atmospheric backdrop. If a photo/video lands later, it can
        sit beneath this inside a .duotone-wrap and the layers carry over.
      */}
      <HeroBackdrop />

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
            <ShuffleText text="Who" delay={0.4} duration={0.6} />
            <ShuffleText text="Is" delay={0.5} duration={0.6} />
          </motion.span>

          <motion.span
            aria-hidden="true"
            className="fit-line block"
            {...rise(0.25)}
          >
            <ShuffleText
              text="Dhruv Mahadik"
              delay={0}
              duration={1.1}
              className="
  whitespace-nowrap
  bg-gradient-to-r
  from-red-950
  via-red-800
  to-red-brand
  bg-clip-text
  text-transparent
"
            />
          </motion.span>
        </h1>

      </div>
    </section>
  );
}
