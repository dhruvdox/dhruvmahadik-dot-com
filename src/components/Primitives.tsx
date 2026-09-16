"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

const SHUFFLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function scramble(text: string, revealCount: number) {
  return text
    .split("")
    .map((char, i) =>
      char === " " || i < revealCount
        ? char
        : SHUFFLE_CHARS[Math.floor(Math.random() * SHUFFLE_CHARS.length)]
    )
    .join("");
}

/**
 * Scrambles through random characters before settling into the real text,
 * left to right. Skips straight to the final text under reduced motion.
 */
export function ShuffleText({
  text,
  className = "",
  delay = 0,
  duration = 0.8,
}: {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (reduced) {
      setDisplay(text);
      return;
    }

    setDisplay(scramble(text, 0));
    let tick: ReturnType<typeof setInterval> | undefined;

    const start = setTimeout(() => {
      const startTime = performance.now();
      const totalMs = duration * 1000;

      tick = setInterval(() => {
        const progress = Math.min((performance.now() - startTime) / totalMs, 1);
        setDisplay(scramble(text, Math.floor(progress * text.length)));

        if (progress >= 1) {
          setDisplay(text);
          if (tick) clearInterval(tick);
        }
      }, 40);
    }, delay * 1000);

    return () => {
      clearTimeout(start);
      if (tick) clearInterval(tick);
    };
  }, [text, delay, duration, reduced]);

  return (
    <span className={className} aria-hidden="true">
      {display}
    </span>
  );
}

/** Fade-and-rise on scroll into view. The site's only entrance motion. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * The recurring diagonal rule. Used sparingly — twice across the page —
 * as a section divider rather than decoration.
 */
export function DiagonalRule({
  tone = "ink",
  className = "",
}: {
  tone?: "ink" | "paper" | "red";
  className?: string;
}) {
  const reduced = useReducedMotion();
  const fill =
    tone === "paper" ? "#f4f0e8" : tone === "red" ? "#b91c1c" : "#141414";

  return (
    <div
      className={`pointer-events-none flex justify-center py-16 md:py-28 ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="h-[160px] w-[14px] origin-center md:h-[300px] md:w-[22px]"
        style={{ background: fill, rotate: 32 }}
        initial={reduced ? false : { scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

/**
 * Section title in the reference's two-part treatment: an uppercase display
 * line with exactly one serif accent word dropped in.
 */
export function SectionTitle({
  lead,
  accent,
  trail,
  eyebrow,
  onDark = false,
}: {
  lead?: string;
  accent: string;
  trail?: string;
  eyebrow?: string;
  onDark?: boolean;
}) {
  return (
    <div>
      {eyebrow ? (
        <p
          className={`label mb-5 ${onDark ? "text-red-brand" : "text-red-brand"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`display text-[13vw] leading-[0.86] sm:text-[9vw] lg:text-[6.5vw] ${
          onDark ? "text-white" : "text-ink"
        }`}
      >
        {lead ? `${lead} ` : ""}
        <span className="accent italic text-red-brand">{accent}</span>
        {trail ? ` ${trail}` : ""}
      </h2>
    </div>
  );
}

/** Standard paper-section shell: generous whitespace, consistent gutters. */
export function Section({
  id,
  children,
  tone = "paper",
  className = "",
}: {
  id: string;
  children: ReactNode;
  tone?: "paper" | "dark";
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`${
        tone === "dark" ? "bg-near-black text-white" : "bg-paper text-ink"
      } px-6 py-24 md:px-12 md:py-36 lg:px-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1400px]">{children}</div>
    </section>
  );
}

/** Marks imagery the client has yet to supply, without looking broken. */
export function PhotoPlaceholder({
  label,
  className = "",
  duotone = false,
}: {
  label: string;
  className?: string;
  duotone?: boolean;
}) {
  return (
    <div
      className={`placeholder-grid relative flex items-end overflow-hidden ${
        duotone ? "duotone-wrap" : ""
      } ${className}`}
    >
      <span className="label relative z-10 m-5 text-red-brand/80">{label}</span>
    </div>
  );
}
