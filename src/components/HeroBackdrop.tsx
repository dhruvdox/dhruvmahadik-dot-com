"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

// Hairline diagonals, as left offsets (%) across the hero. Same 32° as DiagonalRule.
const RULES = [18, 46, 71, 93];

// Crosshair markers in the upper part of the hero, as [left %, top %].
const MARKERS: [number, number][] = [
  [25, 22],
  [50, 22],
  [75, 22],
  [25, 48],
  [50, 48],
  [75, 48],
];

/**
 * Image-free hero backdrop: base gradient, drifting ambient glow, editorial
 * rules/markers, film grain and a legibility vignette. Purely decorative and
 * never intercepts pointer events.
 */
export default function HeroBackdrop() {
  const reduced = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(58% 48% at 64% 30%, #8f1717 0%, #3a0c0c 38%, #150808 66%, #0e0e0e 100%)",
        }}
      />

      {/* Ambient drift */}
      <motion.div
        className="absolute left-[5%] top-[-20%] h-[70vw] w-[70vw] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #a11d1d 0%, rgba(161,29,29,0) 65%)",
        }}
        animate={
          reduced
            ? undefined
            : { x: ["-8%", "12%", "0%"], y: ["0%", "10%", "-6%"], scale: [1, 1.12, 0.95] }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Diagonal rules */}
      {RULES.map((left, i) => (
        <motion.div
          key={left}
          className="absolute top-[-25%] h-[150%] w-px origin-top bg-paper/[0.08]"
          style={{ left: `${left}%`, rotate: 32 }}
          initial={reduced ? false : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.6, delay: 0.3 + i * 0.15, ease: EASE }}
        />
      ))}

      {/* Crosshair markers */}
      {MARKERS.map(([left, top], i) => (
        <motion.span
          key={`${left}-${top}`}
          className="absolute -translate-x-1/2 -translate-y-1/2 font-body text-sm leading-none text-white/15"
          style={{ left: `${left}%`, top: `${top}%` }}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 + i * 0.08 }}
        >
          +
        </motion.span>
      ))}

      {/* Editorial corner details (below the nav) */}
      <motion.div
        className="label absolute inset-x-10 top-28 hidden justify-between text-[10px]! text-white/30 md:flex"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span></span>
        <span>Closing deals since 17</span>
      </motion.div>

      {/* Film grain */}
      <div className="grain absolute -inset-1/2 opacity-[0.07] mix-blend-overlay" />

      {/* Legibility vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/40 via-30% to-transparent to-55%" />
    </div>
  );
}
